import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from '../../store/tasks';
import { getAllComments } from '../../store/comments';
import TaskToggle from "../TaskToggle";
import './IndividualTask.css';
import Comments from "../Comments";
import AddComment from "../AddComment";

const IndividualTask = ({...props}) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(props.selectedTask.title);
  const [description, setDescription] = useState(props.selectedTask.description);
  const [status, setStatus] = useState(props.selectedTask.status);
  const [addedComment, setAddedComment] = useState(false);

  useEffect(() => {
      dispatch(getAllComments(props.selectedTask.id));
  }, [dispatch, props.selectedTask.id])

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(editTask({ id:props.selectedTask.id, title, description, status, taskIndex: props.taskIndex }));

      props.setShowTaskModal(false);
    };

  return (
    <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input id="title"
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
        />
        <label>Description</label>
        <textarea id="description"
            placeholder={props.selectedTask.description}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
        ></textarea>
        <label>Status: {status ? 'In Progress':'Complete'}</label>
        <TaskToggle status={status} setStatus={setStatus}/>
        <Comments setAddedComment={setAddedComment}/>
        {addedComment &&
        <AddComment addedComment={addedComment} selectedTask={props.selectedTask}/>
        }
        <button className="save-button" type="submit">Save</button>
    </form>
  );
}

export default IndividualTask;
