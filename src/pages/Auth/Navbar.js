import { useNavigate } from "react-router-dom";
import Registration from "./Registration";
import '../css/Navbar.css';
import AboutUs from "./AboutUs";

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
    const Addbooks = () => {
        navigate("/addbooks")
    }
    const AboutUs = () => {
        navigate("/aboutus")
    }

    return (
        <>
            <div className="navbar">
                {/* <p onClick={Loginclick}>Login</p> */}
                <p onClick={Home}>Home</p>
                <p onClick={Addbooks}>Addbooks</p>
                <p onClick={AboutUs}>AboutUs</p>
                <p onClick={Forgot}>Forgot</p>
                <p onClick={Registration}>Registration</p>
            </div>
        </>
    )

}

export default Navbar;