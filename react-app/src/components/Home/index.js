import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLists } from '../../store/lists';
import { getAllTasks } from '../../store/tasks';
import NavBar from '../NavBar/index';
import Tasks from '../Tasks';
import './Home.css'

const Home = () => {
    const dispatch = useDispatch();

    const [listId, setListId] = useState(null);
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getAllLists(user.id));
    }, [dispatch, user.id])

    const lists =useSelector(state => state.lists.lists)
    const tasks =useSelector(state => state.tasks.tasks)

    // useEffect(() => {
    //     dispatch(getAllTasks(listId));
    // }, [dispatch, listId])

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
                    <>
                        <div className="task-container">
                            <div className="list-titles">{list.title}</div>
                            <Tasks listId={list.id}/>
                        </div>
                    </>
                )
            })}
            </div>
            <NavBar className="navBar"/>
        </>
    )
}

export default Home;
