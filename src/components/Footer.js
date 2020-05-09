import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-white.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <div className="footer-logo">
            <Link to="/">
              <img src={logo} alt="Gigsutra" />
            </Link>
          </div>

          <p>
            Gigsutra is gig discovery platform for fans out there. We connect
            artists and organizers with our unique customer relations team. For
            potential event organizers out there, we provide a one on one
            service to take care of all your event related needs.
          </p>
          <div className="contact">
            <span>
              <i class="fa fa-phone"></i> &nbsp; (+91) 79970 23599
            </span>
            <span>
              <i class="fa fa-envelope"></i>&nbsp; info@gigsutra.com
            </span>
          </div>
          <div className="socials">
            <h4>Follow us </h4>
            <Link to="/">
              <i class="fa fa-facebook"></i>{" "}
            </Link>
            <Link to="/">
              <i class="fa fa-instagram"></i>{" "}
            </Link>
            <Link to="/">
              <i class="fa fa-twitter"></i>{" "}
            </Link>
            <Link to="/">
              <i class="fa fa-youtube-play"></i>{" "}
            </Link>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <li>
              <Link to="/">Events</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/">FAQS</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <br />
          <form>
            <input
              type="email"
              name="email"
              class="text-input contact-input"
              placeholder="Your email address"
            ></input>
            <textarea
              name="message"
              class="text-input contact-input"
              placeholder="Your message"
            ></textarea>
            <br />
            <button type="submit" class="btn btn-big contact-btn">
              <i class="fa fa-envelope"></i>
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; Copyright 2020 | Gigsutra Pvt. Ltd. | All Rights Reserved
      </div>
    </div>
  );
}
