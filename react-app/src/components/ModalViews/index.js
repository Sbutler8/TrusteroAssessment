import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';

function ModalViews({setShowProfileModal, showCarModal, setShowCarModal}) {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    return (
      <>
        {showLoginModal &&  (
          <Modal onClose={() => setShowLoginModal(false)} name="login">
            <LoginForm setShowLoginModal={setShowLoginModal} selectedUser={selectedUser}/>
          </Modal>
        )}
        {showSignupModal &&  (
        <Modal onClose={() => setShowSignupModal(false)} name="signup">
          <SignUpForm setShowSignupModal={setShowSignupModal}/>
        </Modal>
        )}
      </>
    );
  }

  export default ModalViews;
