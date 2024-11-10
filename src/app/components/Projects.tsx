import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "Google Docs Clone",
      description: "A real-time collaborative document editing platform",
      github: "https://github.com/yourusername/google-docs-clone",
      tags: ["React.js", "Express.js", "Postgress", "Websockets"],
    },
    {
      name: "Hotel Management System",
      description: "A comprehensive system for managing hotel operations",
      github: "https://github.com/yourusername/hotel-management-system",
      tags: ["React.js", "Express.js", "PostgreSQL", "Prisma"],
    },
    {
      name: "Splitwise Clone",
      description: "An expense sharing application for groups",
      github: "https://github.com/yourusername/splitwise-clone",
      tags: ["Next js", "Recoil", "PostgreSQL"],
    },
    {
      name: "Learning Management System",
      description: "A platform for online course delivery and management",
      github: "https://github.com/yourusername/learning-management-system",
      tags: ["React.js", "Express.js", "Prisma"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 font-mono">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300"
                >
                  <FaGithub className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
