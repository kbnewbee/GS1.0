import React from 'react';
import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Error from './pages/Error'
import Footer from './components/Footer'
import MoNavbar from './components/MoNavbar'

import {Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <div className="usual-nav">
      <Navbar />
    </div>
    <div className="mo-nav">
      <MoNavbar/>
    </div>


    <Switch>
      <Route exact path = "/" component ={Home} />
      <Route exact path = "/" component ={Contact} />
      <Route exact path = "/login" component ={Login} />
      <Route component = {Error} />
    </Switch>
    
    <Footer/>

    </>
    
  );
}

export default App;
