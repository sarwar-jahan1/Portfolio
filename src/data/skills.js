import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
  FaGithub, FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiFirebase, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: FaHtml5, level: "Advanced" },
      { name: "CSS", icon: FaCss3Alt, level: "Advanced" },
      { name: "JavaScript", icon: FaJs, level: "Advanced" },
      { name: "React", icon: FaReact, level: "Advanced" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
      { name: "Next.js", icon: SiNextdotjs, level: "Intermediate" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, level: "Intermediate" },
      { name: "Express.js", icon: SiExpress, level: "Intermediate" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, level: "Intermediate" },
      { name: "Firebase", icon: SiFirebase, level: "Intermediate" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, level: "Advanced" },
      { name: "GitHub", icon: FaGithub, level: "Advanced" },
      { name: "VS Code", icon: VscVscode, level: "Advanced" },
      { name: "Postman", icon: SiPostman, level: "Intermediate" },
      { name: "Figma", icon: FaFigma, level: "Intermediate" },
    ],
  },
];

export default skills;
