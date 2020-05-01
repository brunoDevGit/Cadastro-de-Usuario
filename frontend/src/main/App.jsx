import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import './App.css'

import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'
import Nav from '../components/template/Nav'

import Home from '../components/home/Home'

export default props =>

      <div className="app">
            <Logo icon="users"></Logo>

            <Nav>
                  
            </Nav>
            <Home></Home>

            <Footer></Footer>
      </div>