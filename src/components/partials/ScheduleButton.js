import React from "react";
import {Link} from "react-router-dom";

const ScheduleButton = ()=>{
    return(
        <div>
            <Link to={"/demo"} className="ui inverted blue button" href="demo.html">
                Schedule A Demo
                <i className="chevron circle right icon"></i>
            </Link>
        </div>
    )
}
export default ScheduleButton