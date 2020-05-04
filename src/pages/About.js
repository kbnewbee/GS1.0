import React, { Component } from 'react'



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
            </div>
        )
    }
}
