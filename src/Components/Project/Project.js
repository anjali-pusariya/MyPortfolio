import React from "react";
import "./Project.css";
import CarGrid from "../Images/CarGrid.png";
import Marksheet from "../Images/Marksheet1.png";
import Portfolio from "../Images/Portfolio.png";
import Infofix from "../Images/Infofix.png";
import JoHukum from "../Images/JoHukum.png";
import Rupeshgrahak from "../Images/RupeshGrahak.png";
import APSH from "../Images/APSH.png";

import { Image } from "antd";

const projects = [
  // {
  //   title: 'Portfolio Website',
  //   description: 'A personal portfolio website built with React and CSS to showcase my projects and skills.',
  //   image: Portfolio,
  //   link: '#'
  // },
  {
    title: "Marksheet Generator",
    description:
      " Developed an interactive marksheet generator that creates marksheets based on user-entered data including marks and images",
    image: Marksheet,
    link: "https://anjali-pusariya.github.io/MarksheetGenerator/",
  },
  {
    title: " CarGrid – Car Showcase Landing Page",
    description:
      " Developed a responsive landing page showcasing featured cars and brands using ReactJS and Bootstrap.",
    image: CarGrid,
    link: "https://anjali-pusariya.github.io/MyCargridApp/",
  },
  // {
  //   title: 'Infofix (Live Project)',
  //   description: ' Developed a real-time web application using ReactJS for the frontend and Django for the backend.',
  //   image: Infofix,
  //   link: 'https://course.yashvitech.com/'
  // },
  {
    title: "JoHukum Web Application",
    description:
      "Developed a dynamic profile hub platform using ReactJS and Django, following the RAD model. Features include user and company profile management, service enquiry, document upload, and invoice viewing. Focused on building a seamless, scalable, and secure user experience.",
    image: JoHukum,

    // link: 'https://course.yashvitech.com/'
  },
  {
    title: "Rupesh Grahak Seva Kendra (Live Project)",
    description:
      "Developed a real-time web application using ReactJS and Django to support a one-stop service center offering banking, bill payments, registration, and government services to rural and urban areas through a vendor network.",
    image: Rupeshgrahak,
    link: "https://rupeshgrahaksevakendra.com/",
  },
  {
    title: "AP Smart Home (Live Project)",
    description:
      "Developed a real-time web application using ReactJS and Django, showcasing customizable home automation packages like light, fan, curtain, AC, and remote lock control.",
    image: APSH,
    link: "https://apsmarthomes.in/",
  },
];

function Project() {
  return (
    <div id="projects" className="ProjectsContainer">
      <h2>My Projects</h2>
      <div className="ProjectCards">
        {projects.map((project, index) => (
          <div className="ProjectCard" key={index}>
            <div className="ProjectImage">
              <Image src={project.image} alt={project.title} />
            </div>
            <div className="ProjectContent">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
