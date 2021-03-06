import React from 'react';
import a from './Post.module.css';

const OnePost = (props) => {
    return (
        <div>
            <img src="https://avatars.mds.yandex.net/get-pdb/1751508/5ce53352-7bf5-4b8b-801c-a4f1a7e06a0d/s1200"/>
            {props.message}
        </div>);
};

const Post = (props) => {

    let messageElement = props.messages.map(m => <OnePost message = {m.messages}> </OnePost>);
    return (
        <div className={a.items}>
            {messageElement}
        </div>

    );
};


export default Post;
