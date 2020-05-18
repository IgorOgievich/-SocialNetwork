import React from 'react';
import a from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

let newPost = React.createRef();


const MyPostsContainer = (props) => {

    let add = () => {
        let text = newPost.current.value;
        props.dispatch(addPostActionCreator(text));
        newPost.current.value = "";
    };

    return (
        <MyPosts/>
    );
};


export default MyPostsContainer;