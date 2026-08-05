import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
const projects = [
  {
    id: "proj-01",
    title: "KeenKeeper - Friendship Management Platform",
    description:
      "A responsive web application that helps users organize and maintain meaningful friendships by tracking interactions, monitoring relationship status, and managing personal connections through an intuitive dashboard.",
    image: project1,
    stack: [ "React",
    "Tailwind CSS",
    "JavaScript",
    "React Router",
    "Local Storage"],
    features: [
      "Add and manage personal friend profiles",
    "Track the last interaction with each friend",
    "View friendship statistics and activity summary",
    "Categorize friends using custom relationship tags",
    "Responsive and user-friendly dashboard design"
    ],
    github: "https://github.com/sarwar-jahan1/Assignment-7-keen-keeper",
    live: "https://assignment-7-keen-keeper-rust.vercel.app/",
    featured: true,
  },
  {
    id: "proj-02",
    title: "GitHub Issues Tracker",
    description:
      "A responsive issue tracking web application that allows users to browse, search, filter, and manage GitHub-style issues. The application provides an intuitive interface for monitoring issue status, priorities, and project progress.",
    image: project2,
    stack: [ "HTML",
    "Tailwind CSS",
    "JavaScript",
    "REST API"],
    features: [
      "Browse and search issues",
    "Filter by Open and Closed status",
    "Display issue details and labels",
    "Responsive user interface"

    ],
    github: "https://github.com/sarwar-jahan1/Github-Issue-Tracker",
    live: "https://github-issue-tracker-16.netlify.app/",
    featured: true,
  },
  {
    id: "proj-03",
    title: "English Vocabulary Learning App",
    description:
      "An interactive vocabulary learning platform with lesson-based practice, word search, and pronunciation support.",
    image: project3,
    stack: [ "HTML",
    "Tailwind CSS",
    "JavaScript",
    "REST API"],
    features: [
      "Browse vocabulary by lesson",
    "Search words instantly",
    "Audio pronunciation support",
    "Responsive user interface"
    ],
    github: "https://github.com/sarwar-jahan1/English-Janala",
    live: "https://sarwar-jahan1.github.io/English-Janala/",
    featured: true,
  },
  {
    id: "proj-04",
    title: "BloodConnect",
    description:
      "A blood donation platform that helps users find donors and request blood quickly.",
    image: project4,
    stack: ["HTML",
    "CSS",
    "JavaScript"],
    features: [
          "Search donors by blood group",
    "Submit blood requests",
    "Responsive user interface",
    "Simple donor management"

    ],
    github: "https://github.com/sarwar-jahan1/BloodConnect",
    live: "https://bloodconnect2026.netlify.app/",
    featured: false,
  },
];

export default projects;
