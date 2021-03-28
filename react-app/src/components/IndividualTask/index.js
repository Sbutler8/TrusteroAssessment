import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from '../../store/tasks';
import { getAllComments, addComment, removeComment } from '../../store/comments';
import TaskToggle from "../TaskToggle";
import './IndividualTask.css';

const IndividualTask = ({...props}) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(props.selectedTask.title);
  const [description, setDescription] = useState(props.selectedTask.description);
  const [status, setStatus] = useState(props.selectedTask.status);
  const [comment, setComment] = useState("");
  const [addedComment, setAddedComment] = useState(true);

  useEffect(() => {
      dispatch(getAllComments(props.selectedTask.id));
  }, [dispatch, props.selectedTask.id])

  const comments = useSelector(state => state.comments.comments)

  const handleAddTask = () => {
    dispatch(addComment({comment, id:props.selectedTask.id}));
    setComment('');
  }

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
        <div className="comments-container">
          <div className="comments-header">Comments<i className="fas fa-plus" onClick={() => setAddedComment(false)}></i></div>
          {comments &&
          comments.map(comment => {
            return (
              <ul key={comment.id}>
                <li className="comments-list">{comment.comment}
                  <div className="icon-container">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash" onClick={() => dispatch(removeComment(comment.id))}></i>
                  </div>
                </li>
              </ul>
            )
          })}
        </div>
        <div className="add-comment-container" hidden={addedComment}>
          <i id="add-comment-plus" className="fas fa-plus" onClick={() => handleAddTask()}></i>
          <textarea className="add-comment-text-area"
          placeholder="Add comment"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          >
          </textarea>
        </div>
        <button className="save-button" type="submit">Save</button>
    </form>
  );
}

export default IndividualTask;
