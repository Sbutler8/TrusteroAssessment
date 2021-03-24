import React, { useEffect, useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
import IndividualTask from '../IndividualTask/index';
import { Link } from "react-router-dom";
import { Modal } from '../../context/Modal';
import { getAllTasks } from '../../store/tasks';
import { setSelectedTask } from '../../store/tasks';
import TaskToggle from "../TaskToggle";
import './Tasks.css';

function Tasks({ listId }) {
    const dispatch = useDispatch();

    const [showTaskModal, setShowTaskModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

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
                    <div key={i}>
                        <Link to='/home' onClick={() => {setShowTaskModal(true); setSelectedTask(task)}} >
                            <div className="task-title" >{task.title}</div>
                        </Link>
                        {/* <div className="task-carousel">{task.description}</div>
                        <TaskToggle /> */}
                    </div>
                )
            })}
            {showTaskModal &&  (
                <Modal onClose={() => setShowTaskModal(false)} name="task">
                    <IndividualTask setShowTaskModal={setShowTaskModal} selectedTask={selectedTask}/>
                </Modal>
            )}
        </div>
    );
}

export default Tasks;
