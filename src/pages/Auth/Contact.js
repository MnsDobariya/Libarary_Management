import React from "react";
import image from '../Image/img4.jpg';
import '../css/Contactus.css';
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <section class="contact_us">
        <div class="container">
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="contact_inner">
                <div class="row">
                  <div class="col-md-10">
                    <div class="contact_form_inner">
                      <div class="contact_field">
                        <h3>Contatc Us</h3>
                        <input type="text" class="form-control form-group" placeholder="FirstName" style={{ marginTop: "15%" }} />
                        <input type="text" class="form-control form-group" placeholder="LastName" />
                        <input type="text" class="form-control form-group" placeholder="Email" />
                        <input type="text" class="form-control form-group" placeholder="Company" />

                        <button
                          className="btn "
                          style={{backgroundColor:"#0c4c91",color:"white",marginRight: '10px', cursor: 'pointer', padding: '10px 10px' }}
                          onClick={() => {

                          }}
                        >Add Book</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="right_conatct_social_icon d-flex align-items-end">
                      {/* <div class="socil_item_inner d-flex">
                        <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div class="contact_info_sec">
                  <h4>Contact Info</h4>
                  <div class="d-flex info_single align-items-center">
                    <i class="fas fa-headset"></i>
                    <span>+91 90161 95861</span>
                  </div>
                  <div class="d-flex info_single align-items-center">
                    <i class="fas fa-envelope-open-text"></i>
                    <span>LibraryManagement@gmail.com</span>
                  </div>
                  <div class="d-flex info_single align-items-center">
                    <i class="fas fa-map-marked-alt"></i>
                    <span>Library Management</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




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
    </>
  )
}

export default Contact;