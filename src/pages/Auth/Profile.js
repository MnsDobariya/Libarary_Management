import React from "react";
import '../css/Userprofile.css';


const Profile = () => {
    return (
        <>
         <div class="container">
    <div class="row gutters">
    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
    <div class="card h-100">
        <div class="card-body">
            <div class="account-settings">
                <div class="user-profile">
                    <div class="user-avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
                    </div>
                    <h5 class="user-name">Yuki Hayashi</h5>
                    <h6 class="user-email">yuki@Maxwell.com</h6>
                </div>
                <div class="about">
                    <h5>About</h5>
                    <p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
    <div class="card h-100">
        <div class="card-body">
            <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="mb-2 text-primary">Personal Details</h6>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="fullName">Full Name</label>
                        <input type="text" class="form-control" id="fullName" placeholder="Enter full name" />
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="eMail">Email</label>
                        <input type="email" class="form-control" id="eMail" placeholder="Enter email ID" />
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="text" class="form-control" id="phone" placeholder="Enter phone number" />
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="website">Website URL</label>
                        <input type="url" class="form-control" id="website" placeholder="Website url" />
                    </div>
                </div>
            </div>
            <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="mt-3 mb-2 text-primary">Address</h6>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="Street">Street</label>
                        <input type="name" class="form-control" id="Street" placeholder="Enter Street" />
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="ciTy">City</label>
                        <input type="name" class="form-control" id="ciTy" placeholder="Enter City" />
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="sTate">State</label>
                        <input type="text" class="form-control" id="sTate" placeholder="Enter State" />
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="zIp">Zip Code</label>
                        <input type="text" class="form-control" id="zIp" placeholder="Zip Code" />
                    </div>
                </div>
            </div>
            <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="text-right">
                        <button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button>
                        <button type="button" id="submit" name="submit" class="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
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
        </>
    )
}

export default Profile;