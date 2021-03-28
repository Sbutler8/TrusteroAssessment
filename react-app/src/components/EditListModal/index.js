import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editListTitle } from'../../store/lists';
import './EditListModal.css';

const EditListModal = ({...props}) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState(props.list.title);

    const handleSubmit = () => {
        dispatch(editListTitle({id:props.list.id, title: title, index: props.listIndex}));
        props.setShowEditListModal(false);
    }

    return (
        <>
            <div className="edit-title-container">
                <div >New List Name:</div>
                <input className="title-input-field"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
                >
                </input>
            </div>
            <button id="submit-button" type="submit" onClick={() => handleSubmit()}>Save</button>
        </>
    )
}

export default EditListModal;
