import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLists, removeList } from '../../store/lists';
import ConfirmModal from '../ConfirmModal';
import { Modal } from '../../context/Modal';
import Tasks from '../Tasks';
import './Lists.css';

const Lists = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState();
    const [editListTitle, setEditListTitle] = useState(true);
    const [list, setList] = useState({});
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const user = useSelector(state => state.session.user);
    const lists = useSelector(state => state.lists.lists);

    useEffect(() => {
        dispatch(getAllLists(user.id));
    }, [dispatch, user])

    return (
        <>
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
                            autoFocus={true}>
                        </input>
                        <i className="fas fa-edit" onClick={() => setEditListTitle(false)}></i>
                        <i className="fas fa-trash" onClick={() => {setList(list); setShowConfirmModal(true)}}></i>
                        <Tasks listId={list.id}/>
                    </div>
                )
            })}
        </div>
        {showConfirmModal &&
        <Modal onClose={() => setShowConfirmModal(false)} name="warning">
            <ConfirmModal setShowConfirmModal={setShowConfirmModal} list={list}/>
        </Modal>
        }
        </>
    )
}

export default Lists;
