import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 px-4 flex text-center items-center content-center md:block">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="hidden md:block text-2xl font-bold text-blue-600 dark:text-blue-400">
                    Martin
                </Link>
                <div className="flex gap-8">
                    <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">
                        About
                    </Link>
                    <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">
                        Projects
                    </Link>
                    <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">
                        Contact
                    </Link>
                    <a href="/Martin-Resume-2026.pdf" download="Martin-Resume-2026.pdf" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition" target="_blank">
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );
}