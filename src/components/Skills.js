import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faJava, faPython, faAws, faLinux, faKeybase} from '@fortawesome/free-brands-svg-icons';
import { faCode, faServer } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: 'HTML is the standard markup language for creating web pages and web applications.',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.',
    icon: faCss3
  },
  {
    name: 'Javascript',
    des: 'JavaScript is a programming language that conforms to the ECMAScript specification and is used to create dynamic web content.',
    icon: faJs
  },
  {
    name: 'ReactJs',
    des: 'React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers.',
    icon: faReact
  },
  {
    name: 'C',
    des: 'C is a general-purpose, procedural computer programming language supporting structured programming.',
    icon: faCode
  },
  {
    name: 'C++',
    des: 'C++ is a general-purpose programming language created as an extension of the C programming language.',
    icon: faCode
  },
  {
    name: 'Java',
    des: 'Java is a high-level, class-based, object-oriented programming language.',
    icon: faJava
  },
  {
    name: 'Python',
    des: 'Python is an interpreted high-level general-purpose programming language.',
    icon: faPython
  },
  {
    name: 'SQL',
    des: 'SQL is a domain-specific language used for managing data in a relational database management system.',
    icon: faKeybase
  },
  {
    name: 'AWS',
    des: 'Amazon Web Services (AWS) is an on-demand cloud computing platform and APIs by Amazon.',
    icon: faAws
  },
  {
    name: 'UNIX/Bash',
    des: 'Unix shell and command language for the GNU Project',
    icon: faLinux
  },
  {
    name: 'Django',
    des: 'Django is a high-level Python web framework for rapid development.',
    icon: faServer
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Tech Arsenal
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        These are the skills I have acquired over the years. I have experience in both front-end and back-end development, 
        as well as knowledge of cloud domains like AWS. I have worked with various programming languages and frameworks. 
        I am always eager to learn new technologies and improve my skills.
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

