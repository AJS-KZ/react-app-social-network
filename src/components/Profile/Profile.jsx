import React from "react";

// import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
  debugger;
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts.postData} />
    </div>
  );
};

export default Profile;
