import React from "react";
import image from '../Image/img4.jpg';

const Contact = () => {
    return (
        <>
            <div className="container mt-5" style={{ display: "flex" }}>
                <div className="col-md-7">
                    <form className="border boder-primary p-4">
                        <h4 className="text-center md-4">
                            Contact US
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
                                <label for="inputCompany">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    className="form-control"
                                    placeholder="Company"
                                />
                            </div>

                        </div>
                        <p className="btn btn-primary">Sumbit</p>
                    </form>
                </div>
                <div>
                    <img className="contact-img" src={image} alt="contact image" />
                </div>

            </div>
        </>
    )
}

export default Contact;