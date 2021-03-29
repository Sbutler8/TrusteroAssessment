import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLists } from '../../store/lists';
import ConfirmModal from '../ConfirmModal';
import { Modal } from '../../context/Modal';
import Tasks from '../Tasks';
import './Lists.css';
import EditListModal from '../EditListModal';

const Lists = () => {
    const dispatch = useDispatch();

    const [list, setList] = useState({});
    const [listIndex, setListIndex] = useState(0); // to allow for constant time lookup in state
    const [showEditListModal, setShowEditListModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const user = useSelector(state => state.session.user);
    const lists = useSelector(state => state.lists.lists);

    useEffect(() => {
        dispatch(getAllLists(user.id));
    }, [dispatch, user, showEditListModal])

    return (
        <>
        <div className="list-container">
        {lists &&
            lists.map((list, i) => {
                return (
                    <div className="task-container" key={list.id}>
                        <div className="list-titles">{list.title}
                            <i className="fas fa-edit" onClick={() => {setList(list); setListIndex(i); setShowEditListModal(true)}}></i>
                            <i className="fas fa-trash" onClick={() => {setList(list); setShowConfirmModal(true)}}></i>
                        </div>
                        <Tasks listId={list.id}/>
                    </div>
                )
            })}
        </div>
        {showEditListModal &&
        <Modal onClose={() => setShowEditListModal(false)} name="listTitle">
            <EditListModal setShowEditListModal={setShowEditListModal} list={list} listIndex={listIndex}/>
        </Modal>
        }
        {showConfirmModal &&
        <Modal onClose={() => setShowConfirmModal(false)} name="warning">
            <ConfirmModal setShowConfirmModal={setShowConfirmModal} list={list}/>
        </Modal>
        }
        </>
    )
}

export default Lists;
