import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

function CipherNav() {

    return (
        <>
            <h2>SIFR</h2>
            <div className="nav">

                <br />
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
        </>
    );
}

export default CipherNav;
