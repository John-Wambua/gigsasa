import React from "react";

const Feature = props=>{
    return(

        <div style={{marginBottom: '15px'}} className="text-center col-sm-12 col-md-12 col-lg-4">
            <div className="card" style={{width: "27rem",height: '25rem'}}>
                <div className="card-body">
                    <h1  style={{color: `${props.color}`}} className="card-title">{props.title}</h1>
                    <i  className={props.icon}></i>
                    <br/><br/>
                    <p style={{fontFamily: '\'Lato\', sans-serif',fontSize: '1.4rem'}} className="card-text">{props.description}</p>
                </div>
            </div>
        </div>

    )
}

export default Feature