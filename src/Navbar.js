import profileIcon from './profile-icon-gr.png';
import React, {Component} from  'react';
import {Link} from 'react-router-dom';
import {useState} from "react";





const Navbar = ({isActive}) => { //isActive is a prop




    return ( 
        <div className="navbar">

                {/*<div class="container navContainer shadow-sm p-3 mb-5 bg-white rounded" >*/}  {/*bootstrap container makes the below divs fluid/responsive when changing size of window*/}
                                                                                         {/*contains 2 classes:- container and shadow*/}
             <div class="container navContainer shadow-sm p-3 mb-3 bg-white rounded" > 
                                <div className="booking">
                                    <h1>Booking</h1>
                                </div>

                                <div className="img-div">

                               

                                
                                <Link to={isActive ? "/UserDetails" : "#"}>  {/*when isActive, redirect user to user details*/}
                                <img src={profileIcon} className="App-logo" alt="logo" class="img-fluid profileIMG"/>
                                </Link>
                               

                                

                                </div>

            

                 </div>







        </div>
        
     );
}
 
export default Navbar;