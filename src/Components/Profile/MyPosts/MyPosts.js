import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator} from "../../../Redux/profile-reducer";

let newPost = React.createRef();


const MyPosts = (props) => {

    let add = () => {
        let text = newPost.current.value;
        props.dispatch(addPostActionCreator(text));
        newPost.current.value = "";
    };

    return (
        <div>
            <div className={a.items}>
                My post
            </div>
            <div>
                <textarea value={props.newPostText} ref={newPost}/>
                <div className={a.items}>
                    <button onClick={add}>Add</button>
                </div>
            </div>
            <div className={a.message}>
                <Post/>
            </div>
        </div>
    );
};


export default MyPosts;
