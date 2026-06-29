import { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const location = useLocation();

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const websiteUrl =
    import.meta.env.VITE_WEBSITE_URL || "http://localhost:5173";

  return (
    <div className="menu-container">
      <img src={logo} style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              <p
                className={
                  location.pathname === "/" ? activeMenuClass : menuClass
                }
              >
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders">
              <p
                className={
                  location.pathname === "/orders" ? activeMenuClass : menuClass
                }
              >
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings">
              <p
                className={
                  location.pathname === "/holdings"
                    ? activeMenuClass
                    : menuClass
                }
              >
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions">
              <p
                className={
                  location.pathname === "/positions"
                    ? activeMenuClass
                    : menuClass
                }
              >
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds">
              <p
                className={
                  location.pathname === "/funds" ? activeMenuClass : menuClass
                }
              >
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps">
              <p
                className={
                  location.pathname === "/apps" ? activeMenuClass : menuClass
                }
              >
                Apps
              </p>
            </Link>
          </li>

          <li>
            <a style={{ textDecoration: "none" }} href={websiteUrl}>
              <p
                className="menu"
                style={{
                  color: "#df514c",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                ← Website
              </p>
            </a>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
