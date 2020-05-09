import { FaBars, FaAlignRight } from "react-icons/fa";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MoNavbar.css";
import Logo from "../images/logo1.svg";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <>
        <div className="multi-color-border"></div>
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <img src={Logo} alt="Gigsutra" />

              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToggle}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </div>

            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/organisers">Organizers</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <span>
                <li>
                  <Link to="/login">Sign Up</Link>
                </li>
              </span>
            </ul>
          </div>
          <div className="last-border"></div>
        </nav>
      </>
    );
  }
}
