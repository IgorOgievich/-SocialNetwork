import React from 'react';
import a from '../Dialogs/Dialogs.module.css';
import {NavLink} from "react-router-dom";
import OneDialog from "./OneDialog/OneDialog";
import Message from "./Message/Message";


// const OneDialog = (props) => {
//     return (
//     <div className={a.dialog}>
//         <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"/>
//         <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
//     </div>
//     )
// };

// const Message = (props) => {
//     return(
//         <div className={a.message}>
//             <p> {props.message} </p>
//         </div>
//     );
// };

const Dialogs = () => {
    let name = [
        {name : "Igor", id : "1"},
        {name : "Anna", id : "2"},
        {name : "Den", id : "3"},
    ];
    let nameElement = name
        // eslint-disable-next-line react/jsx-no-undef
        .map (el => <OneDialog name = {el.name} id = {el.id} /> );


let message = [
    {message: 'Hello Igor'},
    {message: 'Hello Anna'},
    {message: 'Hello Den'}

];
    // eslint-disable-next-line react/jsx-no-undef
 let messageElement = message.map(me =>  <Message message= {me.message}/> );

    return (
        <div className={a.content}>
            <div className={a.userName}>
                { nameElement }
            </div>
            <div className={a.messages}>
                {messageElement}
            </div>
        </div>

    );
};


export default Dialogs;
                    