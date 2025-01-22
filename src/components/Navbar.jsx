import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const Navbar = (props) => {
    return (
      <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link" to="/About">{props.aboutText}</Link> */}
                  <Link className="nav-link" to="/About">About Us</Link>
                </li>
                
              </ul>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }


  // Navbar.propTypes = {title: PropTypes.string.isRequired,
  //                     aboutText:PropTypes.string.isRequired
  //                   }

  // Navbar.defaultProps = {title: 'Set title here',
  //                        aboutText: 'About text here'
  //                       }
  
export default Navbar
