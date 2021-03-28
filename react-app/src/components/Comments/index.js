
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeComment } from '../../store/comments';
import './Comments.css';

const Comments = ({...props}) => {
  const dispatch = useDispatch();

  const comments = useSelector(state => state.comments.comments)

  return (
        <div className="comments-container">
          <div className="comments-header">Comments<i className="fas fa-plus" onClick={() => props.setAddedComment(true)}></i></div>
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
  );
}

export default Comments;
