import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from '../../store/comments';
import './AddComment.css';

const AddComment = ({...props}) => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");


  const handleAddTask = () => {
    dispatch(addComment({comment, id:props.selectedTask.id}));
    setComment('');
  }

  return (
        <div className="add-comment-container" >
          <i id="add-comment-plus" className="fas fa-plus" onClick={() => handleAddTask()}></i>
          <textarea className="add-comment-text-area"
          placeholder="Add comment"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          >
          </textarea>
        </div>
  );
}

export default AddComment;
