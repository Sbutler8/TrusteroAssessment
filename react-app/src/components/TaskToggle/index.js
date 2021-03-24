import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './TaskToggle.css';

const TaskToggle = ({ status }) => {
    const history = useHistory();

    const [toggle, setToggle] = useState(false)

    // const handleSubmit = () => {
    //     setShowGPSPermissionModal(false);
    //     if (toggle) {
    //         history.push('/map');
    //     }
    // }

    return (
        <>
            <div className="toggle-container">
                <input type="checkbox" id="switch"  className="checkbox" value={toggle} onClick={() => toggle ? setToggle(false):setToggle(true)}/>
                <label htmlFor="switch" className="status-toggle"></label>
            </div>
        </>
    )

}

export default TaskToggle;
