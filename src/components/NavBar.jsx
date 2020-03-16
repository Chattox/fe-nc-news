import React from 'react';
import { Link } from '@reach/router';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <Link to="/topic1">Topic 1</Link>
        </li>
        <li>
          <Link to="/topic2">Topic 2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
