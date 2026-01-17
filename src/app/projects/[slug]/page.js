import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const projectData = [
    {
      slug: 'shoppie',
      title: 'Shoppie',
      img: '/images/shoppie.jpeg',
      description: 'An E-Commerce app using fakesotreapi. Includes a complete list of products, description, cart and a simulated payment with a success message',
      tech: ['Next.js', 'FakestoreAPI', 'Tailwind', 'API Routes', 'Context'],
      github: 'https://github.com/martinramirez-dev/shoppie',
      live: 'https://shoppie-gules.vercel.app/',
      challenges: [
        "Integrating an external API with state persistence, requiring proper serialization and deserialization of data",
        "Relearning and correctly implementing serialization and deserialization after not using it for a long time",
        "Building a fully responsive table layout that adapts well to different screen sizes",
        "Ensuring consistent data flow between the API, global state, and persisted storage"
      ],
      learnings: [
        "Improved my UI design skills by building an entire page using Tailwind CSS",
        "Learned how to build a complete React application with routing, global state management, and persistence using Redux",
        "Gained hands-on experience with performance optimizations such as lazy loading and React Suspense",
        "Implemented robust error handling using Error Boundaries",
        "Learned how to properly serialize and deserialize data to ensure reliable persistence and API integration"
      ]
    },
    {
      slug: 'task-manager',
      title: 'Task Manager',
      img: '/images/task-m.jpeg',
      description: 'A Task Manager app using API and persistence, routing, optimization, lazy + suspense, error boundary and tailwind',
      tech: ['React.js', 'React Routing', 'Redux.js', 'Optimization', 'Persistence', 'Tailwind', 'API'],
      github: 'https://github.com/martinramirez-dev/task-manager',
      live: 'https://task-manager-five-chi-90.vercel.app/',
      challenges: [

      ],
      learnings: [

      ]
    },
    {
      slug: 'cinemine',
      title: 'Cinemine',
      img: '/images/cm.png',
      description: 'A movie discovery app using The Movie Database API. Includes search, featured section, movie detail modals, and a watchlist.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'API'],
      github: 'https://github.com/martinramirez-dev/cinemine',
      live: 'https://martinramirez-dev.github.io/cinemine/',
      challenges: [
        "Designing a complex and visually polished modal for movie details",
        "Balancing UI design, animations, and dynamic data rendering",
        "Implementing search and favorites features with persistent state",
        "Creating a consistent visual identity through color and layout choices"
      ],
      learnings: [
        "Built a complete and realistic front-end application using an external API",
        "Strengthened my understanding of JavaScript, state management, and persistence",
        "Improved my UI and UX skills by designing modals, animations, and interactive elements",
        "Gained confidence building applications that combine logic, design, and user experience"
      ]
    },
    {
      slug: 'pokemon-search',
      title: 'Pokemon Search',
      img: '/images/ps.png',
      description: 'A web app to search for Pokémon using the PokéAPI. Features a Game Boy–inspired design and localStorage-based favorites.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'API'],
      github: 'https://github.com/martinramirez-dev/pokemon-search',
      live: 'https://martinramirez-dev.github.io/pokemon-search/',
      challenges: [
        "Implementing a random data fetching logic using the PokéAPI",
        "Managing data persistence to maintain state between renders",
        "Handling asynchronous JavaScript logic with fetch and promises",
        "Designing a more complex and detailed UI inspired by a Game Boy interface"
      ],
      learnings: [
        "Deepened my understanding of JavaScript through hands-on practice",
        "Learned how to fetch and handle data from an external API",
        "Gained experience implementing more advanced application logic",
        "Learned how to work with data persistence in a front-end application",
        "Improved my design skills by building a more detailed and themed interface"
      ]
    },
    {
      slug: 'botaniq',
      title: 'Botaniq',
      img: '/images/bt.png',
      description: 'A modern, responsive static page for a plant shop. Includes a menu, gallery, and contact section with a fresh green aesthetic.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/martinramirez-dev/botaniq',
      live: 'https://martinramirez-dev.github.io/botaniq/',
      challenges: [
        "Implementing an interactive navigation menu using JavaScript",
        "Styling the layout to achieve a clean and cohesive visual design",
        "Building and styling the contact and rating section",
        "Structuring a product-like section with multiple plant cards"
      ],
      learnings: [
        "Learned how to implement interactive features using JavaScript",
        "Gained experience creating a grid-based layout for a product-style section",
        "Improved my ability to search, select, and organize images for UI design",
        "Developed a better understanding of layout composition and visual balance",
        "Explored a different design style compared to my previous project"
      ]
    },
    {
      slug: 'coffee-lovers',
      title: 'Coffee Lovers',
      img: '/images/cl.png',
      description: 'A warm and elegant landing page for coffee lovers. Built with pure HTML and CSS, inspired by creamy coffee tones.',
      tech: ['HTML5', 'CSS3'],
      github: 'https://github.com/martinramirez-dev/coffee-lovers',
      live: 'https://martinramirez-dev.github.io/coffee-lovers/',
      challenges: [
        "Building a complete landing page from scratch",
        "Styling the entire application using only HTML and CSS",
        "Making the layout fully responsive across different screen sizes"
      ],
      learnings: [
        "Learned how to build a complete web page from start to finish",
        "Improved my understanding of semantic HTML and modern CSS",
        "Gained experience creating responsive and visually appealing layouts",
        "Learned how to optimize images and structure content for better presentation"
      ]
    }
];

export default async function Details({ params }) {
    const { slug } = await params;
    const project = projectData.find(p => p.slug === slug);

    if(!project) return <div className="text-center py-20 text-3xl">Project not found 😢</div>;

    return (
        <>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block">
              ← Back to Projects
            </Link>
     
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8">
              {project.title}
            </h1>
    
            <div className="relative w-full h-96 md:h-screen max-h-screen mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                  src={project.img}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                  priority
              />
            </div>
    
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              {project.longDescription}
            </p>
    
            <h2 className="text-3xl font-bold mb-6 dark:text-blue-600">Tech Stack</h2>
            <div className="flex flex-wrap gap-4 mb-12">
              {project.tech.map(t => (
                <span key={t} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  {t}
                </span>
              ))}
            </div>
    
            <h2 className="text-3xl font-bold mb-6 dark:text-blue-600">Challenges & Learnings</h2>
            <div className="text-lg text-gray-700 dark:text-gray-300 mb-12">
              {project.challenges.map(c => (<p key={c}>{c}</p>))} <br /><br />
              {project.learnings.map(l => (<p key={l}>{l}</p>))}
            </div>
    
            <div className="flex gap-6">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white">
                GitHub
              </a>
            </div>
          </div>
        </main>
        </>
    );
}