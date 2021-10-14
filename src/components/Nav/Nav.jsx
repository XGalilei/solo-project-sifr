import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useDispatch, useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);
  const ciphers = useSelector(store => store.ciphers);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_CIPHERS' });
    //console.log(ciphers);
  }, []);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">SIFR</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        <Link className="navLink" to="/about">
          About
        </Link>

        


        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/challenges">
              Challenges
            </Link>

            <Link className="navLink" to="/feedback">
              Feedback
            </Link>

            <Link className="navLink" to="/user">
              Profile
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

<div className="dropdown">
          <div className="navLink">Ciphers</div>
          {ciphers.map(cipher => {
            return (
                <Link className="dropdown-content navLink"
                  key={cipher.id}
                  to={`/cipher/${cipher.id}`} >{cipher.name}</Link>

            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Nav;
/**
 *
 * {user.id && (
 *  <>
 *    <Link className="navLink" to="/challenges">
 *      Challenges
 *    </Link>
 *
 *    <Link className="navLink" to="/feedback">
 *      Feedback
 *    </Link>
 *  </>
 * )}
 */