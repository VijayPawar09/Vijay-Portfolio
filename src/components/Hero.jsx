import React from 'react'
import {motion} from "framer-motion"
import Photo from "../Images/Photo.jpeg"

const Hero = () => {
  return (
    <div id='home' className='px-16 flex min-h-screen w-full
    items-center justify-center py-28 md:px-32'>
        <div className="flex flex-col items-center justify-center gap-10 text-white">
            <motion.div
                initial={{y: -50, opacity: 0}}
                animate={{y:0, opacity: 1}}
                transition={{duration: 0.8, delay:0.2}}
            >
                <img src={Photo} alt='' className='w-[300px]
                cursor-pointer rounded-full shadow-xl shadow-indigo-900
                transition-all duration-300 hover:translate-y-5
                hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600
                md:w-[350px]'/>
            </motion.div>

            <motion.div 
                initial={{y: 50, opacity: 0}}
                animate={{y:0, opacity: 1}}
                transition={{duration: 0.8, delay:0.2}}
            
            className='flex max-w-[600px] flex-col items-center
            justify-center gap-3 text-center'>

        <h1 className="text-3xl md:text-7xl font-light bg-gradient-to-r
         from-pink-500 to-blue-500 bg-clip-text text-transparent leading-[1.2]">
            Vijay Pawar
        </h1>
        <br />
         <h3 className='bg-gradient-to-r from-pink-500 to-blue-500 
         bg-clip-text text-transparent text-1xl md:text-3xl'>
            Full Stack Developer</h3>
        
        <p className='md:text-base text-pretty text-sm text-gray-200'>
            Skilled in React, Node.js, Express, and MongoDB for full-stack development, with strong experience building dynamic web applications using the MERN stack. Proficient in JavaScript, Java, SQL, PostgreSQL, and data structures and algorithms (DSA), enabling the creation of robust, scalable, and efficient solutions across both frontend and backend environments
        </p>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero