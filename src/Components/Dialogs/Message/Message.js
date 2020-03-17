import React from 'react';
import a from './../Dialogs.module.css';


const Message = (props) => {
    return(
        <div className={a.message}>
            <p> {props.message} </p>
        </div>
    );
};


export default Message;
                    