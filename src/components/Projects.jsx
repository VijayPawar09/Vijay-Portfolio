import React from 'react'
import { motion } from "framer-motion";
import image from "../Images/image.jpg";
import { GiDuration } from 'react-icons/gi';

const projectData = [
    {
        image: image,
        title: "Eldely Personal Assistance",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        technologies: ["React", "TailwindCSS", "Node Js", "Express JS", "Mongo DB"],
    },
    {
        image: image,
        title: "Skill Swap",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        technologies: ["React", "TailwindCSS", "Node Js", "Express JS", "Mongo DB"],
    },
    {
        image: image,
        title:"Expense Tracker",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        technologies: ["React", "TailwindCSS", "Node Js", "Express JS", "Mongo DB"],
    }
];
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ProjectCard = ({ project }) => (
  <motion.div variants={cardVariants}>
    <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
      <img src={project.image} alt='' className='w-full cursor-pointer rounded-2xl transition-all 
      duration-300 hover:scale-105 md:w-[300px]' />
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-3'>
          <div className='text-xl font-semibold'>{project.title}</div>
          <p className='text-gray-400'>{project.description}</p>
          <div className='flex flex-wrap gap-5'>
            {project.technologies.map((tech, index) => (
              <span key={index} className='rounded-lg bg-black p-3'>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <div id='projects' className='flex min-h-screen w-full flex-col items-center
  justify-center gap-16 p-4 md:px-14 md:py-24'>
    <motion.h1
      className='text-4xl font-light text-white md:text-6xl'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      My Projects
    </motion.h1>
    <motion.div
      className='flex w-full max-w-[1000px] flex-col gap-16 text-white'
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
