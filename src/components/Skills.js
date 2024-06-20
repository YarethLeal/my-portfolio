import React from 'react';
import information from './Information';
import { useState, useEffect } from 'react';
import '../styles/Skills.css';

const Skills = ({ language }) => {
    const [skillsContent, setSkills] = useState(information[language].skills);
    useEffect(() => {
        setSkills(information[language].skills);
    }, [language]);

    const skillBadges = skillsContent.badges.map((skill, index) => (
        <div key={index} className="skill-badge">
            <img src={skill.Src} alt={skill.Alt} title={skill.Alt} />
        </div>
    ))

    return (
        <div id='skills'>
            <div className='container col-xxl-8 px-4 py-5'>
                <h2><i class="bi bi-award"></i> {skillsContent.title}</h2>
                <p>{skillsContent.content}</p>
                <div className="container-fluid">
                    <div className="skills-bar">
                        <div className="skills-content">
                            {skillBadges}
                            {skillBadges}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;