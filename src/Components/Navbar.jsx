import logo from "../Images/logo.svg"
import "./Navbar.css"
export const Navbar = () => {
    return (
        <nav className="nav">
            <div className="leftnav">
                <a href="/" className="logoa">

                <img className="logo" src={logo} alt="" />
                </a>

            </div>
            <div className="rightnav">
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
                <a href="#about">About Us</a>
            </div>
        </nav>
    )
}