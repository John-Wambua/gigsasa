import React from "react";
import ScheduleButton from "./partials/ScheduleButton";
import ProdDescription from "./partials/ProdDescription";

const ProductDescription = ()=>{
    return (
        <div className="border-bottom border-light text-center">
            <h1 style={{marginTop: '25px', fontFamily: '\'Rubik\', sans-serif', fontSize: '2.5rem'}}>The simplest timesheet app for small businesses </h1>
            <div className="row">
                <ProdDescription
                    title={"Simple Time Tracking"}
                    imageURL={"https://attotime.com/assets/web/images/simple-time-tracking@2x-en.png"}
                    description={"Just tap a button to clock in and start tracking your time. While on the clock, you can track time towards a job, add notes or take a break."}
                />
                <ProdDescription
                    title={"GPS Location Tracking"}
                    imageURL={"https://attotime.com/assets/web/images/gps-location-tracking@2x-en.png"}
                    description={"Get real-time updates on your team’s location. Ensure everyone is safe, productive and in the right place at the right time."}
                />
                <ProdDescription
                    title={"Team Activity Insights "}
                    imageURL={"https://attotime.com/assets/web/images/team-activity-insights@2x-en.png"}
                    description={"Get detailed insights into your team's daily activity. Find out instantly who's on the clock, on break, or enjoying some time off."}
                />

            </div>
            <div className="follow-through-icon">
                <i className="follow-icon"></i>
            </div>
            <h2 className="timesheet-title section-title">
                You run your business. <br/> We’ll take care of your timesheets.</h2>
            <ScheduleButton/>

        </div>
    )
}
export default ProductDescription