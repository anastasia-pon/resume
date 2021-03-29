import React from 'react';
import './Header.scss';

const Header = () => (
  <header className="header">
    <nav className="header_menu">
      <a href={`${window.location.hostname}#about`}>About</a>
      <a href={`${window.location.hostname}#work`}>Work</a>
      <a href={`${window.location.hostname}#education`}>Education</a>
      <a href={`${window.location.hostname}#additional`}>Additional</a>
    </nav>
  </header>
);

export default Header;
