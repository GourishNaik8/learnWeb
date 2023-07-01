import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/inspace">Inspace</Link>
          </li>
          <li>
            <Link to="/createspace">CreatSpace</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;