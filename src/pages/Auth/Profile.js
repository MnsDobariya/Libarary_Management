import React from "react";
import '../css/Userprofile.css';
import Footer from "./Footer";


const Profile = () => {
    return (
        <>
            <p style={{ color: "#0262AA", textAlign: "center", fontSize: "9vh" }}>Profile</p>
            <div className="container">
                <div className="row gutters">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body border">
                                <div className="account-settings">
                                    <div className="user-profile">
                                        <div className="user-avatar">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
                                        </div>
                                        <h5 className="user-name">Yuki Hayashi</h5>
                                        <h6 className="user-email">yuki@Maxwell.com</h6>
                                    </div>
                                    <div className="about">
                                        <h5>About</h5>
                                        <p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 border">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-2 text-primary">Personal Details</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                        <div className="form-group mb-1">
                                            <label for="fname">First Name</label>
                                            <input
                                                type="text"
                                                name="fname"
                                                className="form-control"
                                                placeholder="Enter The First Name" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-1">
                                            <label for="lname">Last Name</label>
                                            <input
                                                type="text"
                                                name="lname"
                                                className="form-control"
                                                placeholder="Enter The Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-1">
                                            <label for="address">Address</label>
                                            <input
                                                type="text"
                                                name="address"
                                                className="form-control"
                                                placeholder="Enter The Address" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-1">
                                            <label for="city">City</label>
                                            <input
                                                type="text"
                                                name="city"
                                                className="form-control"
                                                placeholder="Enter The City" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-1">
                                            <label for="state">State</label>
                                            <input
                                                type="text"
                                                name="state"
                                                className="form-control"
                                                placeholder="Enter The State" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-1">
                                            <label for="country">Country</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter The Country" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-1">
                                            <label for="phone">Phone</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control"
                                                placeholder="Enter The Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-1">
                                            <label for="zIp">Zip Code</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Zip Code" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                        <div className="form-group mb-1">
                                            <label for="gender" style={{ display: "flex" }}>Gender</label>
                                            <input
                                                type="radio"
                                                name="male"
                                            />
                                            Male
                                            <input
                                                type="radio"
                                                name="female"
                                                style={{ marginLeft: "10px" }}
                                            />
                                            Female
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row gutters pb-3">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="text-center">
                                        <button type="button" name="submit" className="btn btn-secondary m-3">Cancel</button>
                                        <button type="button" name="submit" className="btn btn-primary">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
            {/* <div className='container mt-5' style={{boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                <div className='row justify-content-center'>
                    <div className='col-md-8' style={{marginLeft:"40%"}}>
                        <form className="p-4">
                            <h4 className="text-center">
                                Profile
                            </h4>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputFirst">First Name</label>
                                    <input
                                        type="text"
                                        name="fname"
                                        className="form-control"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputLast">Last Name</label>
                                    <input
                                        type="text"
                                        name="lname"
                                        className="form-control"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputEmail">Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputPassword">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputRollno">Roll No</label>
                                    <input
                                        type="text"
                                        name="rollno"
                                        className="form-control"
                                        placeholder="Roll No"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputStudent_id">Student Id</label>
                                    <input
                                        type="text"
                                        name="student_id"
                                        className="form-control"
                                        placeholder="Student Id"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputBirthday">Birthday</label>
                                    <input
                                        type="text"
                                        name="birthday"
                                        className="form-control"
                                        placeholder="Birthday"
                                    />
                                </div>
                              
                                <div className="form-group col-md-6">
                                    <label for="inputGender" style={{display:"flex"}}>Gender</label>
                                    <input
                                        type="radio"
                                        name="male"
                                    />
                                    Male
                                    <input
                                        type="radio"
                                        name="female"
                                        style={{marginLeft:"10px"}}
                                    />
                                    Female
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
            <Footer />
        </>
    )
}

export default Profile;