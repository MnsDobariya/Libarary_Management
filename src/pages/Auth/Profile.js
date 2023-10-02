import React from "react";

const Profile = () => {
    return (
        <>
            <div className='container mt-5' style={{boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"}}>
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
            </div>
        </>
    )
}

export default Profile;