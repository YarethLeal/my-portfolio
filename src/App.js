import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Home from './components/Home';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import MusicButton from './components/MusicButton';
import music from './music/starlight-harmonies.mp3';
import Contact from './components/Contact';

// Define your supported languages
const supportedLanguages = ['en', 'es'];


function App() {
  // Use React state to store the current language
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'en');

  const toggleLanguage = (selectedLanguage) => {
    // Validate the selected language
    if (!supportedLanguages.includes(selectedLanguage)) {
      console.error(`Unsupported language: ${selectedLanguage}`);
      return;
    }

    // Update the current language in state and local storage
    setCurrentLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };
  return (
    <>
      <audio id="background-music" loop>
        <source src={music} type="audio/mpeg" />
      </audio>
      <header>
        <Navbar onLanguageChange={toggleLanguage} language={currentLanguage} />
      </header>
      <main>
        <Home language={currentLanguage} />
        <AboutMe language={currentLanguage} />
        <Skills language={currentLanguage} />
        <Projects language={currentLanguage} />
        <Contact language={currentLanguage} />
        <MusicButton />
      </main>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4  align-items-center ml-2">
          <a href="https://www.freepik.es/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-astronauta-funcionamiento-portatil-icono-tecnologia-ciencia_10411620.htm#fromView=search&page=3&position=27&uuid=2fe7bf5a-66a1-403f-ab8c-99ce11a6f432">Imagen de catalyststuff en Freepik</a>
          <br />
          Music by <a href="https://pixabay.com/es/users/universfield-28281460/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=185900">UNIVERSFIELD</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=185900">Pixabay</a>
        </div>
      </footer>
    </>
  );
}

export default App;
