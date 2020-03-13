import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    // let message = [
    //     {message: "Hi Igor"},
    //     {message: "Hi Anna"},
    //     {message: "Hi Den"},
    //     {message: "Hi Vlad"}
    // ];

    // let messageElement = message.map(me => {}  )
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
            <Post />
            </div>
        </div>
    );
};


export default MyPosts;
