import React from "react";
import { NavLink } from "react-router-dom";

import styles from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/profile' activeClassName={styles.itemActive}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/dialogs' activeClassName={styles.itemActive}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/news' activeClassName={styles.itemActive}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/music' activeClassName={styles.itemActive}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/settings' activeClassName={styles.itemActive}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
