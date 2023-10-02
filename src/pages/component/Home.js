import React, { useState } from "react";
import '../css/Login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {

    const [loginUser, setLoginUser] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    // console.log("loginUser",loginUser);


    //form ma data change thay to ama change thay
    const handleChange = (e) => {
        // console.log("evewnt",e);
        setLoginUser({
            ...loginUser,
            [e.target.name]: e.target.value
        })
    }

    const SingIn = () => {
        // console.log("hello");
        const error = {};

        const emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!loginUser.email) {
            error.email = "please email required";
        } else if (!emailRegx.test(loginUser.email)) {
            error.email = "valid email"
        }

        const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,10})/;

        if (!loginUser.password) {
            error.password = "please password required";
        } else if (!passwordRegx.test(loginUser.password)) {
            error.password = "valid password"
        }

        if (error.email || error.password) {
            setError(error)
            return;
        }

        //api ma data mokalava
        const body = {
            email: loginUser.email,
            password: loginUser.password
        }

        axios.post("http://localhost:3001/api/v1/auth/login", body)
            //response success thay to 
            .then((res) => {

                // console.log("res",res);

                if (res.status === 200) {
                    setLoginUser({
                        email: '',
                        password: ''
                    })
                    localStorage.setItem("token", res.data.token.access.token)
                    localStorage.setItem("userName", res.data.user.firstName)
                    navigate('/home')
                }
                //response ma error ave to
            }).catch((error) => {
                console.log("error",error.response.data.message);
                if (error.response.data.message === "Incorrect email or password") {
                    toast.error(<p>{"Incorrect email or password"}</p>, {
                        position: "top-center"
                    })
                }
            })
    }

    const onKeyBtn = (e) => {
        if (e.key === "Enter") {
            SingIn();
        }
    }
    return (
        <>
            <div className="image"></div>
            <div className="Login-form">
                <h1>Home</h1>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter the Email"
                    value={loginUser.email}
                    onChange={(e) => {
                        setError({
                            ...error,
                            email: ''
                        })
                        handleChange(e)
                    }}
                /><br></br><br></br>
                {
                    error.email && <p style={{ color: 'blue' }}>{error.email}</p>
                }
                <input
                    type="password"
                    name="password"
                    placeholder="Enter the password"
                    value={loginUser.password}
                    onChange={(e) => {
                        setError({
                            ...error,
                            password: ''
                        })
                        handleChange(e)
                    }}
                    onKeyPress={(e) => onKeyBtn(e)}
                /><br></br><br></br>
                {
                    error.password && <p>{error.password}</p>
                }
                <button onClick={() => SingIn()}>SignIn</button>
            </div>
            <ToastContainer />
        </>
    );
}

export default Home;
