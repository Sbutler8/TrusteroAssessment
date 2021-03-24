import React from 'react';
import Footer from '../Footer/index';
import NavBar from '../NavBar';
import './SplashPage.css'

const SplashPage = () => {

    return (
        <>
            <div className="header-container">
                <img src='https://analogtodigitaldash.s3-us-west-1.amazonaws.com/SplashPage.png' alt='splash-page'></img>
            </div>
            <div className="text-container">
                <div className="section-header">About</div>
                <p className="about-paragraph">This Todos List web application gives users the ability to create new tasks associated with individual lists of their choosing. Need to expand on those tasks? No worries! Users can simply add individual comments to each task. Using the easy-to-use toggle, users can keep track of which tasks are in progress and which are completed. This feature rich app doesn't stop there. No longer need the comment, task or list created? Users have the ability to remove any which one they would like. Login using the pre-loaded demo user to experience this feature-rich app now! </p>
                <NavBar />
            </div>
            <Footer />
        </>
    )
}

export default SplashPage;
