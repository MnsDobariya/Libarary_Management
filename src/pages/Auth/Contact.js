import React, { useState } from "react";
import image from '../Image/img4.jpg';
import '../css/Contactus.css';
import Footer from "./Footer";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [contactUs, setContactUs] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',

  })

  const [error, setError] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setContactUs({
      ...contactUs,
      [e.target.name]: e.target.value,
    });
  };

  const Submit = () => {
    const error = {};

    if (!contactUs.name) {
      error.name = "Please fname required";
    }

    const emailRegx =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!contactUs.email) {
      error.email = "Please email required";
    } else if (!emailRegx.test(contactUs.email)) {
      error.email = "valid email";
    }

    const phoneRegx = /^\d+$/;
    if (!contactUs.phone) {
      error.phone = "Please mobile required";
    } else if (!phoneRegx.test(contactUs.phone)) {
      error.phone = "valid mobile";
    }

    if (!contactUs.subject) {
      error.subject = "Please fname required";
    }

    if (!contactUs.message) {
      error.message = "Please fname required";
    }




    if (
      error.name ||
      error.email ||
      error.phone ||
      error.subject ||
      error.message
    ) {
      setError(error);
      return; // Issue 1: You are returning here, which prevents the API call from executing.
    }

    const body = {
      name: contactUs.name,
      email: contactUs.email,
      phone: contactUs.phone,
      subject: contactUs.subject,
      message: contactUs.message,

    }

    axios.post("http://localhost:3001/api/v1/contactUs/create", body)
      .then((res) => {
        // console.log("response",res);
        // setBookData(res?.data)
        if (res.status === 201) {
          setContactUs({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          })
        }
        toast('ContactUs Successfully');

      })
      

  }

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
                        <h3>Contact Us</h3>
                        {/* <input
                          type="text"
                          class="form-control form-group"
                          placeholder="FirstName" style={{ marginTop: "15%" }}
                        /> */}
                        <input
                          type="text"
                          name="name"
                          class="form-control "
                          placeholder="Name"
                          value={contactUs?.name}
                          onChange={(e) => {
                            setError({
                              ...error,
                              name: "",
                            });
                            handleChange(e);
                          }}
                        />
                        {error.name && <p>{error.name}</p>}
                        <input
                          type="text"
                          name="email"
                          class="form-control "
                          placeholder="Email"
                          value={contactUs?.email}
                          onChange={(e) => {
                            setError({
                              ...error,
                              email: "",
                            });
                            handleChange(e);
                          }}
                        />
                        {error.email && <p>{error.email}</p>}
                        <input
                          type="text"
                          name="phone"
                          class="form-control "
                          placeholder="Phone"
                          value={contactUs?.phone}
                          onChange={(e) => {
                            setError({
                              ...error,
                              phone: "",
                            });
                            handleChange(e);
                          }}
                        />
                        {error.phone && <p>{error.phone}</p>}
                        <input
                          type="text"
                          name="subject"
                          class="form-control "
                          placeholder="Subject"
                          value={contactUs?.subject}
                          onChange={(e) => {
                            setError({
                              ...error,
                              subject: "",
                            });
                            handleChange(e);
                          }}
                        />
                        {error.subject && <p>{error.subject}</p>}
                        <input
                          type="text"
                          name="message"
                          class="form-control "
                          placeholder="Message"
                          value={contactUs?.message}
                          onChange={(e) => {
                            setError({
                              ...error,
                              message: "",
                            });
                            handleChange(e);
                          }}
                        />
                        {error.message && <p>{error.message}</p>}
                        <button
                          className="btn "
                          style={{ backgroundColor: "#0c4c91", color: "white",marginTop:'5%', marginRight: '10px', cursor: 'pointer', padding: '10px 10px' }}
                          onClick={Submit}
                        >Sumbit</button>
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
                            <div className=" col-md-6">
                                <label for="inputFirst">First Name</label>
                                <input
                                    type="text"
                                    name="fname"
                                    className="form-control"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className=" col-md-6">
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