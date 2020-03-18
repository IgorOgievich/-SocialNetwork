import React from 'react';
import a from '../Dialogs/Dialogs.module.css';
import OneDialog from "./OneDialog/OneDialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let nameElement = props.name.map (el => <OneDialog name = {el.name} id = {el.id} /> );
 let messageElement = props.message.map(me =>  <Message message= {me.message}/> );

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
                    