import React, { useEffect, useState } from "react";
import '../css/Userprofile.css';
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Profile = () => {

    const [userProfile, setUserProfile] = useState([]);
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [phone, setPhone] = useState();
    const [zipCode, setZipcode] = useState();
    const [zender, setZender] = useState();
    const [userId, setUserId] = useState();
    const [email, setEmail] = useState();
    const [profilePicture, setProfilePicture] = useState();

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const getProfileUser = () => {
        axios.get("http://localhost:3001/api/v1/users/me", { headers: { "Authorization": `Bearer ${token}` } })
            .then((res) => {
                setUserId(res?.data.id)
                setFname(res?.data.firstName);
                setLname(res?.data.lastName);
                setAddress(res?.data.address);
                setEmail(res?.data.email);
                setCity(res?.data.city);
                setState(res?.data.state);
                setCountry(res?.data.country);
                setPhone(res?.data.phone);
                setZender(res?.data.gender);
                setZipcode(res?.data.zipCode);
                setZipcode(res?.data.profilePicture);
            })
    };

    useEffect(() => {
        getProfileUser();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserProfile({
            ...userProfile,
            [name]: value,
        });
    };

    const [imagePreview, setImagePreview] = useState(null);
    const handleImageChange = (e) => {
        setUserProfile({
            ...userProfile,
            profilePicture: e.target.files[0],
        });

        const file = e.target.files[0];

        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setUserProfile({
                    ...userProfile,
                    profilePicture: file, // Set the image property to the File object directly
                });
                setImagePreview(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };
    const onClickUpdate = () => {

        const form_data = new FormData();

        form_data.append("firstName", fname)
        form_data.append("lastName", lname)
        form_data.append("address", address)
        form_data.append("city", city)
        form_data.append("state", state)
        form_data.append("country", country)
        form_data.append("phone", phone)
        form_data.append("zipCode", zipCode)
        form_data.append("gender", zender)
        form_data.append("profilePicture", profilePicture)

        axios.put(`http://localhost:3001/api/v1/users/me`, form_data,
            { headers: { "content-type": "multipart/form-data", "Authorization": `Bearer ${token}` } })
            .then((res) => {
                console.log("res", res);
                toast.success("Profile updated Successfully")
            })
            .catch((error) => {
                console.log("error-->", error)
                toast.error("Somthing went to wrong")
            })

    }

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
                                        <h5 className="user-name">{fname}</h5>
                                        <h6 className="user-email">{email}</h6>
                                    </div>
                                    <div className="about">
                                        <label for='imageUpload' class='button'>
                                            <span class=''>Upload</span>
                                        </label>
                                        <input
                                            type='file'
                                            id='imageUpload'
                                            style={{ display: 'none' }}
                                            onChange={(e) => {
                                                handleImageChange(e);
                                            }}
                                        />
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
                                                placeholder="Enter The First Name"
                                                value={fname}
                                                onChange={(e) => setFname(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-1">
                                            <label for="lname">Last Name</label>
                                            <input
                                                type="text"
                                                name="lname"
                                                className="form-control"
                                                placeholder="Enter The Last Name"
                                                value={lname}
                                                onChange={(e) => setLname(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-1">
                                            <label for="email">Email</label>
                                            <input
                                                type="text"
                                                name="email"
                                                disabled
                                                className="form-control"
                                                placeholder="Enter The Last Name"
                                                value={email}
                                            // onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-1">
                                            <label for="address">Address</label>
                                            <input
                                                type="text"
                                                name="address"
                                                className="form-control"
                                                placeholder="Enter The Address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-1">
                                            <label for="city">City</label>
                                            <input
                                                type="text"
                                                name="city"
                                                className="form-control"
                                                placeholder="Enter The City"
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-1">
                                            <label for="state">State</label>
                                            <input
                                                type="text"
                                                name="state"
                                                className="form-control"
                                                placeholder="Enter The State"
                                                value={state}
                                                onChange={(e) => setState(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-1">
                                            <label for="country">Country</label>
                                            <input
                                                type="text"
                                                name="country"
                                                className="form-control"
                                                placeholder="Enter The Country"
                                                value={country}
                                                onChange={(e) => setCountry(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-1">
                                            <label for="phone">Phone</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control"
                                                placeholder="Enter The Phone Number"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-1">
                                            <label for="zIp">Zip Code</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Zip Code"
                                                value={zipCode}
                                                onChange={(e) => setZipcode(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                        <div className="form-group mb-1">
                                            <label for="gender" style={{ display: "flex" }}>Gender</label>
                                            <input
                                                type="radio"
                                                name="male"
                                                checked={zender === 'm'}
                                                onChange={() => setZender('m')}
                                            />
                                            Male
                                            <input
                                                type="radio"
                                                name="female"
                                                checked={zender === 'f'}
                                                style={{ marginLeft: "10px" }}
                                                onChange={() => setZender("f")}
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
                                        <button type="button" name="submit" className="btn btn-primary"
                                            onClick={() => onClickUpdate()}
                                        >Update</button>
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
        </>
    )
}

export default Profile;