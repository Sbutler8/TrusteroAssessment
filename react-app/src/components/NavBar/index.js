import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import LoginForm from '../auth/LoginForm';
import { Modal } from '../../context/Modal';
import * as sessionActions from '../../store/session'
import './NavBar.css';

const NavBar = () => {
  const dispatch = useDispatch();
  const authenticate = useSelector((state) => state.session.authenticate);

  const [showLoginModal, setShowLoginModal] = useState(false);

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
            <Link className="menu-item lightblue" id="login" to="/" onClick={() => setShowLoginModal(true)} ><span>Login</span></Link>
          </>
          }
        </nav>
        {showLoginModal &&
          <Modal onClose={() => setShowLoginModal(false)} name="login">
            <LoginForm setShowLoginModal={setShowLoginModal}/>
          </Modal>
        }
    </>
  );
}

export default NavBar;
