import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import LoginForm from '../auth/LoginForm';

function ModalViews({...props}) {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showTaskModal, setShowTaskModal] = useState(false);

    return (
      <>
        {showLoginModal &&  (
          <Modal onClose={() => setShowLoginModal(false)} name="login">
            <LoginForm setShowLoginModal={setShowLoginModal}/>
          </Modal>
        )}
        {showTaskModal &&  (
          <Modal onClose={() => setShowTaskModal(false)} name="task">
            <IndividualTask setShowTaskModal={setShowTaskModal}/>
          </Modal>
        )}
      </>
    );
  }

  export default ModalViews;
