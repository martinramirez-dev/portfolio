'use client';

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!name.trim() || !email.trim() || !message.trim()) {
            setStatus('Please fill any fields');
            return;
        }

        setLoading(true);
        setStatus('');

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        if(res.ok) {
            setStatus('Message sent successfully! Thanks for reaching out 😊');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setStatus('Error sending message - try again');
        }
        setLoading(false);
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-center text-gray-900 dark:text-white mb-6">
                        Contact Me
                    </h1>

                    <p className="text-xl md:text-2xl text-center text-gray-700 dark:text-blue-600 mb-12">
                        Let's connect! Feel free to reach out for collaborations or opportunities.
                    </p>

                    <form onSubmit={handleSubmit} className="gb-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
                        <div className="mb-8">
                            <label className="block text-lg font-semibold mb-2 dark:text-white">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-600 dark:bg-gray-700 dark:text-white"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        
                        <div className="mb-8">
                            <label className="block text-lg font-semibold mb-2 dark:text-white">Email</label>
                            <input 
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-600 dark:bg-gray-700 dark:text-white"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        
                        <div className="mb-8">
                            <label className="block text-lg font-semibold mb-2 dark:text-white">Message</label>
                            <textarea 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={6}
                                className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-600 dark:bg-gray-700 dark:text-white"
                                placeholder="Your message..."
                                required
                            />
                        </div>

                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>

                        {status && (
                            <p className={`text-center mt-8 text-lg ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                                {status}
                            </p>
                        )}
                    </form>
                    
                    <div className="text-center mt-12">
                      <p className="text-4xl font-bold mb-4 dark:text-white">Or reach me directly:</p>
                      <p className="text-lg">
                        <a href="mailto:tuemail@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                          devmartinramirez@gmail.com
                        </a>
                      </p>
                      <p className="text-lg mt-2 text-blue-600 dark:text-blue-400">
                        Phone: +54 9 383 4193832 (WhatsApp or Call)
                      </p>
                      <div className="flex justify-center gap-6 mt-6">
                        <a href="https://www.linkedin.com/in/martin-ramirez-703161383/" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
                          LinkedIn
                        </a>
                        <a href="https://github.com/martinramirez-dev" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
                          GitHub
                        </a>
                      </div>
                    </div>
                </div>
            </main>
        </>
    );
}