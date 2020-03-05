import React from 'react';
import a from './Profile.module.css';

const Profile = () => {
  return (
    <div className={a.content}>
        <img src="https://bipbap.ru/wp-content/uploads/2017/08/siyanie_luchi_liniya_fon_krugi_cvet_1920x1200.jpg"/>
        <div>ava</div>
        <div>my post</div>
        <div>new post</div>
        <div className={a.items}>post1</div>
        <div className={a.items}>post2</div>
    </div>
  );
};









export default Profile;
