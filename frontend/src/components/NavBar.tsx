import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-lg">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-rose-600 to-rose-800 text-white shadow-lg">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-700 to-rose-900 bg-clip-text text-transparent">
                            RachnaAI
                        </h1>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-gray-600 hover:text-rose-700 font-medium transition-colors">Home</Link>
                        <Link to="/about" className="text-gray-600 hover:text-rose-700 font-medium transition-colors">About</Link>
                        <a href="/#contact" className="text-gray-600 hover:text-rose-700 font-medium transition-colors">Contact</a>
                        <a href="https://www.linkedin.com/in/saurabh--roy" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-rose-700 font-medium transition-colors">LinkedIn</a>
                    </nav>

                    {/* Right Section / Status */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 bg-white/50 px-3 py-1.5 rounded-full border border-gray-200/50">
                            <span className="flex items-center gap-1">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                                </span>
                                AI Powered
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
