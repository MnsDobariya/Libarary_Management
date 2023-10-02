import React, { useState } from "react";
import '../css/Login.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Lgn = () => {

    const [lgnUser, setLgnUser] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    // console.log("lgnUser", lgnUser);

    const handleChange = (e) => {
        // console.log("event", e);
        setLgnUser({
            ...lgnUser,
            [e.target.name]: e.target.value
        })
    }

    const singIn = () => {
        // console.log("hello");

        const body = {
            email: lgnUser.email,
            password: lgnUser.password
        }

        axios.post("http://localhost:3001/api/v1/auth/login", body)
            .then((res) => {
                console.log("res", res);
                if (res.status === 200) {
                    setLgnUser({
                        email: '',
                        password: ''
                    })
                    localStorage.setItem("token", res.data.token.access.token)
                    localStorage.setItem("userName", res.data.user.firstName)
                    navigate('/home')
                }

            }).catch((error) => {
                // console.log("error", error);

                if (error.response.data.message === "Incorrect email or password") {
                    toast.error(<p>{"Incorrect email or password"}</p>, {
                        position: "top-center"
                    })
                }
            })
    }
    return (
        <>
            <div className="Login-form">
                <h1>Lgn</h1>
                <input type="email"
                    name="email"
                    value={lgnUser.email}
                    placeholder="Enter the email"
                    onChange={(e) => handleChange(e)}
                /><br></br><br></br>
                <input type="password"
                    name="password"
                    value={lgnUser.password}
                    placeholder="Enter the password"
                    onChange={(e) => handleChange(e)}
                /><br></br><br></br>
                <button onClick={singIn}>SingIn</button>
            </div>
            <ToastContainer />
        </>
    )
}

export default Lgn;