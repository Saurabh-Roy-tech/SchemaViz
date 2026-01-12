# RachnaAI: AI-Powered ER Diagram Generator
## Project Explanation Guide for Interviews

### 1. Elevator Pitch (The 30-Second Summary)
"RachnaAI is an intelligent developer tool that instantly transforms any GitHub repository URL into a visual Entity-Relationship (ER) diagram. It uses Google's Gemini AI to analyze code files, detect database schemas (from SQL, Prisma, Django, etc.), and renders interactive diagrams in the browser. It solves the problem of outdated or missing documentation by automating the visualization of database architectures."

---

### 2. The Problem
*   **Documentation Lag:** In fast-paced development, documentation often lags behind code.
*   **Complex Onboarding:** New developers struggle to understand the relationships between database tables in large codebases.
*   **Manual Effort:** Manually drawing ER diagrams is tedious and time-consuming.

### 3. The Solution
RachnaAI automates this process. The user simply pastes a GitHub URL. The system clones the repo, identifies relevant schema files (like `schema.prisma`, `models.py`, `.sql` files), sends them to an LLM (Gemini) to extract the structure, and generates a DOT graph visualization.

---

### 4. Technical Architecture (The "How It Works")

#### Frontend
*   **Framework:** Next.js 14 (React) with TypeScript.
*   **Styling:** Tailwind CSS for a modern, responsive, "rose-themed" UI.
*   **Visualization:** `viz.js` (Graphviz port) to render the DOT string into an SVG diagram.
*   **State Management:** React `useState` for handling loading states and diagram data.

#### Backend
*   **Runtime:** Node.js with Express.
*   **AI Integration:** Google Gemini API (`gemini-2.5-pro`, `1.5-pro`, `1.5-flash`) for intelligent schema extraction.
*   **Git Operations:** `simple-git` to clone repositories temporarily.
*   **File Scanning:** Recursive file scanning to identify schema-relevant files based on extensions (`.sql`, `.prisma`, `.js`, `.py`, `.php`).

#### The Data Flow (Step-by-Step)
1.  **User Input:** User submits a Repo URL and Model choice on the Frontend.
2.  **API Call:** Frontend calls `POST /api/analyze`.
3.  **Clone:** Backend clones the repo to a temporary directory.
4.  **Scan:** Backend scans for files likely to contain database definitions.
5.  **AI Analysis:** The content of these files is sent to Gemini with a specific Prompt to extract Entities and Relationships in a JSON format.
6.  **Conversion:** The JSON output is converted into a DOT string (Graphviz format).
7.  **Cleanup:** The temporary repo is deleted.
8.  **Response:** The DOT string and metadata are sent back to the Frontend.
9.  **Render:** Frontend renders the DOT string as an interactive diagram.

---

### 5. Key Challenges & Solutions (Interview Gold)

**Challenge 1: Handling Token Limits & Large Repos**
*   *Problem:* Sending an entire repository to an LLM exceeds token limits.
*   *Solution:* Implemented a smart scanner that *only* reads relevant files (e.g., stopping at `schema.prisma` or `models.py`) and truncates very large files before sending them to the AI.

**Challenge 2: Ensuring Valid DOT Output**
*   *Problem:* LLMs can hallucinate or output invalid JSON/syntax.
*   *Solution:* We use valid JSON enforcement in the prompt ("Return ONLY JSON") and a robust `convertToDot` utility function in the backend that programmatically builds the DOT string from the structured JSON, ensuring syntax correctness rather than asking the AI to write DOT directly.

**Challenge 3: Managing AI Quotas**
*   *Problem:* Hitting rate limits with the standard model.
*   *Solution:* Implemented a **Model Switcher** feature allowing users to toggle between `Gemini 2.5 Pro`, `1.5 Pro`, and `1.5 Flash` to balance between intelligence and speed/quota.

**Challenge 4: Security**
*   *Problem:* Cloning arbitrary repos.
*   *Solution:* We use ephemeral temporary directories that are cleaned up (deleted) immediately after analysis, ensuring no storage waste or persisted malicious code.

---

### 6. Tech Stack Summary
*   **Frontend:** Next.js, React, Tailwind CSS, Viz.js
*   **Backend:** Node.js, Express.js
*   **AI:** Google Gemini (Generative AI)
*   **Tools:** Simple-Git, Dotenv

---

### 7. Future Enhancements
*   **Auth Integration:** Save generated diagrams to a user profile.
*   **Direct Database Connection:** Connect to a live DB instead of just code.
*   **Interactive Editing:** Allow users to drag/drop and edit the generated diagram (currently it's read-only).
