import { useState } from 'react';
import DiagramViewer from '../components/DiagramViewer';
import GitHubInput from '../components/GitHubInput';
import Features from '../components/Features';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
    const [diagramData, setDiagramData] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleAnalyze = async (repoUrl: string, model: string = 'gemini-2.5-flash') => {
        setLoading(true);
        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001';
            const response = await fetch(`${apiUrl}/api/analyze`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ repoUrl, model }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to analyze repository');
            }

            const data = await response.json();
            setDiagramData(data);
        } catch (error: any) {
            alert(error.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setDiagramData(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50 to-rose-100">
            <NavBar />
            <main className="container mx-auto px-6 py-12 pt-32">
                {!diagramData ? (
                    <div className="space-y-16">
                        <div className="text-center space-y-6 py-12">
                            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                                Generate ER Diagrams from
                                <span className="block mt-2 bg-gradient-to-r from-rose-600 via-rose-700 to-rose-900 bg-clip-text text-transparent">
                                    Any GitHub Repository
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Paste a GitHub URL, and let AI analyze your database schema automatically.
                                Supports SQL, Prisma, Sequelize, Django, Laravel, and more.
                            </p>
                        </div>

                        <GitHubInput onAnalyze={handleAnalyze} loading={loading} />

                        <Features />

                        <div id="contact" className="mt-24 text-center">
                            <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
                            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto border border-gray-100">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <div className="h-12 w-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-semibold text-gray-900">Email Us</h4>
                                        <p className="text-gray-600">hello@rachna-ai.dev</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-12 w-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-semibold text-gray-900">Location</h4>
                                        <p className="text-gray-600">Delhi, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <DiagramViewer data={diagramData} onReset={handleReset} />
                )}
            </main>
            <Footer />
        </div>
    );
}
