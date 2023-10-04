// import { useNavigate } from "react-router-dom";
// import Registration from "./Registration";
import '../css/Navbar.css';
// import AboutUs from "./AboutUs";
// import Contact from "./Contact";

// const Navbar = () => {
//     const navigate = useNavigate();
//     const Loginclick = () => {
//         navigate("/")
//     }
//     const Registration = () => {
//         navigate("/registration")
//     }
//     const Forgot = () => {
//         navigate("/forgot")
//     }
//     const Home = () => {
//         navigate("/home")
//     }
//     const Books = () => {
//         navigate("/books")
//     }
//     const AboutUs = () => {
//         navigate("/aboutus")
//     }
//     const Contact = () => {
//         navigate("/contact")
//     }
//     const Profile = () => {
//         navigate("/profile")
//     }

//     return (
//         <>
//             <div className="navbar">
//                 {/* <p onClick={Loginclick}>Login</p> */}
//                 <p onClick={Home}>Home</p>
//                 <p onClick={Books}>Books</p>
//                 <p onClick={AboutUs}>AboutUs</p>
//                 <p onClick={Contact}>Contact</p>
//                 <p onClick={Profile}>Profile</p>
//                 <p onClick={Forgot}>Forgot</p>
//                 <p onClick={Registration}>Registration</p>
//             </div>
//         </>
//     )

// }

// export default Navbar;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbars = () => {
    const [showNavColorThird, setShowNavColorThird] = useState(false);

    const navigate = useNavigate();

    const getToken = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/")
    }

    return (
        <nav
            className='navbar navbar-expand-lg'
            style={{ backgroundColor: "#0c4c91" }}
        >
            <div className='container-fluid'>
                {/* <a className='navbar-brand' href='#'>
          Navbar
        </a> */}
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarColor02'
                    aria-controls='navbarColor02'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onclick='toggleNavColorThird()'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarColor02'>
                    <ul className='navbar-nav me-auto'>
                        <li className='nav-item' >
                            <Link className='nav-link' to='/home' style={{ color: "white" }}>
                                Home
                            </Link>
                        </li>
                        {role === "admin" && 
                        <li className='nav-item'>
                        <Link className='nav-link' to='/books' style={{ color: "white" }}>
                             Books
                        </Link>
                    </li>}
                        <li className='nav-item'>
                            <Link className='nav-link' to='/aboutus' style={{ color: "white" }}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/contact' style={{ color: "white" }}>
                                Contact Us
                            </Link>
                        </li>
                        {getToken ? (
                            <>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/profile' style={{ color: "white" }}>
                                        Profile
                                    </Link>
                                </li></>
                        ) : (
                            <>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/registration' style={{ color: "white" }}>
                                        Register
                                    </Link>
                                </li>

                            </>
                        )}
                    </ul>

                    {
                        getToken &&
                        <ul className='navbar-nav me-auto logout-right'>
                            <li className='nav-item' onClick={logout}>
                                <Link className='nav-link' to='/' style={{ color: "white" }}>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    }


                </div>
            </div>
        </nav>
    );
};

export default Navbars;
