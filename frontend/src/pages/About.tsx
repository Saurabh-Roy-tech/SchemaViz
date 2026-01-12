import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function About() {
    return (
        <div className="min-h-screen bg-slate-50">
            <NavBar />

            <main className="container mx-auto px-6 py-12 pt-32">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Hero Section */}
                    <section className="text-center space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            About <span className="text-rose-700">RachnaAI</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Empowering developers to visualize complexity. We turn code into clear, actionable diagrams instantly.
                        </p>
                    </section>

                    {/* Our Story / Mission */}
                    <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p>
                                In the fast-paced world of software development, understanding database schemas and architecture is crucial but often time-consuming.
                                Documentation frequently lags behind code, leading to confusion and errors.
                            </p>
                            <p className="mt-4">
                                <strong>RachnaAI</strong> was born from this necessity. By harnessing the power of modern AI (Google Gemini), we provide an automated solution
                                that reads your repository and generates accurate Entity-Relationship (ER) diagrams in seconds. Our goal is to bridge the gap between
                                code and comprehension, allowing developers to focus on building, not documenting.
                            </p>
                        </div>
                    </section>

                    {/* Technology */}
                    <section className="grid md:grid-cols-2 gap-8">
                        <div className="bg-rose-900 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Powered by Innovation</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 opacity-75" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    <span>Google Gemini AI Models</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 opacity-75" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    <span>React (Vite) Framework</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 opacity-75" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    <span>Graphviz Visualization Engine</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why It Matters</h3>
                            <p className="text-gray-600 mb-4">
                                Visualizing data structures is the first step to optimizing them. RachnaAI helps you:
                            </p>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Onboard new team members faster</li>
                                <li>• Identify redundancy in database design</li>
                                <li>• Generate instant documentation for stakeholders</li>
                            </ul>
                        </div>
                    </section>

                    {/* Developer Profile */}
                    <section className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                        <div className="bg-rose-900 p-8 text-center text-white">
                            <h2 className="text-3xl font-bold">Meet the Developer</h2>
                        </div>
                        <div className="p-8 text-center">
                            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl overflow-hidden border-4 border-white shadow-lg -mt-24">
                                {/* Fallback Avatar */}
                                <span className="text-gray-400">SR</span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900">Saurabh Roy</h3>
                            <p className="text-rose-600 font-medium mb-4">Creator & Lead Engineer</p>

                            <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                                A passionate Full Stack Developer with a knack for building intuitive AI-powered applications.
                                Dedicated to solving real-world developer problems through clean code and innovative solutions.
                                Saurabh created RachnaAI to simplify the complex task of database architecture visualization for developers worldwide.
                            </p>

                            <div className="flex justify-center gap-4">
                                <a
                                    href="https://www.linkedin.com/in/saurabh--roy"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-6 py-2 bg-[#0077b5] text-white rounded-lg font-medium hover:bg-[#006396] transition-colors flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    Connect on LinkedIn
                                </a>

                            </div>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
}
