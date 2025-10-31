import React from 'react';
import './Skills.css';
import Logo1 from '../Images/htm.png'
import Logo2 from '../Images/css.png'
import Logo3 from '../Images/js.png'
import Logo4 from '../Images/rjs.png'
import Logo5 from '../Images/python.png'
import Logo6 from '../Images/djgo.png'
import Logo7 from '../Images/git.png'
import Logo8 from '../Images/bs.png'
import Logo9 from '../Images/logovuejs.png'
import Logo10 from '../Images/flask.png'
import Logo11 from '../Images/mysql.png'



const skills = [
  {
    name: 'HTML',
    icon: Logo1,
  },
  {
    name: 'CSS',
    icon: Logo2,
  },
  {
    name: 'JavaScript',
    icon: Logo3,
  },
  {
    name: 'ReactJs',
    icon: Logo4,
  },
  {
    name: 'Python',
    icon: Logo5,
  },
  {
    name: 'Django',
    icon: Logo6,
  },
  {
    name: 'Git & GitHub',
    icon: Logo7,
  },
  {
    name: 'Bootstrap',
    icon: Logo8,
  },
  {
    name: 'VueJS',
    icon: Logo9,
  },
  {
    name: 'Flask',
    icon: Logo10,
  },
  {
    name: 'MySql',
    icon: Logo11,
  },

];

function Skills() {
  return (
    <div id="skills" className="SkillsContainer">
      <h2>My Skills</h2>
      <div className="SkillCards">
        {skills.map((skill, index) => (
          <div className="SkillCard" key={index}>
            <img src={skill.icon} alt={skill.name} className="SkillIcon" />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
