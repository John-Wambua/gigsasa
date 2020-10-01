import React from "react";
import {Fade} from 'react-reveal';
import './Landing.css'
import ScheduleButton from "./partials/ScheduleButton";

const Landing = ()=>{
    return (
        <section className="border-bottom border-light">
                <div style={{marginTop: '0px'}} className="row text-center">
                    <Fade left>
                    <div className="col-lg-6 col-sm-12 d-flex justify-content-center"style={{flexDirection: 'column'}} >
                        <h1 style={{fontSize: '55px', fontFamily: '\'Secular One\', sans-serif'}}>Time Tracking  &amp; Performance Management Made Easier</h1>
                        <h2>Unleash the true potential of your workforce.</h2>
                        <ScheduleButton/>
                    </div>
                    </Fade>
                    <div className="col-lg-6 col-sm-12 bkg-section">
                        <img src="img/banner.jpeg" className="img-fluid" alt="Home Banner"
                             style={{ height: '450px'}} alt={"banner image"}/>
                    </div>
                </div>
            <span className={"border-bottom border-secondary"}></span>
        </section>
    )
}
export default Landing