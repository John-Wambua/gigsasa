import React from "react";
import {Zoom,Reveal} from 'react-reveal'
import Landing from "./Landing";
import Features from "./Features";
import ProductDescription from "./ProductDescription";
import WhyGigsasa from "./WhyGigsasa";

const Home=()=>{
    return(
        <div>
            <Landing/>
            <Zoom>
                <Features/>
                <ProductDescription/>
            </Zoom>
            <WhyGigsasa/>
        </div>
    )
}
export default Home