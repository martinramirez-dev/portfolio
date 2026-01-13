import Navbar from '../components/Navbar'; 

import { FaReact, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { MdOutlineSmartphone } from "react-icons/md";


export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-blue-600 max-w-3xl mx-auto">
              Frontend developer passionate about building modern, user-friendly web apps.
            </p>
          </div>

          <section className="mb-20 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center dark:text-gray-300">My Journey</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I started my frontend journey self-taught in 2020, learning HTML, CSS, JavaScript, and quickly falling in love with React. Building real projects like an e-commerce app with FakeStoreAPI and a full Task Manager with Redux helped me understand how to create performant, user-focused applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              My passion is frontend because I love turning ideas into interactive experiences that people enjoy using. I'm motivated by remote work opportunities – I want to contribute to global teams while growing my skills in modern technologies like Next.js and Tailwind.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently looking for remote frontend roles where I can build amazing products and learn from experienced teams.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-blue-600">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'HTML5', icon: <FaHtml5 /> },
                { name: 'CSS3', icon: <FaCss3Alt /> },
                { name: 'JavaScript', icon: <IoLogoJavascript /> },
                { name: 'React', icon: <FaReact /> },
                { name: 'Next.js', icon: <RiNextjsFill /> },
                { name: 'Tailwind CSS', icon: <RiTailwindCssFill /> },
                { name: 'Redux', icon: <SiRedux /> },
                { name: 'Git/GitHub', icon: <FaGithub /> },
                { name: 'Responsive Design', icon: <MdOutlineSmartphone /> },
                { name: 'Vercel', icon: <IoLogoVercel /> },
              ].map(skill => (
                <div key={skill.name} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col text-center items-center justify-center overflow-hidden hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <div className="text-6xl mb-4 text-black dark:text-white">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">{skill.name}</h3>
                </div>
              ))}
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <h2 className="text-3xl font-bold mb-6 text-gray-700 dark:text-blue-600">Experience</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-blue-600">Self-taught Frontend Developer</h3>
                  <p className="text-gray-600 dark:text-gray-400">2020 - Present</p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                    <li>Built full e-commerce app with FakeStoreAPI (routing, cart, responsive).</li>
                    <li>Created Task Manager with Redux, auth fake, API routes.</li>
                    <li>Developed this portfolio with Next.js and Tailwind.</li>
                    <li>And 4 more projects at the moment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <h2 className="text-3xl font-bold mb-6 text-gray-700 dark:text-blue-600">Education</h2>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-blue-600">Self-taught Developer</h3>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-blue-600">IT/Computer Technology</h3>
                <p className="text-gray-600 dark:text-gray-400">2020 - Present</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Learned through online courses, documentation, and building real projects. Focused on React ecosystem, modern frontend best practices.
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                Completed Secondary Education, specializing in Information Technology
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}