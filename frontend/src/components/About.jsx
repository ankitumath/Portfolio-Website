import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

function About() {
  return (
    <motion.section
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
      id="about"
      className="py-20 bg-white px-6"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            About Me
          </h2>

          <p className="text-gray-500 mt-3">
            Get to know me better
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Who Am I?
            </h3>

            <p className="text-gray-600 leading-relaxed">
              I am a Computer Science student and
              aspiring MERN Stack Developer with a
              passion for creating modern, responsive,
              and user-friendly web applications.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              My goal is to become a skilled Full Stack
              Developer and contribute to impactful
              software solutions while continuously
              learning new technologies.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-slate-100 p-6 rounded-xl shadow">
              <h4 className="font-bold text-lg">
                Frontend
              </h4>

              <p className="text-gray-600 mt-2">
                React, HTML, CSS,
                JavaScript, Tailwind
              </p>
            </div>

            <div className="bg-slate-100 p-6 rounded-xl shadow">
              <h4 className="font-bold text-lg">
                Backend
              </h4>

              <p className="text-gray-600 mt-2">
                Node.js, Express.js
              </p>
            </div>

            <div className="bg-slate-100 p-6 rounded-xl shadow">
              <h4 className="font-bold text-lg">
                Database
              </h4>

              <p className="text-gray-600 mt-2">
                MongoDB, Mongoose
              </p>
            </div>

            <div className="bg-slate-100 p-6 rounded-xl shadow">
              <h4 className="font-bold text-lg">
                Tools
              </h4>

              <p className="text-gray-600 mt-2">
                Git, GitHub, VS Code
              </p>
            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default About;