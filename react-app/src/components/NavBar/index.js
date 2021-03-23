import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session'
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const dispatch = useDispatch();
  const authenticate = useSelector((state) => state.session.authenticate);

  const handleLogout = () => {
    dispatch(sessionActions.logout());

  }

  return (
      <>
        <nav className="menu">
          <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
          <label className="menu-open-button" htmlFor="menu-open">
            <span className="lines line-1"></span>
            <span className="lines line-2"></span>
            <span className="lines line-3"></span>
          </label>
          {authenticate &&
          <>
            <Link className="menu-item blue" to="/" onClick={() => handleLogout()}><i className="fas fa-sign-out-alt"></i></Link>
          </>
          }
          {!authenticate &&
          <>
            <Link className="menu-item lightblue" id="login" to="/" ></Link>
          </>
          }
        </nav>
    </>
  );
}

export default NavBar;
