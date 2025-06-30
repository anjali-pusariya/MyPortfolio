// import React from 'react';
// import './About.css';
// import MyPhoto from '../Images/Anjali Pro.jpeg'; 

// function About() {
//   return (
//     <div id="about" className="AboutContainer">
//       <div className='Profile_Grid image-section'>
//         <img src={MyPhoto} alt='Anjali Pusariya' className='ProfileImage' />
//       </div>
//       <div className="About_Grid text-section">
//         <h2>About Me</h2>
//         <p>
//           I'm Anjali Pusariya, a Front-End React Developer with a passion for creating interactive and visually appealing web experiences.
//           I love building responsive websites and writing clean, scalable code. My focus is on user experience, performance, and modern web practices.
//         </p>
//         <p>
//           With a background in JavaScript, React, and CSS frameworks like Tailwind and Ant Design, I enjoy turning ideas into beautiful UI that works on any device.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default About;

import React from 'react';
import './AboutMe.css';

function About() {
  return (
    <div id="about" className="AboutContainer">
      <div className="About_Grid text-section">
        <h2>About Me</h2>
        <p>
          I'm <strong>Anjali Pusariya</strong>, a passionate and detail-oriented Front-End Developer currently pursuing my MCA. I specialize in building modern, responsive web applications using <strong>ReactJS</strong>, with a strong foundation in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and UI libraries like <strong>Ant Design</strong> and <strong>Bootstrap</strong>.
        </p>
        <p>
          I enjoy transforming creative ideas into fully functional, user-friendly interfaces that work seamlessly across devices. With hands-on experience in both personal and live projects, I've developed scalable React applications and collaborated on full-stack solutions using <strong>Python</strong> and <strong>Django</strong> for the backend.
        </p>
        <p>
          Beyond technical skills, I value writing clean, reusable code, focusing on <strong>performance</strong>, <strong>user experience</strong>, and <strong>maintainability</strong>. I'm also comfortable with version control systems like <strong>Git</strong> and <strong>GitHub</strong>, and constantly seek opportunities to learn and implement modern web practices.
        </p>
        <p>
          I'm currently looking for opportunities where I can contribute as a <strong>React or Full-Stack Developer</strong>, collaborate with a dynamic team, and continue growing both technically and creatively.
        </p>
      </div>
    </div>
  );
}

export default About;
