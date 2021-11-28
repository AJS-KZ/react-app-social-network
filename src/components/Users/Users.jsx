import React from "react";
import styles from './Users.module.css';

const Users = (props) => {
    return <div>
        {
            props.users.map(u => <div className={styles.item} key={u.uuid}>
                <span>
                    <div>
                        <img className={styles.itemImage} src={u.avatar} alt="" />
                    </div>
                    <div>
                        {
                            u.followed ?
                                <button onClick={() => { props.unfollow(u.uuid) }}>UnFollow</button>
                                : <button onClick={() => { props.follow(u.uuid) }}>Follow</button>
                        }
                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.bio}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;
