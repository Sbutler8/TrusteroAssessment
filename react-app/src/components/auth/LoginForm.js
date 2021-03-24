import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './LoginFormModal.css'


const LoginForm = ({...props}) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
        dispatch(sessionActions.getAllUsers());
    }, [dispatch])

  const users = useSelector(state => state.session.users);

  const onLogin = async (e) => {
    e.preventDefault();
    setErrors([]);
    if (email === 'demo@demo.com') {
      dispatch(sessionActions.login({email:'demo@demo.com', password:'password'}))
    } else {
      dispatch(sessionActions.login({email, password}))
    }
    props.setShowLoginModal(false);
    history.push('/home');
  };

  const getPassword = () => {
    if (email === 'demo@demo.com') {
      return 'password';
    } else {
      return password;
    }
  }

  const getClickedUser = (user) => {
    setEmail(user.email);
    setPassword('password');
  }

  return (
    <>
    <button className="left-button-container" type="button" onClick={() => {props.setShowLoginModal(false)}}><i className="fas fa-arrow-left"></i></button>
    <div id="login-header">Login</div>
      <div className="users-container">
        {users &&
        users.map(user => {
          return (
            <div key={user.id} className="profile-button-container">
            {user.id === 1 &&
            (
                <div className="demo-user-container">
                    <label className="demo-user-label">Demo User</label>
                    <button className="profilePic" style={{backgroundImage: `url(${user.pic})`}} onClick={() =>{ getClickedUser(user)}}></button>
                </div>
            )
            }
            {user.id !== 1 &&
                <button className="profilePic" style={{backgroundImage: `url(${user.pic})`}} onClick={() =>{ getClickedUser(user)}}></button>                        }
            </div>
          )
        })}
      </div>
      <form className="login-form" onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div>
          <input
            className="login-input"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="login-input"
            name="password"
            type="password"
            placeholder="Password"
            value={getPassword()}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

          <button id="submit-button" type="submit">Login</button>

      </form>
    </>
  );
};

export default LoginForm;
