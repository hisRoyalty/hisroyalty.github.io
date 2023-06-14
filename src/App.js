import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Portfolio from './components/Portfolio';


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const footerClassName = darkMode ? 'bg-gray-700 text-white text-center py-4' : 'bg-gray-100 text-gray-900 text-center py-4';

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <footer className={footerClassName}>
        <p className="text-sm">wat you looking at?</p>
      </footer>
    </div>
  );
}

export default App;
