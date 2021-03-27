import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLists, removeList } from '../../store/lists';
import Tasks from '../Tasks';
import './Lists.css';

const Lists = () => {
    const dispatch = useDispatch();

    const [editListTitle, setEditListTitle] = useState(true);

    const user = useSelector(state => state.session.user)
    const lists = useSelector(state => state.lists.lists);

    useEffect(() => {
        dispatch(getAllLists(user.id));
    }, [dispatch, user])

    return (
        <div className="list-container">
        {lists &&
            lists.map(list => {
                return (
                    <div className="task-container" key={list.id}>
                        <input
                            className="list-titles"
                            placeholder="Title"
                            type="text"
                            value={list.title}
                            onChange={(e) => setEditListTitle(e.target.value)}
                            readOnly={editListTitle}>
                        </input>
                        <i className="fas fa-edit" onClick={() => setEditListTitle(false)}></i>
                        <i className="fas fa-trash" onClick={() => dispatch(removeList(list))}></i>
                        <Tasks listId={list.id}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Lists;
