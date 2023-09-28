import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Forgot.css';



const Forgot = () => {
  const navigate = useNavigate();


  return (
    <>
      <div className="Forgot-form">
        <h1>Forgot</h1>
        <label for="newpassword">New password:</label>
        <input
          type="newpassword"
          name="newpassword"
          placeholder="Enter the New password"
        /><br></br><br></br>
        <label for="confirmpassword">Confirm password:</label>
        <input
          type="confirmpassword"
          name="confirmpassword"
          placeholder="Enter the Confirmpassword"
        /><br></br><br></br>
        <button
          onClick={() => navigate("/")}>
          Save
        </button><br></br><br></br>
        <button onClick={() => navigate("/")}>
          Cancle
        </button>
      </div>

    </>
  );
}

export default Forgot;
