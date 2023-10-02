import { useNavigate } from "react-router-dom";
import Registration from "./Registration";
import '../css/Navbar.css';
import AboutUs from "./AboutUs";
import Contact from "./Contact";

const Navbar = () => {
    const navigate = useNavigate();
    const Loginclick = () => {
        navigate("/")
    }
    const Registration = () => {
        navigate("/registration")
    }
    const Forgot = () => {
        navigate("/forgot")
    }
    const Home = () => {
        navigate("/home")
    }
    const Books = () => {
        navigate("/books")
    }
    const AboutUs = () => {
        navigate("/aboutus")
    }
    const Contact = () => {
        navigate("/contact")
    }
    const Profile = () => {
        navigate("/profile")
    }

    return (
        <>
            <div className="navbar">
                {/* <p onClick={Loginclick}>Login</p> */}
                <p onClick={Home}>Home</p>
                <p onClick={Books}>Books</p>
                <p onClick={AboutUs}>AboutUs</p>
                <p onClick={Contact}>Contact</p>
                <p onClick={Profile}>Profile</p>
                <p onClick={Forgot}>Forgot</p>
                <p onClick={Registration}>Registration</p>
            </div>
        </>
    )

}

export default Navbar;