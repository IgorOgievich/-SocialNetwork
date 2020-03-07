import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
        <div>
            <div className={a.items}>
            My post
            </div>
            <div>
            <textarea>New Post</textarea>
                <button>Add</button>
            </div>
       <Post message = "Hi Igor"/>
       <Post message = "Hi Anna"/>
       <Post message = "Hi Den"/>
    </div>
  );
};


export default MyPosts;
