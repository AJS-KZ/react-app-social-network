import React from "react";

import styles from './Header.module.css';


const Header = () => {
    return (
        <header className={styles.header}>
            <img src="https://kbmis.com/wp-content/uploads/2018/10/autodesk-logo-png-autodesk-unveils-complete-manufacturing-software-portfolio-tct-magazine-2272.png" alt="logo" />
        </header>
    );
}

export default Header;
