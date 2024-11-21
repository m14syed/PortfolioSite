import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
               <span>Mohammed Sohaib Syed</span>
            </div>
            <div className="des">
                {/* 30 */}
                Hello! I'm Sohaib, a passionate Biomedical Engineering (Computer Science Minor) student at Toronto Metropolitan University. 
                I bring my technical skills to the table. I'm knowledgeable in various coding languages, including HTML/CSS, JS, Python, and C/C++.
                These skills have allowed me to explore and develop creative solutions in my education, and I'm excited to continue expanding my programming knowledge. 
            </div>
            
            <a href="/SohaibResume.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My Resume
            </a>
            <a href="https://github.com/m14syed" className="btn" target="_blank" rel="noopener noreferrer">
                My Github
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/sohaib.jpg" alt="" />
            </div>
        </div>
    </section>
    )
}

export default Home
