import teamBuilderImg from "../assets/teamBuilder.png";
import squidHackImg from "../assets/squidHack.png";
import OnCourseIMG from "../assets/OnCourseIMG.png";


const projects = [

   {
    id: 1,
    title: "Online Course Management System",
    description:
      "A full-stack MERN application that enables students to browse and enroll in courses, track learning progress, and allows administrators to manage courses and enrollments.",
      image:
      OnCourseIMG,
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JWT",
      "Tailwind CSS",
      "Axios",
    ],
    github:
      "https://github.com/ankitumath/Online-Course-Management-System",
    demo:
      "https://online-course-management-system-one.vercel.app",
  },

  {
    id: 2,
    title: "College Hackathon Website UI",
    description:
      "Designed a responsive and animated UI based on squid game theme for a college hackathon website, featuring event details, registration, and schedule.",
    image:
      squidHackImg,
    technologies: [
      "HTML",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "JavaScript",

    ],
    github:
      "https://github.com/ankitumath/Hackathon-Website",
    demo:
      "https://taskmanager.vercel.app",
  },

  {
    id: 3,
    title: "Hackathon Team Builder Website",
    description:
      "A responsive website for building teams for hackathons and exploring hackthons.",
    image:
      teamBuilderImg,
    technologies: [
      "HTML",
      "CSS",
      "MongoDB",
      "Postman",
      "Tailwind CSS",
      "JavaScript",
    ],
    github:
      "https://github.com/ankitumath/Mongodb-Project",
    demo:
      "https://your-portfolio.vercel.app",
  },

];

export default projects;