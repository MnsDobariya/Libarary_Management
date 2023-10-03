import React from "react";
import image from '../Image/img4.jpg';
import '../css/Contactus.css';
import Footer from "./Footer";

const Contact = () => {
    return (
        <>
         <div className="mx-auto gradient-custom mt-5" style={{ maxWidth: '60%',height:"100%" }}>
        <div className="row pt-3 mx-3">
          <div className="col-md-3">
            <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px' }}>
              <i className="fas fa-shipping-fast text-white" style={{ fontSize: '3em' }}></i>
              <h3 className="text-white">Welcome</h3>
              <p className="white-text">You are 30 seconds away from completing your order!</p>
            </div>
            <div className="text-center">
              <button className="btn btn-white rounded back-button">Go back</button>
            </div>
          </div>
          <div className="col-md-9 justify-content-center">
            <div className="card card-custom pb-4">
              <div className="card-body mt-0 mx-5">
                <div className="text-center mb-3 pb-2 mt-3">
                  <h4 style={{ color: '#495057' }}>Contact Us</h4>
                </div>

                <form className="mb-0">
                  <div className="form-row ">
                    <div className="form-group col-md-6">
                      <label>First name</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Last name</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Email</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Comapany</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>City</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Zip</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>

                  <div className="float-right">
                    <button className="btn btn-primary rounded">Place order</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
            {/* <div className="container mt-5" style={{ display: "flex" }}>
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

            </div> */}
            <Footer/>
        </>
    )
}

export default Contact;