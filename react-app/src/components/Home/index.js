import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllLists} from '../../store/lists';
import NavBar from '../NavBar/index';
import './Home.css'

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getAllLists(user.id))
    })

    const lists =useSelector(state => state.lists.lists)

    return (
        <>
            <div className="header-container">
                <div className="welcome-header">Welcome Back {user.name}!</div>
                <img src='https://analogtodigitaldash.s3-us-west-1.amazonaws.com/HomePage.png' alt='home-page'></img>
            </div>
            {lists &&
            lists.map(list => {
                return (
                    <>
                    <div>{list.title}</div>
                </>
                )
            })}
            <NavBar className="navBar"/>
        </>
    )
}

export default Home;
