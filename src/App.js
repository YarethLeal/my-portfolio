import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Home from './components/Home';

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
      <header>
        <Navbar onLanguageChange={toggleLanguage} language={currentLanguage} />
      </header>
      <main>
        <Home language={currentLanguage} />
      </main>
      <footer><a href="https://www.freepik.es/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-astronauta-funcionamiento-portatil-icono-tecnologia-ciencia_10411620.htm#fromView=search&page=3&position=27&uuid=2fe7bf5a-66a1-403f-ab8c-99ce11a6f432">Imagen de catalyststuff en Freepik</a></footer>
    </>
  );
}

export default App;
