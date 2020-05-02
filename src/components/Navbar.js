import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from '../images/logo1.svg'

import {GoLocation} from 'react-icons/go'
// import {FaAlignRight} from 'react-icons/fa'

export default class Navbar extends Component {
    render() {
        return (
            <div className ="wrapper">
                <div className ="multi-color-border"></div>

                <div className = "top-nav">
                    <div className="left">
                        
                        {/* <GoLocation className="loc-icon"/> */}
                        <div className="logo">
                            <Link to="/"><img src={logo}  alt="Gigsutra" /></Link>
                        </div>

                        <div className="search-bar">
                            <input type="text" placeholder="Search for Events" />
                        </div>
                        
                    </div>

                    

                    <div className="right">
                        <ul>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/login">Sign Up</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="bottom-nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/organisers">Organisers</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
