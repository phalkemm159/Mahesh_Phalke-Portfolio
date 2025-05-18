"use client";

import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01", 
    category: "fullstack",
    title: "Mahesh Phalke Portfolio",
    description: "A dynamic full-stack Mahesh Phalke's Portfolio application.",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: "/assets/projects/thumb1.png",
    live: "https://mahesh-phalke-portfolio.onrender.com",
    github: "https://github.com/phalkemm159/Mahesh_Phalke-Portfolio",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Boom Video Calling",
    description:
      "Boom is a real-time video calling web app that uses WebRTC for peer-to-peer streaming and Socket.io for signaling.",
    stack: [{ name: "Node.js" }, { name: "CSS" }, { name: "JS" }, { name: "Mongo DB" }, { name: "Material UI" }],
    image: "/assets/projects/thumb2.png",
    live: "https://boom-video-calling-webapp.onrender.com/",
    github: "https://github.com/phalkemm159/Boom_Video_Calling_WebApp",
  },
  {
    num: "03",
    category: "fullstack",
    title: "GlobalNest - A Property Rentals and Bookings",
    description:
      "A full-stack travel and hospitality platform for listing, discovering, and booking accommodations worldwide.",
    stack: [{ name: "JS" }, { name: "TailwindCSS" }, { name: "Vite and React" }, { name: "Mongo DB" }, { name: "Mapbox" }],
    image: "/assets/projects/thumb3.png",
    live: "https://globalnest.onrender.com/listings",
    github: "https://github.com/phalkemm159/GlobalNest-Fullstack?tab=readme-ov-file",
  },
  {
    num: "04",
    category: "frontend",
    title: "Atmosync – Weather WebPage",
    description: "Atmosync is a responsive weather website that fetches and displays real-time weather data for any city using the OpenWeatherMap API.",
    stack: [
      { name: "JS" },
      { name: "TailwindCSS" },
      { name: "Node.js" },
    ],
    image: "/assets/projects/thumb4.png",
    live: "https://atmosync-weather-app.onrender.com/",
    github: "https://github.com/phalkemm159/Atmosync-Weather_Webpage",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6"
    >
      <div className="container mx-auto">
        <h3 className="h3 mb-8 text-accent text-center">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative  h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={100}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-center-contain  rounded-xl"
                  priority={project.num === "02"}
                />
              </div>

              {/* Project Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/95 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm mt-2 text-white/80">
                  {project.description}
                </p>

                {/* Stack */}
                <ul className="flex gap-2 text-xs mt-2">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-4 flex gap-4">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-secondary text-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all duration-500">
                      <BsArrowUpRight className="text-xl" />
                    </div>
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-secondary text-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all duration-500">
                      <BsGithub className="text-xl" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
