import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import '../css/Registration.css';
import image from '../Image/img5.jpg';

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
    fname: '',
    lname: '',
    mobile: '',
    email: '',
    // birthday: '',
    password: ''
    // confirmPassword: ''
  });

  const [error, setError] = useState({
    fname: '',
    lname: '',
    mobile: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegFormData({
      ...regFormData,
      [e.target.name]: e.target.value
    })
  }

  const SignUp = () => {
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
      error.mobile = "valid mobile"
    }

    const emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regFormData.email) {
      error.email = "Please email required";
    } else if (!emailRegx.test(regFormData.email)) {
      error.email = "valid email"
    }

    const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,10})/;
    // console.log(password,"password")
    if (!regFormData.password) {
      error.password = "Please password required";
    } else if (!passwordRegx.test(regFormData.password)) {
      // console.log("66666")
      error.password = "Invalid password"
    }

    if (error.fname || error.lname || error.mobile || error.email || error.password) {
      setError(error);
      return;
    }

    const body = {
      firstName: regFormData.fname,
      lastName: regFormData.lname,
      email: regFormData.email,
      phone: regFormData.mobile,
      password: regFormData.password
    }
    // console.log("hello");
    axios.post("http://localhost:3001/api/v1/auth/register", body)
      .then((res) => {
        if (res.status === 201) {
          setRegFormData({
            fname: '',
            lname: '',
            mobile: '',
            email: '',
            password: '',
            // confirmPassword: ''

          })
        }
        navigate("/")
        // console.log("res", res);
      }).catch((error) => {
        // toastifyMsg();
        console.log("error", error.response.data.message);
        if (error.response.data.message === "User already registered") {
          toast.error(<p>{"User already registered"}</p>, {
            position: "top-center",
          });
        }

      })
  }
  const onKeyBtn = (e) => {
    if (e.key === "Enter") {
      SignUp();
    }
  }

  return (
    <>
    
      <div className='container mt-5 '>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <form className='border border-primary p-4 '>
              <h4 className='text-center mb-4'>
                Registration
              </h4>
              <div className="form-row">
                <div className="form-group col-md-6 mb-0">
                  <label for="inputFirst">First Name</label>
                  <input
                    type="text"
                    name="fname"
                    className="form-control"
                    value={regFormData.fname}
                    placeholder="First Name"
                    onChange={(e) => {
                      setError({
                        ...error,
                        fname: ''
                      })
                      handleChange(e)
                    }}
                  />
                  {
                    error.fname && <p>{error.fname}</p>
                  }
                </div>

                <div className="form-group col-md-6 mb-0">
                  <label for="inputLast">Last Name</label>
                  <input
                    type="text"
                    name="lname"
                    className="form-control"
                    value={regFormData.lname}
                    placeholder="Last Name"
                    onChange={(e) => {
                      setError({
                        ...error,
                        lname: ''
                      })
                      handleChange(e)
                    }}
                  />
                  {
                    error.lname && <p>{error.lname}</p>
                  }
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-md-6 mb-0 mb-0'>
                  <label for='inputEmail4'>Email</label>
                  <input
                    type='email'
                    name="email"
                    className='form-control'
                    value={regFormData.email}
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
                <div className='form-group col-md-6 mb-0'>
                  <label for='inputPassword4'>Password</label>
                  <div className='input-group'>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      className='form-control'
                      value={regFormData.password}
                      placeholder='Password'
                      onChange={(e) => {
                        setError({
                          ...error,
                          password: ''
                        })
                        handleChange(e)
                      }}
                    />
                    <div className='input-group-append'>
                      <span
                        className='input-group-text'
                        onClick={togglePasswordVisibility}
                        style={{ cursor: "pointer" }}
                      >
                        {passwordVisible ? (
                          <FontAwesomeIcon icon={faEye} /> // Eye icon for showing password
                        ) : (
                          <FontAwesomeIcon icon={faEyeSlash} /> // Eye slash icon for hiding password
                        )}
                      </span>
                    </div>
                  </div>
                  {
                    error.password && <p>{error.password}</p>
                  }
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6 mb-0">
                  <label for="inputMobile">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    className="form-control"
                    value={regFormData.mobile}
                    placeholder="Mobile"
                    onChange={(e) => {
                      setError({
                        ...error,
                        mobile: ''
                      })
                      handleChange(e)
                    }}
                    onKeyPress={(e) => onKeyBtn(e)}
                  />
                  {
                    error.mobile && <p>{error.mobile}</p>
                  }
                </div>
              </div>


              <div className='form-group'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='gridCheck'
                  />
                  <label className='form-check-label' for='gridCheck'>
                    Check me out
                  </label>
                </div>
              </div>

              <p onClick={SignUp} className='btn btn-primary'>SingUp</p>
              <p className='mt-3' style={{ color: "black" }}>
                Already have an account?<p onClick={() => navigate("/")} style={{ color: "blue" }}><u>Login</u></p>
              </p>
            </form>
          </div>
        </div>
        {/* <div style={{marginLeft:"10%"}}>
          <img className="registration-img" src={image} alt="registration"/>
        </div> */}
      </div>
    </>
  );
};

export default Registration;
