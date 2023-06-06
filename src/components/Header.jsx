import React, { useState } from 'react';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = ({ darkMode, setDarkMode }) => {
  const [clicked, setClicked] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    setClicked(true);
  };

  const headerClassName = darkMode ? 'bg-gray-700 text-white' : 'bg-yellow-50 text-gray-900';

  return (
    <header className={headerClassName}>
      <nav className="flex justify-between items-center p-5 px-5">
        <div className="flex items-center">
          <a href="https://github.com/hisroyalty">
            <GitHubIcon className="mr-2" />
          </a>
          <p className="text-2xl">hisRoyalty</p>
        </div>
        <div onClick={handleDarkModeToggle}>
          {darkMode ? (
            <WbSunnyIcon className={clicked ? 'text-white' : ''} />
          ) : (
            <NightsStayIcon className={clicked ? 'text-black' : ''} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
