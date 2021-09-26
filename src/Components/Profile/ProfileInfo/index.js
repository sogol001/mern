import React, { useEffect, useState} from "react";
import BackBtn from '../BackBtn/index';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';
const ProfileInfo = ({isAuthenticated , logoutHandler}) => {

    const logoutevent =(e)=>{
        e.preventDefault();
        // console.log("================")
        // console.log(logoutHandler())
        // console.log("================")
        // console.log("cryyyyy");
         if(isAuthenticated){
          logoutHandler();
        <link exact to="/"/>
    }
}

// const cookie = new Cookies();
// cookie = new Cookies();
//   token = cookie.get("token");
// useEffect(async () => {
//     try {
//       const userData = await axios.get(`http://localhost:8000/users/me/`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);


    return (
        <div className="profile-container">
            <div className="profile">
                <div className="info-box">
                    <div className="personal-info">
                        <h4>Personal information</h4>
                        <div className="personalinfo-lable">username</div>
                        <div className="info-text">@test</div>
                        <div className="personalinfo-lable">email</div>
                        <div className="info-text">test@gmail.com</div>
                        <div className="personalinfo-lable">adress</div>
                        <div className="info-text">test street , no 12</div>
                    </div>
                    <div className="profile-secondsection">
                        <div className="profile-avatar">Photo</div>
                        <div className="profile-logout">
                            <button onClick={logoutevent}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
            <BackBtn />
        </div>
    );
};
export default ProfileInfo;
