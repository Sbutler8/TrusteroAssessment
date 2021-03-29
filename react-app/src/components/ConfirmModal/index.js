import React from 'react';
import { useDispatch } from "react-redux";
import { removeList } from '../../store/lists';
import './ConfirmModal.css';

const ConfirmModal = ({...props}) => {
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(removeList({id: props.list.id, title: props.list.title}));
        props.setShowConfirmModal(false);
    }

    return (
        <>
            <div className="warning-container">
                <i className="fas fa-exclamation-triangle"></i>
                <span className="warning-text">Are you sure you would like to delete this list and all of its associated tasks and comments?</span>
            </div>
            <div className="button-container">
                <button className="warning-yes-submit-button" type="submit" onClick={() => handleSubmit()}>Yes</button>
                <button className="warning-no-submit-button" type="button" onClick={() => props.setShowConfirmModal(false)}>No</button>
            </div>
        </>
    )
}

export default ConfirmModal;
