import { motion } from "framer-motion";
import { fadeInLeft } from "../utils/animations";

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      college: "SAGE University Indore",
      year: "2024 - 2028",
      description:
        "Pursuing Computer Science Engineering with focus on software development, web technologies, and problem solving.",
    },
  ];

  return (
    <motion.section
  variants={fadeInLeft}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
      id="education"
      className="py-20 bg-white px-6"
    >
     <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            Education
          </h2>

          <p className="text-gray-500 mt-3">
            My academic journey
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-500 ml-4">

          {educationData.map((item, index) => (
            <div
              key={index}
              className="mb-10 ml-8"
            >
              {/* Dot */}
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[10px]"></div>

              {/* Card */}
              <div className="bg-slate-50 shadow-md rounded-xl p-6">
                
                <span className="text-blue-600 font-semibold">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.degree}
                </h3>

                <h4 className="text-lg text-slate-700 mt-1">
                  {item.college}
                </h4>

                <p className="text-gray-600 mt-4">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
   </motion.section>
  );
}

export default Education;