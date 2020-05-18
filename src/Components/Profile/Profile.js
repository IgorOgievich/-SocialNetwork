import React from 'react';
import a from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfilrInfo";

const Profile = (props) => {

    return (
        <div className={a.content}>
            <ProfileInfo/>
            <MyPosts />
        </div>
    );
};


export default Profile;
