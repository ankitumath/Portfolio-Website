import profileImage from "../assets/profile.jpg";
import resume from "../assets/Ankit_Umath_Resume.pdf";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
   <section className="min-h-screen flex items-center pt-20" id="home">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <div className="mb-4">
  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
    🟢 Available for Internship Opportunities
  </span>
</div>
            <p className="text-blue-600 font-semibold mb-2">
              Hello, I'm
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">Ankit Umath</h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mt-3">
              MERN Stack Developer
            </h2>
            
            <p className="text-gray-600 mt-4">
              <div className="flex flex-wrap gap-3 mt-5">
  {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"].map(
    (tech) => (
      <span
        key={tech}
        className="bg-slate-100 px-3 py-1 rounded-full text-sm font-medium"
      >
        {tech}
      </span>
    )
  )}
</div>
              Passionate about building responsive,
              modern and user-friendly web applications
              using React, Node.js, Express and MongoDB.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              
              <a
                href={resume}
                download
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="border border-slate-900 px-6 py-3 rounded-lg hover:bg-slate-900 hover:text-white transition"
              >
                View Projects
              </a>

            </div>

            <div className="flex gap-5 mt-8 text-2xl">
  <a
    href="https://github.com/ankitumath"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600 transition"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/ankit-umath-26b928328/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600 transition"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:ankitumath30@gmail.com"
    className="hover:text-blue-600 transition"
  >
    <FaEnvelope />
  </a>

  <a
    href="https://leetcode.com/u/ankit_umath/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600 transition"
  >
    <SiLeetcode />
  </a>
</div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full w-72 h-72 object-cover shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;