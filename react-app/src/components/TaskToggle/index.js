import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './TaskToggle.css';

const TaskToggle = ({ ...props }) => {
    const history = useHistory();

    const [toggle, setToggle] = useState(false)

    return (
        <>
            <div className="toggle-container">
                <input type="checkbox" id="switch"  className="checkbox" value={props.status} onClick={() => props.status ? props.setStatus(false):props.setStatus(true)}/>
                <label htmlFor="switch" className={props.status ? "checkbox:checked status-toggle":"status-toggle"}></label>
            </div>
        </>
    )

}

export default TaskToggle;
