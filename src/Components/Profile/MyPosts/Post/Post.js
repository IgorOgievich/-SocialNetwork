import React from 'react';
import a from './Post.module.css';

const OnePost = (props) => {
    return (
        <div>
            <img src="https://avatars.mds.yandex.net/get-pdb/1751508/5ce53352-7bf5-4b8b-801c-a4f1a7e06a0d/s1200"/>
            {props.message}
        </div>);
};

const Post = () => {
    let messages = [
        {message: "Hi Igor"},
        {message: "Hi Anna"},
    ];
    let messageElement = messages.map(m => <OnePost message = {m.message}> </OnePost>);
    return (
        <div className={a.items}>
            <img src="https://avatars.mds.yandex.net/get-pdb/1751508/5ce53352-7bf5-4b8b-801c-a4f1a7e06a0d/s1200"/>
            {messageElement}
        </div>

    );
};


export default Post;
