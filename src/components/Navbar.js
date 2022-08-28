import React from "react";
import PropTypes from "prop-types";
import { Link,useLocation } from "react-router-dom";


export default function Navbar(props) {
  const capitalize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
}

  const location = useLocation();
  // console.log(location.pathname);
    
  return (
    <>
      {/* <nav className={`navbar navbar-expand-lg navbar-${props.darkMode?'light':'dark'} bg-${props.darkMode?'dark':'light'}`}> */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode==='light'?'light':'dark'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
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
            <ul className="nav nav-pills mx-auto mb-2 mb-lg-0">
            {/* <ul className="nav nav-pills nav-justified"> */}
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/'?'active':''}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  My List
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/about'?'active':''}`} to="about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <div className="dropdown px-md-2">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              BG Color
              </button>
              <ul className="dropdown-menu">
                <li><strong className="dropdown-text" >Light Themes</strong></li>
                <li><a className="dropdown-item" onClick={() =>{props.toggleMode('#F7ECDE')}}>Antique</a></li>
                <li><a className="dropdown-item" onClick={() =>{props.toggleMode('#CEE5D0')}}>Teal</a></li>
                <li><strong className="dropdown-text" >Dark Themes</strong></li>
                <li><a className="dropdown-item" onClick={() =>{props.toggleMode('#000000')}}>Blackout</a></li>
                <li><a className="dropdown-item" onClick={() =>{props.toggleMode('#3E065F')}}>Russian Violet</a></li>
              </ul>
          </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={() =>{props.toggleMode(null)}}
              />
              {/* <label className={`form-check-label text-${props.darkmode?'light':'dark'}`}  htmlFor="flexSwitchCheckDefault"> */}
              <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}  htmlFor="flexSwitchCheckDefault">
                   <strong> {capitalize(props.mode)} mode </strong> 
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "No Title",
  aboutText: "About",
  theme: "dark",
};
