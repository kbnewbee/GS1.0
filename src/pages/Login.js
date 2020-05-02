import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <Hero>
                <Banner title ="coming soon" subtitle ="page under construction">
                    <Link to="/" className="btn-prm" >back to home</Link>
                </Banner>
            </Hero>
        )
    }
}
