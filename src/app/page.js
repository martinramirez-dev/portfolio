import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black flex items-center justify-center px-4 py-20 md:py-0">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Martin - Frontend Developer
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
            Specialized in React & Next.js
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Passionate frontend developer from Argentina building modern, performant webs in React, Next.js and Tailwind. Looking for remote opportunities to create amazing user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/projects"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
