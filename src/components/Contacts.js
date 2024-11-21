import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'Phone Number',
      value: '(647) 703-7870',
      icon: faPhone, 
    },
    {
      title: 'Email',
      value: 'SohaibMSyed57@gmail.com',
      icon: faEnvelope, 
    },
    {
      title: 'Instagram',
      value: '@sohaibsyed_',
      link: 'https://www.instagram.com/sohaibsyed_',
      icon: faInstagram, 
    },
    {
      title: 'LinkedIn',
      value: 'mosohaibsyed',
      link: 'https://www.linkedin.com/in/mosohaibsyed',
      icon: faLinkedin, 
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Contact Me
      </div>
      <div className="contact-list">
        {listContacts.map((contact, index) => (
          <div key={index} className="contact-item">
            <div className="icon">
              <FontAwesomeIcon icon={contact.icon} />
            </div>
            <div className="content">
              <span>{contact.title}: </span>
              {contact.link ? (
                <a href={contact.link} target="_blank" rel="noopener noreferrer">{contact.value}</a>
              ) : (
                <span>{contact.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contacts;
