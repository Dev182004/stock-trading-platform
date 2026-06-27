import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../Images/logo.svg";
import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export default function Navbar() {

const navigate = useNavigate();

const { isAuthenticated, logout, user } = useAuth();


const handleLogout = async () => {
  await logout();
  toast.success("Logged out successfully.");
  navigate("/");
};

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img style={{ width: "25%" }} src={logo}></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav  mb-lg-0">
             {!isAuthenticated ? (
  <>
    <li className="nav-item">
      <Link className="nav-link active" to="/signup">
        Signup
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link active" to="/login">
        Login
      </Link>
    </li>
  </>
) : (
  <>
    <a className="nav-link active" href="http://localhost:5174">
                    Dashboard
    </a>

    <li className="nav-item">
      <button
        className="btn btn-link nav-link active"
        onClick={handleLogout}
      >
        Logout
      </button>
    </li>
  </>
)}

              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>

               {/* <li class="nav-item">
                <a class="nav-link active" href="#">
                  <FontAwesomeIcon icon={faBars} />
                </a>
              </li> */}

            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
