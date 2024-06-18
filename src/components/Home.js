import React from 'react';
import information from './Information';
import { useState, useEffect } from 'react';
import image from '../image/astronaut.png';
import '../styles/Home.css';

function Home({ language }) {
    const [homeContent, setHome] = useState(information[language].home);
    useEffect(() => {
        setHome(information[language].home);
    }, [language]);
    return (
        <div id='home'>
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img id='home-img' src={image} class="d-block mx-lg-auto img-fluid" alt="Astronaut programming" width="700" height="500" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3" id='home-title'>{homeContent.title}</h1>
                        <p class="lead">{homeContent.description}</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button id="home-button" type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                                <i class="bi bi-envelope-at-fill"></i>
                                {" "}
                                {homeContent.button}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;