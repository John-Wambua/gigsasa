import React from "react";

const ProdDescription = props=>{
    return(
        <div className="feature  col-sm-8 col-md-8 col-lg-4">
            <div className="image-wrapper">
                <img data-src={props.imageURL}
                     className=" lazyloaded" width="289" height="375" alt={props.title}
                     title={props.title}
                     src={props.imageURL}/>
            </div>
            <h3  style={{fontFamily: '\'Sansita Swashed\', cursive',fontSize: '3rem'}} className="feature-title">
                {props.title}</h3>
            <p style={{fontFamily: '\'Lato\', sans-serif',fontSize: '1.2rem'}} className="description">{props.description}</p>
        </div>
    )
}
export default ProdDescription;