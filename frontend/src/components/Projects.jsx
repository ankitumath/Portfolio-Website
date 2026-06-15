import { motion } from "framer-motion";
import { fadeInRight } from "../utils/animations";

import projects from "../data/tempProjects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
   <motion.section
  variants={fadeInRight}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
      id="projects"
      className="py-20 bg-slate-50 px-6"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Projects
          </h2>

          <p className="text-gray-500 mt-3">
            Some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Projects;