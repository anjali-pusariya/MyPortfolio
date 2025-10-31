import React from 'react';
import './Profile.css';
import MyPhoto from '../Images/Anjali Pro.jpeg';
import { Button } from 'antd';

function Profile() {
  return (
    <div id='profile' className='ProfileContainer'>

      <div className='Profile_Grid text-section'>
        <h1>Hello, I'm <span>Anjali</span></h1>
        {/* <p>A dedicated Front-End Developer with a strong foundation in React.js, HTML, CSS, and JavaScript. I enjoy building responsive, user-focused web interfaces and exploring full-stack development with Python and Django.</p> */}
<p>A passionate Full-Stack Developer with hands-on industrial experience across multiple technology stacks. Skilled in ReactJS/Django (6-month training) and Vue.js/Flask (current internship). Highly proficient in Python (Django), JavaScript (ReactJS), and modern UI libraries like Ant Design and Bootstrap. Experienced in RESTful API integration, database management, and responsive UI design. Enthusiastic about building scalable, high-performance web solutions using Git and GitHub.</p>

        <Button type="primary" href="#contact" className="ContactButton">
          Contact Me
        </Button>
      </div>

      <div className='Profile_Grid image-section'>
        <img src={MyPhoto} alt='Anjali Pusariya' className='ProfileImage' />
      </div>

    </div>
  );
}

export default Profile;
