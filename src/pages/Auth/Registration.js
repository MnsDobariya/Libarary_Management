import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../css/Registration.css";
import image from "../Image/img5.jpg";
import API_BASE_URL from "../../component/config/Config.js";

const Registration = () => {
  const [passwordVisible, setPasswordVisible] = useState();
  // const [password, setPassword] = useState();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // const [isRegister, setIsRegister] = useState(true); // Initially, show the login form

  // const toggleForm = () => {
  //   setIsRegister(!isRegister); // Toggle between login and register forms
  // };

  const [regFormData, setRegFormData] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    password: "",
    // confirmPassword: ''
  });

  const [error, setError] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegFormData({
      ...regFormData,
      [e.target.name]: e.target.value,
    });
  };

  const SignUp = () => {
    console.log("qqqq");
    const error = {};

    if (!regFormData.fname) {
      error.fname = "Please fname required";
    }

    if (!regFormData.lname) {
      error.lname = "Please lname required";
    }

    const mobileRegx = /^\d+$/;
    if (!regFormData.mobile) {
      error.mobile = "Please mobile required";
    } else if (!mobileRegx.test(regFormData.mobile)) {
      error.mobile = "valid mobile";
    }

    const emailRegx =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regFormData.email) {
      error.email = "Please email required";
    } else if (!emailRegx.test(regFormData.email)) {
      error.email = "valid email";
    }

    const passwordRegx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,10})/;
    // console.log(password,"password")
    if (!regFormData.password) {
      error.password = "Please password required";
    } else if (!passwordRegx.test(regFormData.password)) {
      // console.log("66666")
      error.password = "Invalid password";
    }

    if (
      error.fname ||
      error.lname ||
      error.mobile ||
      error.email ||
      error.password
    ) {
      setError(error);
      return; // Issue 1: You are returning here, which prevents the API call from executing.
    }

    const body = {
      firstName: regFormData.fname,
      lastName: regFormData.lname,
      email: regFormData.email,
      phone: regFormData.mobile,
      password: regFormData.password,
    };
    // console.log("hello");
    axios
      .post(API_BASE_URL + `/auth/register`, body)
  //     .post(`${baseURL.endpoint}/app/user/signup`, {

      .then((res) => {
        if (res.status === 201) {
          setRegFormData({
            fname: "",
            lname: "",
            mobile: "",
            email: "",
            password: "",
            // confirmPassword: ''
          });
        }
        navigate("/");
        // console.log("res", res);
      })
      .catch((error) => {
        // toastifyMsg();
        console.log("error", error.response.data.message);
        if (error.response.data.message === "User already registered") {
          toast.error(<p>{"User already registered"}</p>, {
            position: "top-center",
          });
        }
      });
  };
  const onKeyBtn = (e) => {
    if (e.key === "Enter") {
      SignUp();
    }
  };

  const moveLogin = () => {
    navigate("/");
  };
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
                          <span className='h1 fw-bold mb-0'>Register</span>
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
                            First Name
                          </label>
                          <input
                            name='fname'
                            type='text'
                            id='form2Example17'
                            className='form-control'
                            value={regFormData.fname}
                            placeholder='First Name'
                            onChange={(e) => {
                              setError({
                                ...error,
                                fname: "",
                              });
                              handleChange(e);
                            }}
                          />
                          {error.fname && <p>{error.fname}</p>}
                        </div>
                        <div className='form-outline mb-1'>
                          <label
                            className='form-label'
                            htmlFor='form2Example17'
                          >
                            Last Name
                          </label>
                          <input
                            id='form2Example17'
                            className='form-control'
                            type='text'
                            name='lname'
                            value={regFormData.lname}
                            placeholder='Last Name'
                            onChange={(e) => {
                              setError({
                                ...error,
                                lname: "",
                              });
                              handleChange(e);
                            }}
                          />
                          {error.lname && <p>{error.lname}</p>}
                        </div>
                        <div className='form-outline mb-1'>
                          <label
                            className='form-label'
                            htmlFor='form2Example17'
                          >
                            Mobile No.
                          </label>
                          <input
                            type='email'
                            id='form2Example17'
                            className='form-control'
                          />
                        </div>
                        <div className='form-outline mb-1'>
                          <label
                            className='form-label'
                            htmlFor='form2Example17'
                          >
                            Email address
                          </label>
                          <input
                            type='email'
                            name='email'
                            className='form-control'
                            value={regFormData.email}
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
                            value={regFormData.password}
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
                        <div className='pt-1 mb-4'>
                          <p
                          style={{backgroundColor:"#0c4c91",color:"white"}}
                            className='btn'
                            type='button'
                            onClick={SignUp}
                          >
                            Register
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
                            Already have an account?{" "}
                            <p
                              style={{ color: "#393f81", marginLeft: '10px' }}
                              onClick={() => moveLogin()}
                            >
                              Login here
                            </p>
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

export default Registration;
