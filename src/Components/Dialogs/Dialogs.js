import React from 'react';
import a from '../Dialogs/Dialogs.module.css';
import {NavLink} from "react-router-dom";

const OneDialog = (props) => {
    return (
    <div className={a.dialog}>
        <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"/>
        <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
    </div>
    )
};
const Message = (props) => {
    return(
        <div className={a.message}>
            <p> {props.message} </p>
        </div>
    );
};

const Dialogs = () => {
    return (
        <div className={a.content}>
            <div className={a.userName}>
            <OneDialog name = "Igor" id = "1"/>
            <OneDialog name = "Anna" id = "2"/>
            <OneDialog name = "Denis" id = "3"/>
            </div>
            <div className={a.messages}>
               <Message message="Hello Igor"/>
               <Message message="Hi Anna"/>
            </div>
        </div>

    );
};


export default Dialogs;
                    