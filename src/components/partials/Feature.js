import React from "react";
import {Fade} from 'react-reveal'

const Feature = props=>{
    return(

        <Fade top>
        <div style={{marginBottom: '15px'}} className="text-center col-sm-12 col-md-12 col-lg-4">
            <div className="card" style={{backgroundColor: '#a6f6f1',width: "28rem",height: '25rem'}}>
                <div className="card-body">
                    <h2  style={{color: `${props.color}`}} className="card-title">{props.title}</h2>
                    <i  className={props.icon}></i>
                    <br/><br/>
                    <p style={{fontFamily: '\'Lato\', sans-serif',fontSize: '1.4rem'}} className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
        </Fade>

    )
}

export default Feature