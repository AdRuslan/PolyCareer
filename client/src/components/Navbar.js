import React from 'react';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper navbar blue-grey darken-3">
        <a href="/" className="brand-logo">
          PolyCareer
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">Войти</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
