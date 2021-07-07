import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import './Navbar.scss';

export default function Navbar() {
  const { logout, isLogin } = useContext(AuthContext);

  return (
    <nav>
      <div className="nav-wrapper navbar blue-grey darken-3">
        <Link to="/" className="brand-logo">
          PolyCareer
        </Link>
        {isLogin ? (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/login" onClick={logout}>
                Выйти
              </Link>
            </li>
          </ul>
        ) : (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* <li>
              <a href="/">Войти</a>
            </li> */}
          </ul>
        )}
      </div>
    </nav>
  );
}
