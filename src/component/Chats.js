import React, {useContext , useEffect , useState} from 'react';

import { auth } from '../firebase';

import { useHistory } from 'react-router-dom';

import { ChatEngine} from "react-chat-engine";

import axios from 'axios';

import Navbar from "./Navbar";

import styles from "./Chats.module.css";

import { AuthContext } from "../context/AuthContextProvider";



const Chats = () => {


    const [loading, setLoading] =useState (true);
    const user = useContext(AuthContext);
    const history = useHistory();


useEffect (() => {
if (!user) {
    history.push("/");
    return;
}

axios.get("https://api.chatengine.io/users/me", {
        headers: {
    "project-id" :"2820c135-e1d5-4a10-8f24-1f34f413d6a7",
    "user-name" : user.email,
    "user-secret" :user.uid

    }
})
.then(() => {
    setLoading(false)
})
.catch (() => {
    let formdata = new FormData();
    formdata.append("email", user.email);
    formdata.append("username" , user.email);
    formdata.append("secret" , user.uid);
    getFile(user.photoURL)
        .then(avatar => {
        formdata.append("avatar" , avatar, avatar.name)
        axios.post("https://api.chatengine.io/users/", formdata,{
                headers: {
                        "private-key": "6589e8da-3b6d-452a-8516-e6d68e25154c"
            }
        })
        .then (() => setLoading(false))
        .catch(error => console.log(error))
      })
})



},[user, history])


const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data] , "userPhoto.jpg" , {type :"image/jpeg"})

}




const logoutHandler = async () => {
    await auth.signOut();
    history.push("/")
}

if (!user || loading) return "Loading ..."  


    return (
        <div className={styles.container}>
            <Navbar LogoutHandler={logoutHandler}/>




            <ChatEngine 
                height="calc(100vh - 50px )"
                projectID="2820c135-e1d5-4a10-8f24-1f34f413d6a7"    
                userName={user.email}   
                userSecret={user.uid}      />
        </div>
    );
};

export default Chats;