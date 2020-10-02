import React from "react";

const Bullet =props=>{
    return (

        <h3 style={{fontFamily: '\'Fjalla One\', sans-serif'}}><i className={`blue big ${props.icon} icon`}></i> <span>•{props.main} <br/><h4>{props.description}</h4> </span></h3>
    )
}
export default Bullet