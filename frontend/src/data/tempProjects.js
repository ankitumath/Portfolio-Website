import teamBuilderImg from "../assets/teamBuilder.png";
import squidHackImg from "../assets/squidHack.png";

const projects = [
  {
    id: 1,
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
];

export default projects;