import React, { useEffect, useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
import IndividualTask from '../IndividualTask/index';
import { Link } from "react-router-dom";
import { Modal } from '../../context/Modal';
import { getAllTasks } from '../../store/tasks';
import './Tasks.css';

function Tasks({ listId }) {
    const dispatch = useDispatch();

    const [showTaskModal, setShowTaskModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [taskIndex, setTaskIndex] = useState(null);

    let tasks = useSelector(state => state.tasks);
    let user = useSelector(state => state.session.user)
    const taskArray = tasks[listId]

    useEffect(() => {
        dispatch(getAllTasks(listId))
    }, [listId, dispatch, user, showTaskModal])

    if (!taskArray) {
        return null;
    }

    return (
        <div className="tasks-container">
            {taskArray && taskArray.map((task,i) => {
                return (
                    <div key={task.id}>
                        <Link to='/home' onClick={() => {setShowTaskModal(true); setSelectedTask(task); setTaskIndex(i)}} >
                            <div className="task-title" >{task.title}</div>
                        </Link>
                        {/* <div className="task-carousel">{task.description}</div>
                        <TaskToggle /> */}
                    </div>
                )
            })}
            {showTaskModal &&  (
                <Modal onClose={() => setShowTaskModal(false)} name="task">
                    <IndividualTask setShowTaskModal={setShowTaskModal} selectedTask={selectedTask} taskIndex={taskIndex}/>
                </Modal>
            )}
        </div>
    );
}

export default Tasks;
