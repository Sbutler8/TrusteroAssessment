import React from 'react';
import './TaskToggle.css';

const TaskToggle = ({ ...props }) => {

    console.log('status:', props.status)
    return (
        <>
            <div className="toggle-container">
                <input type="checkbox" id="switch"  className="checkbox" value={props.status} onClick={() => props.status ? props.setStatus(false):props.setStatus(true)} checked={props.status ? false:true}/>
                <label htmlFor="switch" className={props.status ? "status-toggle in-progress":"status-toggle complete"}></label>
            </div>
        </>
    )
}

export default TaskToggle;
