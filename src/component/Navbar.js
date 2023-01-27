import React from 'react';
import styles from "./Navbar.module.css";

const Navbar = ({LogoutHandler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                chat-app
            </div>
            <div className={styles.logout}  onClick={LogoutHandler}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;