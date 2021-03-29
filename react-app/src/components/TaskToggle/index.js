import React from 'react';
import './TaskToggle.css';

const TaskToggle = ({ ...props }) => {
    return (
        <>
            <div className="toggle-container">
                <input type="checkbox" id="switch"  className="checkbox" value={props.status} onClick={() => props.status ? props.setStatus(false):props.setStatus(true)} defaultChecked={props.status ? false:true}/>
                <label htmlFor="switch" className={props.status ? "status-toggle in-progress":"status-toggle complete"}></label>
            </div>
        </>
    )
}

export default TaskToggle;
