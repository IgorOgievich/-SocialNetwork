import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            <div className={a.items}>
                My post
            </div>
            <div>
                <textarea>New Post</textarea>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <div className={a.message}>
            <Post messages = {props.messages} />
            </div>
        </div>
    );
};


export default MyPosts;
