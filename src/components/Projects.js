import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'Path Finding Visualizer',
    des: 'Developed an interactive pathfinding visualizer in Python using Pygame to demonstrate the A* algorithm in real time. Implemented A* search algorithm with efficient data handling using lists for sorting nodes and a dictionary for tracking the optimal path',
    mission: 'Algorithm Design and Visualization',
    language: 'Python, VSCode, Git',
    images: '/pathfinder.PNG'
  },
  {
    name: 'LCMS Database Managemnet System',
    des: ' Collaborated in a team to design and develop a DBMS for a Law Firm Case Management System. Engineered database schema and queries using Oracle SQL for real-time data management. Built Unix shell scripts for menu-driven database operations and demoed advanced SQL queries. Created a Python/Django-based UI to interface with the Oracle database, enhancing functionality and user experience',
    mission: 'Full-Stack Development and DBMS Design',
    language: 'SQL, Oracle, Python/Django, UNIX Shell, Git',
    images: '/dbms.PNG'
  },
  {
    name: 'Obstetrical Triage Queue Management System ',
    des: ' Develop a system to automate the admission and queuing of expectant mothers in obstetrical triage before they enter the birthing unit. Implement queue functionality to add patients to the end and process them chronologically, maintaining a FIFO service sequence.',
    mission: 'Back-end Development and C++ Design',
    language: 'C++, Netbeans, Git',
    images: '/OBS.jpg'
  },

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        These are some of the projects I have worked on. I have experience in developing full-stack applications, designing databases, and implementing algorithms. I am always looking for new opportunities to learn and grow.
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
