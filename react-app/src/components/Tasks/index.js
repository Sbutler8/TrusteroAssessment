import React, { useEffect, useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { Link, useParams, Redirect } from "react-router-dom";
import { getAllTasks } from '../../store/tasks';
import TaskToggle from "../TaskToggle";
import './Tasks.css';

function Tasks({ listId }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTasks(listId))
    }, [listId])

    let tasks = useSelector(state => state.tasks)

    const taskArray = Object.values(tasks);

    if (!taskArray) {
        return null;
    }

    return (
        <div className="tasks-container">
            {taskArray[listId-1] && taskArray[listId-1].map((task,i) => {
                return (
                    <div key={i} className="tasks-container">
                        <Link to='' onClick={() => alert('Please sign in to view project details.')} >
                            <div className="task-title" >{task.title}</div>
                        </Link>
                        {/* <div className="task-carousel">{task.description}</div>
                        <TaskToggle /> */}
                    </div>
                )
            })}
        </div>
    );
}

export default Tasks;
