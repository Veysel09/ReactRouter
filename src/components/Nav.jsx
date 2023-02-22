Skip to content
clarusway
/
clarusway-full-stack-tr-12-22
Private
Code
Issues
Pull requests
Actions
Projects
More
clarusway-full-stack-tr-12-22/react/class-notes/rc11-12_router-example/rc11-12_router-example-inClass/src/components/Nav.jsx /
@profnoah
profnoah navlink
 History
 1 contributor
78 lines (74 sloc)  2.15 KB
import logo from "../img/logo.png";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
                to="/"
                className="nav-link active"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
                to="/people"
                className="nav-link"
                aria-current="page"
              >
                People
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
                to="/paths"
                className="nav-link"
                aria-current="page"
              >
                Paths
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
                to="/contact"
                className="nav-link"
                aria-current="page"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
clarusway-full-stack-tr-12-22/Nav.jsx at main · clarusway/clarusway-full-stack-tr-12-22