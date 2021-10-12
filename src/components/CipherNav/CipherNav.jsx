import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

function CipherNav() {

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">SIFR</h2>
      </Link>
      <br/>
      <div>
          {/*Ciphers should be available no matter who you are, so */}
        <Link className="navLink" to="/about">
          Overview
        </Link>

        <Link className="navLink" to="/cipher">
          Testable Cipher
        </Link>

        <Link className="navLink" to="/history">
            History
        </Link>
      </div>
    </div>
  );
}

export default CipherNav;
