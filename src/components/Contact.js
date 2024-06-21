import React from 'react';
import information from './Information';
import { useState, useEffect } from 'react';
import image from '../image/anime-style-earth.png';

const Contact = ({ language }) => {
    const [contactContent, setContact] = useState(information[language].contact);
    useEffect(() => {
        setContact(information[language].contact);
    }, [language]);
    return (
        <div id='contact'>
            <div class="container col-xxl-8 px-4 py-5">
                <h2><i class="bi bi-code-slash"></i> {contactContent.title}</h2>
                <div class="row flex-lg-row-reverse align-items-center">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img id='contact-img' src={image} class="d-block mx-lg-auto img-fluid planet-spin" alt="earth" width="300" height="100" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <div class="d-grid gap-2 justify-content-md-start">
                            <h5>{contactContent.content}</h5>
                            <button id="home-button" type="button" class="btn btn-primary btn-lg px-4 me-md-2" onClick={() => window.location.href = 'mailto:{yarethleal65@gmail.com}'}>
                                <i class="bi bi-envelope-at-fill"></i>
                                {" "}
                                Email
                            </button>
                            <button id="home-button" type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                                <a className="nav-link" href="https://github.com/YarethLeal" target='_blank' rel="noreferrer" title='linkedIn'>
                                    <i class="bi bi-linkedin"></i>
                                    {" "}
                                    LinkedIn
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;