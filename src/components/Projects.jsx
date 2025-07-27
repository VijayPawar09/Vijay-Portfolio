import React from 'react';
import { FaGithub } from "react-icons/fa"; 
import { motion } from 'framer-motion';
import image from '../Images/image.jpg'; // Replace with your actual image path
import PA from '../Images/PA.png'
import SkillSwap from '../Images/SkillSwap.png'
import citycare from '../Images/CityCare.png'

const projectData = [
  {
    image: PA,
    title: "Eldely Personal Assistance",
    description: "Elderly Personal Assistance is a compassionate web platform designed to connect senior citizens with trusted personal assistants for daily support. The system allows customers (elders) to browse verified assistants, view their profiles, assign them tasks, and chat in real-time. It ensures a smooth experience for both customers and assistants with role-based access, profile management, and task booking.",
    technologies: ["React", "TailwindCSS", "Node Js", "Express JS", "Mongo DB"],
    github: "https://github.com/VijayPawar09/Elderly_Personal_Assistance",
  },
  {
    image: SkillSwap,
    title: "Skill Swap",
    description: "Skill Swap is a modern web platform that allows users to exchange skills with others in a collaborative and community-driven way. Users can register, list their own skills, and browse others' skills to find ideal learning or teaching partners. The system uses a matching algorithm to suggest potential partners based on skill compatibility, location, and reputation. It also includes real-time messaging and user rating features to foster productive connections.",
    technologies: ["React", "TailwindCSS", "Node Js", "Express JS", "Mongo DB"],
    github: "https://github.com/VijayPawar09/SkillSwap",
  },
  {
    image: citycare,
    title: "City Care",
    description: "City Care is a citizen-focused web application that enables real-time reporting of civic issues like potholes, streetlight failures, garbage dumps, or water leakage. Designed to enhance smart city governance, it empowers residents to report problems directly to municipal authorities and track resolution progress. The app also features community voting, status updates, and an admin dashboard for issue management.",
    technologies: ["React", "TailwindCSS", "Node Js", "Express JS", "Mongo DB"],
    github: "https://github.com/VijayPawar09/CityCare",
  },
];


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const ProjectCard = ({ project }) => (
  <motion.div variants={cardVariants}>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img
        src={project.image}
        alt={project.title}
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
      />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-200">{project.description}</p>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>

          {/* GitHub Link Button */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 w-fit rounded-md border border-white px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition"
            >
              <FaGithub className="text-xl" />
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <div
    id="projects"
    className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
  >
    <motion.h1
      className="text-4xl font-light text-white md:text-6xl"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      My Projects
    </motion.h1>

    <motion.div
      className="flex w-full max-w-[1000px] flex-col gap-16 text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {projectData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </motion.div>
  </div>
);

export default Projects;
