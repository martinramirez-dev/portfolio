import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const projects = [
  {
    slug: 'cinemine',
    title: 'Cinemine',
    img: '/images/cm.png',
    description: 'A movie discovery app using The Movie Database API. Includes search, featured section, movie detail modals, and a watchlist.',
    badges: ['HTML5', 'CSS3', 'JavaScript', 'API'],
    github: 'https://github.com/martinramirez-dev/cinemine',
    live: 'https://martinramirez-dev.github.io/cinemine/',
  },
  {
    slug: 'pokemon-search',
    title: 'Pokemon Search',
    img: '/images/ps.png',
    description: 'A web app to search for Pokémon using the PokéAPI. Features a Game Boy–inspired design and localStorage-based favorites.',
    badges: ['HTML5', 'CSS3', 'JavaScript', 'API'],
    github: 'https://github.com/martinramirez-dev/pokemon-search',
    live: 'https://martinramirez-dev.github.io/pokemon-search/',
  },
  {
    slug: 'botaniq',
    title: 'Botaniq',
    img: '/images/bt.png',
    description: 'A modern, responsive static page for a plant shop. Includes a menu, gallery, and contact section with a fresh green aesthetic.',
    badges: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/martinramirez-dev/botaniq',
    live: 'https://martinramirez-dev.github.io/botaniq/',
  },
  {
    slug: 'coffee-lovers',
    title: 'Coffee Lovers',
    img: '/images/cl.png',
    description: 'A warm and elegant landing page for coffee lovers. Built with pure HTML and CSS, inspired by creamy coffee tones.',
    badges: ['HTML5', 'CSS3'],
    github: 'https://github.com/martinramirez-dev/coffee-lovers',
    live: 'https://martinramirez-dev.github.io/coffee-lovers/',
  }
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-blue-600 max-w-3xl mx-auto">
              Here are some of the projects I've built while learning and growing as a developer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col"
              >

              <div className="relative w-full h-64 overflow-hidden rounded-t-2xl">
                <Image
                  src={project.img}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

                <div className="p-8 flex flex-col flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
                    >
                      GitHub
                    </a>
                  </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 text-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition mt-3"
                    >
                      Description
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}