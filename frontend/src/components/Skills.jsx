import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  return (
   <motion.section
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
      id="skills"
      className="py-20 bg-slate-50 px-6"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            My Skills
          </h2>

          <p className="text-gray-500 mt-3">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Skills;