
import profileIcon from './profile-icon-gr.png';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';

const NavbarStatus = () => {
    return (
        <div className="navbarStatus">

            <Navbar bg="light">
                <div className="container-fluid navContainer shadow-sm p-3 mb-3 bg-white rounded " style={{
                backgroundImage: 'url(${background})'}} >
                <div className="booking">
                    <h1>Booking</h1>
                </div>

                <div className="img-div">
                    {/*<Link to={isActive ? "/UserDetails" : "#"}>  
                        <img src={profileIcon} className="App-logo" alt="logo" class="img-fluid profileIMG" />
                        
                    </Link>*/}
                    <i class="fas fa-user-circle fa-4x" style={{ color: '#767676' }}></i>
                </div>
            </div>
            </Navbar>

        </div>

    );
}


export default NavbarStatus;