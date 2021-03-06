import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer.js";
import Users from "./Users.jsx";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
