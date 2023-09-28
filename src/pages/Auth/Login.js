import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [isLogin, setIsLogin] = useState(true); // Initially, show the login form

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and register forms
  };

  return (
    <>
      {/* <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
        <form className="border p-4">
        <h4 className="text-center mb-4">Register</h4>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label for='inputEmail4'>Email</label>
              <input
                type='email'
                className='form-control'
                id='inputEmail4'
                placeholder='Email'
              />
            </div>
            <div className='form-group col-md-6'>
              <label for='inputPassword4'>Password</label>
              <div className='input-group'>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className='form-control'
                  id='inputPassword4'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className='input-group-append'>
                  <span
                    className='input-group-text'
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  >
                    {passwordVisible ? (
                     <FontAwesomeIcon icon={faEyeSlash} /> // Eye slash icon for hiding password
                    ) : (
                      <FontAwesomeIcon icon={faEye} /> // Eye icon for showing password
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group col-md-4'>
              <label for='inputCity'>City</label>
              <input type='text' className='form-control' id='inputCity' />
            </div>
            <div className='form-group col-md-4'>
              <label for='inputState'>State</label>
              <select id='inputState' className='form-control'>
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className='form-group col-md-4'>
              <label for='inputZip'>Zip</label>
              <input type='text' className='form-control' id='inputZip' />
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
          <button type='submit' className='btn btn-primary'>
            Sign in
          </button>
        </form>
      </div>
      </div>
      </div> */}

      <div className='container mt-5 ml-0' >
        {/* <div className='row justify-content-center'> */}
        <div className='col-md-8'>
          <form className='border border-primary p-4'>
            <h4 className='text-center mb-4'>
              Login
              {/* {isLogin ? "Login" : "Register"}{" "} */}
              {/* Display login or register based on the state */}
            </h4>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label for='inputEmail4'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail4'
                  placeholder='Email'
                />
              </div>
              <div className='form-group col-md-6'>
                <label for='inputPassword'>Password</label>
                <div className='input-group'>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className='form-control'
                    id='inputPassword'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className='input-group-append'>
                    <span
                      className='input-group-text'
                      onClick={togglePasswordVisibility}
                      style={{ cursor: "pointer" }}
                    >
                      {passwordVisible ? (
                        <FontAwesomeIcon icon={faEyeSlash} /> // Eye slash icon for hiding password
                      ) : (
                        <FontAwesomeIcon icon={faEye} /> // Eye icon for showing password
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button type='submit' className='btn btn-primary'>
              SignIn
              {/* {isLogin ? "Sign in" : "Sign up"}{" "} */}
              {/* Display sign in or sign up based on the state */}
            </button>
            <p className='mt-3'>
              Don't have an account?
              {/* {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "} */}
              <span
                onClick={toggleForm}
                style={{ cursor: "pointer", color: "blue" }}
              >
                Register
                {/* {isLogin ? "Register" : "Login"}{" "} */}
                {/* Toggle between login and register text */}
              </span>
            </p>
          </form>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Login;
