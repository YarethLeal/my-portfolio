import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';

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
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
