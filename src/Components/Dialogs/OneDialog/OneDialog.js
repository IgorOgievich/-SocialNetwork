import React from 'react';
import a from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const OneDialog = (props) => {
    return (
    <div className={a.dialog}>
        <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"/>
        <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
    </div>
    )
};

export default OneDialog;
                    