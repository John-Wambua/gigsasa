import React from "react";
import './Header.css'
import ScheduleButton from "./partials/ScheduleButton";
import {Link} from "react-router-dom";

const Header=()=>{
    return(



        <div  className={"ui secondary menu "}>
            <Link to={"/"} className="item">
                <img style={ { width: '150px',margin: '3px 0' }} src="img/gigsasa_logo.png" alt="Gigsasa logo" className="logo"/>
            </Link>


            <div className={"ui right item bkg-section"}>
                <div className="item my_dropdown">
                    <div className="ui dropdown item">
                        Features
                        <i className="dropdown icon"></i>
                        <div className="dropdown-menu menu">
                            <a className="item" href="features.html">Overview</a>
                            <a className="item" href="timetracking.html">Time
                                Tracking &amp; Attendance</a>
                            <a className="item" href="timetracking.html">GPS
                                Tracking &amp; Geo-Fencing</a>
                            <a className="item" href="timetracking.html">Timesheets &amp; Reports</a>
                            <a className="item" href="performance.html">Performance Management</a>
                            <a className="item" href="performance.html">Custom Employee Profile</a>
                            <a className="item" href="performance.html">Centralized Employee
                                Database</a>
                            <a className="item" href="performance.html">On-Demand Staffing</a>
                        </div>
                    </div>
                </div>
                <div className="my_dropdown item">
                    <div className="ui dropdown item">
                        About Us
                        <i className="dropdown icon"></i>
                        <div className="dropdown-menu menu">
                            <a className="item" href="aboutus.html">About GigSasa</a>
                            <a className="item" href="whyGigsasa.html">Why Gigsasa</a>
                        </div>
                    </div>
                </div>

                <a className="item">
                    Contact Us
                </a>

                <ScheduleButton/>

            </div>

        </div>
    )
}

export default Header