import React from 'react';
import a from './Profile.module.css';

const Profile = () => {
  return (
    <div className={a.content}>
        <img src="https://avatanplus.com/files/resources/original/5c013319dece116764af9d39.jpg"/>
        <div>ava</div>
        <div>my post</div>
        <div>new post</div>
        <div className={a.items}>post1</div>
        <div className={a.items}>post2</div>
    </div>
  );
};









export default Profile;
