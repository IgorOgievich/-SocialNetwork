import React from 'react';
import a from '../Dialogs/Dialogs.module.css';
import OneDialog from "./OneDialog/OneDialog";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let nameElement = state.name.map(el => <OneDialog name={el.name} id={el.id}/>);
    let messageElement = state.message.map(me => <Message message={me.message}/>);
    let newMessageBody = state.message.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator())
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageActionCreator(body))
    };

    return (
        <div className={a.content}>
            <div className={a.userName}>
                {nameElement}
            </div>
            <div className={a.messages}>
                <div>{messageElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter your message">

                        </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    );
};
 let mapStateToProps =(dispatch) => {
     return{

     }
 }

const DialogsConnect = connect ()(Dialogs)
export default Dialogs;
                    