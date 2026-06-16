import profileImage from "../assets/profile.jpg";
import resume from "../assets/Ankit_Umath_Resume.pdf";
import teamBuilder from "../assets/teamBuilder.png";
import squidHack from "../assets/squidHack.png";

function Hero() {
  return (
   <section className="pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-blue-600 font-semibold mb-2">
              Hello, I'm
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">Ankit Umath</h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mt-3">
              MERN Stack Developer
            </h2>
            
            <p className="text-gray-600 mt-4">
              Passionate about building responsive,
              modern and user-friendly web applications
              using React, Node.js, Express and MongoDB.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              
              <a
                href={resume}
                download
                className="bg-blue-600 text-white px-6 py-3 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg"              >
                Download Resume
              </a>

              <a
                href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg"              >
                View Projects
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