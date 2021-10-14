import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

function CipherNav({props}) {

    return (
        <>
            <h2>{props.name}</h2>
            <div className="nav">

                <br />
                <div>
                    {/*Ciphers should be available no matter who you are, so */}
                    <Link className="navLink" to={`/cipher/${props.id}`}>
                        Overview
                    </Link>

                    {/* This should only appear for ciphers/codes with the correct type id */}
                    <Link className="navLink" to={`/cipher-testable/${props.id}`}>
                        Testable Cipher
                    </Link>

                    <Link className="navLink" to={`/cipher-history/${props.id}`}>
                        History
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CipherNav;
