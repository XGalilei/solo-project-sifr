import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useDispatch, useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);
  const ciphers = useSelector(store => store.ciphers.allCiphers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_CIPHERS' });
  }, []);

  return (
    <div>
      <div className="right">
      {user.id ?
        <Link
          className="btn_asLink"
          to="/user">
          Profile
        </Link> :
        <Link
          className="btn_asLink"
          to="/login">
          Login
        </Link>
        }
      {user.id ?
        <LogOutButton className="btn_asLink" />
        : ''
        }
      </div>
      <Link to="/home">
        <h2 className="nav-title">SIFR</h2>
      </Link>
      <div className="nav">

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

          <div className="dropdown">
            <div className="dropbtn">Ciphers</div>
            <div className="dropdown-content">
              {ciphers.map(cipher => {
                return <Link className="dropLink"
                  key={cipher.id}
                  to={`/cipher/${cipher.id}`}
                  onClick={() => { dispatch({ type: 'FETCH_SINGLE_CIPHER', payload: cipher.id }) }}
                >
                  {cipher.name}<br />
                </Link>

              })}
            </div>
          </div>





          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
              <Link className="navLink" to="/challenges">
                Challenges
              </Link>

              <Link className="navLink" to="/feedback">
                Feedback
              </Link>

            </>
          )}

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