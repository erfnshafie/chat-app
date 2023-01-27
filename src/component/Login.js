import React from 'react';
import firebase from 'firebase/compat/app';
import { auth } from "../firebase";


import styles from "./Login.module.css";

import google from "../assets/google.svg";

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>welcome to Botogram !</h2>

                <div 
                    className={styles.button}
                    //redirect to google page  enteqab email baray vared shodan
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    >

                   <img src={google} alt="google" />sign in with google
                </div>
            </div>
        </div>
    );
};

export default Login;