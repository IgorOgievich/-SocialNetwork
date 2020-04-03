import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";
let newPost = React.createRef();


const MyPosts = (props) => {

    let add = () => {
        let text = newPost.current.value;
        props.dispatch({type: "ADD-POST", text});
        newPost.current.value = "" ;
    };

    return (
        <div>
            <div className={a.items}>
                My post
            </div>
            <div>
                <textarea value={props.newPostText} ref={newPost} />
                <div className={a.items}>
                    <button onClick={add}>Add</button>
                </div>
            </div>
            <div className={a.message}>
            <Post messages = {props.messages}/>
            </div>
        </div>
    );
};


export default MyPosts;
