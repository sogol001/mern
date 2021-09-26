import React, { useState } from 'react';
import axios from "axios";
import BackBtn from '../BackBtn';
import { Redirect } from "react-router-dom";
import { render } from '@testing-library/react';
import Cookies from 'universal-cookie';



const AuthForm = (props) => {
  //states:
  
  const [loginFormShow, setLoginFormShow] = useState(true);
 
  const cookie = new Cookies();

 const  loginHandler =async e=>{
    e.preventDefault();
    const loginData = {
        username: e.target[0].value,
        password: e.target[1].value,
      };
      try{
      const response = await axios.post('http://localhost:8000/auth/login/'
      ,loginData)
      console.log(response)
      
      cookie.set("token", response.data.token);
    lgn();

      console.log(response);
      
      }catch(error){
        console.log("errror");
      }

      const lgn=async c=>{
        props.authHandler();
        console.log("workkkkk it")
      }
  };


const signupHandler= async e=>{
    e.preventDefault();
    const signupData = {
      email: e.target[0].value,
      username: e.target[1].value,
      password: e.target[2].value,
      phoneNumber: e.target[3].value,
    };
    try{
    const response = await axios.post('http://localhost:8000/auth/signup/'
    ,signupData)
    cookie.set("token", response.data.token);
    console.log(signupData)
    // const lgn=async c=>{
    //     authHandler();
    //     console.log("workkkkk it")
    //   }
    }catch(error){
      console.log("errror");
    }
}


if (props.isAuthenticated) {
    console.log("yes");
    return (console.log("yesssssss"));
  }
    return (
        <>
            <div className="auth_page">
                <div className="auth-container">
                    <div className="box">
                        <div className="toggle">
                            <h1
                                className={loginFormShow ? 'active' : ''}
                                onClick={() => {
                                    setLoginFormShow(true);
                                }}
                            >
                                Login
                            </h1>
                            <div className="slash-form">/</div>
                            <h1
                                className={!loginFormShow ? 'active' : ''}
                                onClick={() => {
                                    setLoginFormShow(false);
                                }}
                            >
                                SignUp
                            </h1>
                        </div>

                        {loginFormShow ? (
                            <form onSubmit={loginHandler} className="login-form">
                                <input type="text" placeholder=" Username" />
                                <input
                                    type="password"
                                    placeholder=" password"
                                />
                                <button className="login-btn">Log in</button>
                            </form>
                        ) : (
                            <form onSubmit={signupHandler} className="signup-form">
                                <input type="email" placeholder=" email" />
                                <input type="text" placeholder=" username" />
                                <input
                                    type="password"
                                    placeholder=" password"
                                />
                                <input type="text" placeholder=" phone number" />
                                <button className="signup-btn">Sign Up</button>
                            </form>
                        )}
                    </div>
                </div>
                <BackBtn />
            </div>
        </>
    );
};

export default AuthForm;
