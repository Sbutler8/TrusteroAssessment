import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLists, removeList } from '../../store/lists';
import NavBar from '../NavBar/index';
import Tasks from '../Tasks';
import './Home.css'

const Home = () => {
    const dispatch = useDispatch();

    const [listId, setListId] = useState(null);
    const [listTitle, setListTitle] = useState(null);
    const [editListTitle, setEditListTitle] = useState(true);
    const user = useSelector(state => state.session.user)

    const lists =useSelector(state => state.lists.lists)

    useEffect(() => {
        dispatch(getAllLists(user.id));
    }, [dispatch, user])


    return (
        <>
            <div className="header-container">
                <div className="welcome-header">Welcome Back {user.name}!</div>
                <img src='https://analogtodigitaldash.s3-us-west-1.amazonaws.com/HomePage.png' alt='home-page'></img>
            </div>
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
            <NavBar className="navBar"/>
        </>
    )
}

export default Home;
