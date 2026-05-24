import React from 'react';

const NavBar: React.FC = () => {
  const links = ['Home', 'Events', 'Officers', 'Instagram', 'Twitter', 'Facebook', 'Forums'];

  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        {links.map((link) => (
          <li 
            key={link} 
            className={`nav-item ${link === 'Home' ? 'active' : ''}`}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
