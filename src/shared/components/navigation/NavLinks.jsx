import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to="/" exact={true}>ВЫБОР ИГРЫ</NavLink>
      </li>

      <li>
        <NavLink to="/game">СТАТИСТИКА ИГР</NavLink>
      </li>
      <li>
        <NavLink to="/auth">ВХОД В ИГОРНУЮ</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
