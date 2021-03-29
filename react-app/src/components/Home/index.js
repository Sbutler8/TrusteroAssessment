import React from 'react';
import { useSelector } from 'react-redux';
import Lists from '../Lists';
import NavBar from '../NavBar/index';
import './Home.css'

const Home = () => {

    const user = useSelector(state => state.session.user)

    return (
        <>
            <div className="header-container">
                <div className="welcome-header">Welcome Back {user.name}!</div>
                <img src='https://analogtodigitaldash.s3-us-west-1.amazonaws.com/HomePage.png' alt='home-page'></img>
            </div>
            <Lists />
            <NavBar className="navBar"/>
        </>
    )
}

export default Home;
