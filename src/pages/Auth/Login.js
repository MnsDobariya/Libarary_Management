import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import '../css/Login.css';
import image from '../Image/img2.jpg';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [lgnFormData, setLgnFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    // console.log("lgnFormData", e.target.value);
    setLgnFormData({
      ...lgnFormData,
      [e.target.name]: e.target.value

    })
  }




  const navigate = useNavigate();

  const SignIn = () => {

    const error = {};

    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!lgnFormData.email) {
      error.email = "Please Email Required"
    } else if (!emailRegex.test(lgnFormData.email)) {
      error.email = "Invalid Email"
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,10})/;
    if (!lgnFormData.password) {
      error.password = "Please Password Required"
    } else if (!passwordRegex.test(lgnFormData.password)) {
      error.password = "Invalid Password"
    }

    if (error.email || error.password) {
      setError(error)
      return;
    }


    const body = {
      email: lgnFormData.email,
      password: lgnFormData.password
    }

    axios.post("http://localhost:3001/api/v1/auth/login", body)
      .then((res) => {
        // console.log("res",res);
        if (res.status === 200) {
          setLgnFormData({
            email: '',
            password: '',
          })
          localStorage.setItem("token", res.data.token.access.token)
          localStorage.setItem("userName", res.data.user.firstName)
          navigate('/home')
        }
      }).catch((error) => {
        if (error.response.data.message === "Incorrect email or password") {
          toast.error(<p>{"Incorrect email or password..!"}</p>, {
            position: "top-center",
          });
        }
      })
  }

  const onKeyBtn = (e) => {
    if (e.key === "Enter")
      SignIn();
  }

  return (
    <>

      <div className='container mt-5 ml-4' style={{ display: "flex" }}>
        {/* <div className='row justify-content-center'> */}
        <div className='col-md-5'>
          <form className='border border-primary p-4'>
            <h4 className='text-center mb-4'>
              Login
            </h4>
            <div className='form-row'>
              <div className='form-group col-md-8 mb-0'>
                <label for="inputEmail">Email</label>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  value={lgnFormData.email}
                  placeholder='Email'
                  onChange={(e) => {
                    setError({
                      ...error,
                      email: ''
                    })
                    handleChange(e)
                  }}
                />
                {
                  error.email && <p>{error.email}</p>
                }
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-8'>
                <label for="inputPassword">Password</label>
                <div className='input-group'>

                  <input
                    type={passwordVisible ? "text" : "password"}
                    name='password'
                    className='form-control'
                    value={lgnFormData.password}
                    placeholder='Password'
                    onChange={(e) => {
                      setError({
                        ...error,
                        Password: ''
                      })
                      handleChange(e)
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
                        <FontAwesomeIcon icon={faEye} />// Eye slash icon for showinh password
                      ) : (
                        <FontAwesomeIcon icon={faEyeSlash} /> // Eye icon for hide password
                      )}
                    </span>
                  </div>
                </div>
                {
                  error.password && <p>{error.password}</p>
                }
              </div>
            </div>
            <p className="button" style={{ verticalAlign: "middle" }}><span className="sign-in-btn" onClick={SignIn}>
              Sign In</span>
            </p>
            Don't have an account? <p onClick={() => navigate("/registration")}><u>Registration</u></p>
          </form>
        </div>
        {/* </div> */}
        <div style={{ width: "10%" }}>
          <img className="login-img" src={image} alt="contact image" />
        </div>
      </div>
    </>
  );
};

export default Login;