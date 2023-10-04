import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../css/Registration.css";
import image from "../Image/img5.jpg";
import API_BASE_URL from "../../component/config/Config";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [lgnFormData, setLgnFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log("lgnFormData", e.target.value);
    setLgnFormData({
      ...lgnFormData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const SignIn = () => {
    const error = {};

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!lgnFormData.email) {
      error.email = "Please Email Required";
    } else if (!emailRegex.test(lgnFormData.email)) {
      error.email = "Invalid Email";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,10})/;
    if (!lgnFormData.password) {
      error.password = "Please Password Required";
    } else if (!passwordRegex.test(lgnFormData.password)) {
      error.password = "Invalid Password";
    }

    if (error.email || error.password) {
      setError(error);
      return;
    }

    const body = {
      email: lgnFormData.email,
      password: lgnFormData.password,
    };

    axios
    .post(API_BASE_URL + `/auth/login`, body)

      .then((res) => {
        console.log("res",res);
        if (res.status === 200) {
          setLgnFormData({
            email: "",
            password: "",
          });
          localStorage.setItem("token", res.data.token.access.token);
          localStorage.setItem("userName", res.data.user.firstName);
          localStorage.setItem("role", res.data.user.role);
          
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log("err", error);
        if (error.response.data.message === "Incorrect email or password") {
          toast.error(<p>{"Incorrect email or password..!"}</p>, {
            position: "top-center",
          });
        }
      });
  };

  const onKeyBtn = (e) => {
    if (e.key === "Enter") SignIn();
  };

  const moveRegister = () =>{
    navigate("/registration")
  }

  return (
    <>
      <section className='vh-100' style={{ backgroundColor: "#9A616D" }}>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col col-xl-10'>
              <div className='card' style={{ borderRadius: "1rem" }}>
                <div className='row g-0'>
                  <div className='col-md-6 col-lg-5 d-none d-md-block'>
                    <img
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp'
                      alt='login form'
                      className='img-fluid'
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className='col-md-6 col-lg-7 d-flex align-items-center'>
                    <div className='card-body p-4 p-lg-5 text-black'>
                      <form>
                        <div className='d-flex align-items-center  pb-1'>
                          <span className='h1 fw-bold mb-0'>Login</span>
                        </div>
                        <h5
                          className='fw-normal mb-3 pb-3'
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>
                        <div className='form-outline mb-1'>
                          <label
                            className='form-label'
                            htmlFor='form2Example17'
                          >
                            Email address
                          </label>
                          <input
                            name='email'
                            type='email'
                            id='form2Example17'
                            className='form-control'
                            value={lgnFormData.email}
                            placeholder='Email'
                            onChange={(e) => {
                              setError({
                                ...error,
                                email: "",
                              });
                              handleChange(e);
                            }}
                          />
                          {error.email && <p>{error.email}</p>}
                        </div>
                        <div className='form-outline mb-1'>
                          <label
                            className='form-label'
                            htmlFor='form2Example27'
                          >
                            Password
                          </label>
                          <div className="d-flex">
                          <input
                            name='password'
                            type={passwordVisible ? "text" : "password"}
                            id='form2Example27'
                            className='form-control'
                            value={lgnFormData.password}
                            placeholder='Password'
                            onChange={(e) => {
                              setError({
                                ...error,
                                Password: "",
                              });
                              handleChange(e);
                            }}
                            onKeyPress={(e) => onKeyBtn(e)}
                          />
                          <div className='input-group-append'>
                            <span
                              className='input-group-text'
                              onClick={togglePasswordVisibility}
                              style={{ cursor: "pointer" }}
                            >
                              {passwordVisible ? (
                                <FontAwesomeIcon icon={faEye} /> // Eye slash icon for showinh password
                              ) : (
                                <FontAwesomeIcon icon={faEyeSlash} /> // Eye icon for hide password
                              )}
                            </span>
                          </div>
                          </div>
                          
                          {error.password && <p>{error.password}</p>}
                        </div>

                        <div className='pt-1 mb-4' >
                          <p
                          style={{backgroundColor:"#0c4c91",color:"white"}}
                            className='btn'
                            onClick={SignIn} 
                          >
                            Login
                          </p>
                        </div>
                        <a className='small text-muted' href='#!'>
                          Forgot password?
                        </a>
                        <div className='d-flex'>
                          <p
                            className='mb-5 pb-lg-2 d-flex'
                            style={{ color: "#393f81" }}
                          >
                            You have an Registered all ready?{" "}
                            <p className="registerHere-text" onClick={ () => moveRegister()}>Register here</p>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
