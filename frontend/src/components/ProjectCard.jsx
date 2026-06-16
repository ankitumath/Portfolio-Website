

import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
  whileHover={{
    scale: 1.05,
  }}
 className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold mb-3">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 text-white px-4 py-2 rounded-lg"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Live Demo
          </a>

        </div>

      </div>
   </motion.div>
  );
}

export default ProjectCard;