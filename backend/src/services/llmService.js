import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the backend root directory
const envPath = path.resolve(__dirname, '../../.env');
const result = dotenv.config({ path: envPath });

console.log('📁 Loading .env from:', envPath);
console.log('📁 dotenv result:', result.error ? result.error.message : 'success');
console.log('🔑 GEMINI_API_KEY loaded:', process.env.GEMINI_API_KEY ? 'YES' : 'NO');

// Lazy-initialized Gemini AI client
let genAI = null;

/**
 * Get or create the Gemini AI client
 * @returns {GoogleGenerativeAI}
 */
function getGenAI() {
    if (!genAI) {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error('Gemini API key is not configured. Please set GEMINI_API_KEY in .env file');
        }
        genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    }
    return genAI;
}

/**
 * Extract database schema from code files using Google Gemini
 * @param {Object} schemaFiles - Object containing detected files and contents
 * @returns {Promise<Object>} - Schema in JSON format
 */
export async function extractSchemaWithLLM(schemaFiles, modelName = "gemini-2.5-flash") {
    try {
        // Get the Gemini AI client (lazy initialization ensures env vars are loaded)
        const ai = getGenAI();

        // Prepare the prompt with file contents
        const filesContext = Object.entries(schemaFiles.fileContents)
            .map(([filename, content]) => {
                // Limit content length to avoid token limits (Gemini has ~30k token limit)
                const truncatedContent = content.length > 4000
                    ? content.substring(0, 4000) + '\n... [truncated]'
                    : content;

                return `--- File: ${filename} ---\n${truncatedContent}\n`;
            })
            .join('\n\n');

        const prompt = `You are an Entity-Relationship (ER) diagram expert. Analyze the following code files and extract a complete ER diagram.

Detected Technologies: ${schemaFiles.detectedTech.join(', ')}

Files to analyze:
${filesContext}

Your task:
Extract entities, attributes, and relationships to create a proper ER diagram.

Return ONLY a valid JSON object in this EXACT format (no markdown, no code blocks):
{
  "entities": {
    "EntityName": {
      "attributes": {
        "attributeName": {
          "type": "string|number|date|boolean",
          "isKey": false
        }
      }
    }
  },
  "relationships": {
    "RelationshipName": {
      "entity1": "EntityName1",
      "entity2": "EntityName2",
      "cardinality1": "1|M|N",
      "cardinality2": "1|M|N"
    }
  }
}

Important rules:
1. Entity names should be singular, capitalized (e.g., "Patient", "Doctor", "Employee")
2. Attributes should be simple properties of entities (e.g., "name", "age", "email")
3. Mark primary key attributes with "isKey": true
4. Relationship names should be verbs (e.g., "Consults", "Maintains", "Has")
5. Cardinality: use "1" for one, "M" or "N" for many
6. Common entities: User, Customer, Order, Product, Employee, Patient, Doctor, etc.
7. Foreign keys become relationships, NOT attributes
8. Return ONLY the JSON object, no additional text`;

        // Get Gemini Pro model
        const model = ai.getGenerativeModel({
            model: modelName,
            generationConfig: {
                temperature: 0.1, // Low temperature for consistent output
                topP: 0.8,
                topK: 10,
            }
        });

        // Call Gemini API
        console.log('🤖 Calling Gemini AI for schema extraction...');
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        console.log('✅ Gemini response received');

        // Clean up the response (remove markdown code blocks if present)
        text = text.trim();
        if (text.startsWith('```json')) {
            text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '');
        } else if (text.startsWith('```')) {
            text = text.replace(/```\n?/g, '');
        }
        text = text.trim();

        // Parse JSON
        let schema;
        try {
            schema = JSON.parse(text);
        } catch (parseError) {
            console.error('Failed to parse Gemini response:', text);
            throw new Error(`Gemini returned invalid JSON: ${parseError.message}`);
        }

        // Validate schema structure
        if (typeof schema !== 'object' || schema === null) {
            throw new Error('Invalid schema format returned by Gemini');
        }

        console.log(`✅ Schema extracted: ${Object.keys(schema).length} tables found`);

        return schema;

    } catch (error) {
        console.error('❌ Gemini LLM Error:', error);

        // Provide helpful error messages
        if (error.message.includes('leaked') || error.message.includes('403')) {
            throw new Error('Your Gemini API key has been revoked because it was detected as leaked. Please generate a new API key at https://aistudio.google.com/app/apikey');
        }

        if (error.message.includes('API key') && !process.env.GEMINI_API_KEY) {
            throw new Error('Gemini API key is not configured. Please set GEMINI_API_KEY in your .env file');
        }

        if (error.message.includes('quota') || error.message.includes('rate limit')) {
            throw new Error('Gemini API quota exceeded or rate limited. Please try again later.');
        }

        throw new Error(`Failed to extract schema with Gemini: ${error.message}`);
    }
}
