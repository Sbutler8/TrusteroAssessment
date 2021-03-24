import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllComments } from '../../store/comments';
import TaskToggle from "../TaskToggle";
import './IndividualTask.css';

function IndividualTask({setShowTaskModal, selectedTask}) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(selectedTask.title);
  const [description, setDescription] = useState(selectedTask.description);
  const [status, setStatus] = useState(selectedTask.status);

  useEffect(() => {
      dispatch(getAllComments(selectedTask.id));
  })

  const handleSubmit = (e) => {
      e.preventDefault();
    //   dispatch(addComment(comment))

      setShowTaskModal(false);
    //   setNewFeature(true);
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
        <input id="description"
            placeholder={selectedTask.description}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
        />
        <label>Status: {selectedTask.status ? 'In Progress':'Complete'}</label>
        <TaskToggle status={selectedTask.status} setStatus={setStatus}/>
        <button className="save-button" type="submit">Save</button>
    </form>
  );
}

export default IndividualTask;
