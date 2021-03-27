import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { removeList } from '../../store/lists';
import './ConfirmModal.css';

const ConfirmModal = ({setShowConfirmModal}) => {
    const history = useHistory();

    const [toggle, setToggle] = useState(false)

    const handleSubmit = () => {
        setShowConfirmModal(false);
        if (toggle) {
            history.push('/map');
        }
    }

    return (
        <>
            <div className="gps-warning-container">
                <i className="fas fa-exclamation-triangle"></i>
                <span className="warning-text">Are you sure you would like to delete this list and all of its associated tasks and comments?</span>
                <div className="toggle-container">
                    <input type="checkbox" id="switch"  className="checkbox" value={toggle} onClick={() => toggle ? setToggle(false):setToggle(true)}/>
                    <label htmlFor="switch" className="gps-toggle"></label>
                </div>
            </div>
            <button className="gps-submit-button" type="submit" onClick={handleSubmit}>OK</button>
        </>
    )

}

export default ConfirmModal;
