import React, { Component } from 'react'
import {IoIosPower} from 'react-icons/io'
import {FiAperture,FiPlayCircle,FiLoader,FiSettings} from 'react-icons/fi'
import {IconContext} from 'react-icons'

export default class About extends Component {
    render() {
        return (
            <div className="container-about">
                <div className="card-about">
                    <h2>About us</h2>
                    <div className = "bar"></div>
                    <div className="sub">Gig discovery like never before !</div>
                    <p>We at Gigsutra, pride ourselves on our impeccable ability to connect artists and organizers. 
                        This comes with our unique customer relations team who are at your beck and call 24/7/365.
                        <br/><br/>For potential event organizers out there, we provide a one on one service to take care of all your event related needs. 
                        From finding artists to complete event handling we give the decision making in your hands and just focus on providing quality service.
                    </p>
                </div>

                <div className="card-artist">
                    <h2>Artists</h2>
                    <div className = "bar"></div>
                    <div className="sub">Soon to launch our Artist Connect</div>
                    <p>Using our Artist connect, Artists will be able to connect with peers and test their content online. And the great news 
                        is it's free.</p>
                </div>

                <div className="card-solve">
                    <h2>What do we Solve ?</h2>
                    <div className = "bar"></div>

                    <div className="solve1">

                        <div className="icon-div">
                            <IconContext.Provider value={{style: {fontSize:'80px', color:"rgb(172, 4, 4)"}}} >
                                <FiAperture className="icon"/>
                            </IconContext.Provider>
                        </div>

                        <div className="text-div">
                            <h3>Ease of Information</h3><br/>
                            <span>Confused Where to go and Whats exciting events 
                                happening out there? One stop solution to plan your 
                                weekends.
                            </span>
                        </div>

                    </div>
                    <div className="solve1">

                        <div className="icon-div">
                            <IconContext.Provider value={{style: {fontSize:'80px', color:"rgb(172, 4, 4)"}}} >
                                <FiSettings className="icon"/>
                            </IconContext.Provider>
                        </div>

                        <div className="text-div">
                            <h3>Looking to hire Artists</h3><br/>
                            <span>We provide Seemless booking for organisers. With our well connected 
                                network of locally available artists, we'll hook you up in seconds. 
                                Post your requirements and we are here to serve your needs without any hassle.
                            </span>
                        </div>

                    </div>

                    <div className="solve1">

                        <div className="icon-div">
                            <IconContext.Provider value={{style: {fontSize:'80px', color:"rgb(172, 4, 4)"}}} >
                                <IoIosPower className="icon"/>
                            </IconContext.Provider>
                        </div>

                        <div className="text-div">
                            <h3>Looking for a Hosting Service</h3><br/>
                            <span>Relax and Enjoy the show. We are here to organise events for you !
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
