import React from 'react';
import information from './Information';
import { useState, useEffect } from 'react';

const AboutMe = ({ language }) => {
    const [aboutContent, setAbout] = useState(information[language].aboutMe);
    useEffect(() => {
        setAbout(information[language].aboutMe);
    }, [language]);

    return (
        <div id='aboutMe'>
            <div className='container col-xxl-8 px-4 py-5'>
                <h2 class=" fw-bold">{aboutContent.title}</h2>
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6 img-container">
                        <img src="https://img.freepik.com/foto-gratis/persona-caminando-cima-montana-admirando-via-lactea-generada-ia_24640-93611.jpg?t=st=1718852758~exp=1718856358~hmac=7afbf3677cc5c7b858a8a89cb4defef9a8154ab6c3d05f9c0057aa0599bfc8cc&w=1380" class="d-block mx-lg-auto img-fluid img-scale" alt="Astronaut programming" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <p>{aboutContent.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;