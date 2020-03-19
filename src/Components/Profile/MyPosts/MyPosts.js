import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";
let add = (props) => {
  props.addPost(newPost.current.value);
};
let newPost = React.createRef();

const MyPosts = (props) => {
    return (
        <div>
            <div className={a.items}>
                My post
            </div>
            <div>
                <textarea ref={newPost}> </textarea>
                <div className={a.items}>
                    <button onClick={ add }>Add</button>
                </div>
            </div>
            <div className={a.message}>
            <Post messages = {props.messages} addPost={props.addPost}/>
            </div>
        </div>
    );
};


export default MyPosts;
