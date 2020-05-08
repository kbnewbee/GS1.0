
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from '../images/logo1.svg'

import {GoSearch} from 'react-icons/go'
import {FaAlignRight} from 'react-icons/fa'

import React, { Component } from 'react'

export default class Navbar extends Component {
    state={
        isOpen: false
    };

    handleToggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <div className ="wrapper">
                <div className ="multi-color-border"></div>
                   
                <div className = "top-nav">
                    <div className="left">    
                        <div className="logo">
                            <Link to="/"><img src={logo}  alt="Gigsutra" /></Link>
                        </div>

                      
                        
                        <div className="search-bar">
                            <GoSearch className="se-icon" />
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
                        <li><Link to="/organisers">Organizers</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        
                        {/* <li><Link to="/contact">Contact Us</Link></li> */}
                    </ul>
                </div>
            </div>
        )
    }
}




