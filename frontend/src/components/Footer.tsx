import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-24 border-t border-gray-200 bg-white/50 backdrop-blur">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-rose-600 to-rose-800 text-white shadow-lg">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-rose-700 to-rose-900 bg-clip-text text-transparent">
                                RachnaAI
                            </span>
                        </div>
                        <p className="text-gray-600 max-w-sm">
                            Generate beautiful Entity-Relationship diagrams from your code in seconds. Powered by advanced AI to help you understand your database architecture.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li><Link to="/" className="hover:text-rose-600 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-rose-600 transition-colors">About</Link></li>
                            <li><a href="/#contact" className="hover:text-rose-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>
                                <a href="https://www.linkedin.com/in/saurabh--roy" target="_blank" rel="noreferrer" className="hover:text-rose-600 transition-colors flex items-center gap-2">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/saurabhroy" target="_blank" rel="noreferrer" className="hover:text-rose-600 transition-colors flex items-center gap-2">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} RachnaAI. Open Source Project.</p>
                    <p> by Saurabh Roy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
