import React, { useContext, useState } from 'react';
import { createRoot } from 'react-dom/client';

const languages = ['JavaScript', 'Python'];
const LanguageContext = React.createContext(languages[0])

function App() {
  const [activeLanguage, setActiveLanguage] = useState(languages[0]);
  
  const handleToggleLanguage = () => setActiveLanguage(prevLanguage =>
    prevLanguage === languages[0] ? languages[1] : languages[0]
  );

  return (
    <LanguageContext.Provider value={{ activeLanguage, handleToggleLanguage }}>
      <MainSection />
    </LanguageContext.Provider>
  );
}

function MainSection() {
  const { activeLanguage, handleToggleLanguage } = useContext(LanguageContext);
  return (
    <div>
      <p id="favoriteLanguage">favorite programing language: {activeLanguage}</p>
      <button id="changeFavorite" onClick={handleToggleLanguage}>toggle language</button>
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);