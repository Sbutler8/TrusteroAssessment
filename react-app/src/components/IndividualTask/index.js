import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from '../../store/tasks';
import { getAllComments, addComment, removeComment } from '../../store/comments';
import TaskToggle from "../TaskToggle";
import './IndividualTask.css';

function IndividualTask({setShowTaskModal, selectedTask}) {
  const dispatch = useDispatch();
  console.log(selectedTask)

  const [title, setTitle] = useState(selectedTask.title);
  const [description, setDescription] = useState(selectedTask.description);
  const [status, setStatus] = useState(selectedTask.status);
  const [comment, setComment] = useState("");
  const [addedComment, setAddedComment] = useState(true);

  useEffect(() => {
      dispatch(getAllComments(selectedTask.id));
  }, [dispatch])

  const comments = useSelector(state => state.comments.comments)

  const handleAddTask = () => {
    dispatch(addComment({comment, id:selectedTask.id}));
    setComment('');
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('status:', status)
      dispatch(editTask({ id:selectedTask.id, title, description, status }))
      if (comment) {
          dispatch(addComment({comment, id:selectedTask.id}))
      }

      setShowTaskModal(false);
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
            placeholder={selectedTask.description}
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
        {/* {comment &&
        <button className="add-comment-button" >Add comment</button>
        } */}
        <button className="save-button" type="submit">Save</button>
    </form>
  );
}

export default IndividualTask;
