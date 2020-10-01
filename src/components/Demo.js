import React from "react";

const Demo=()=>{
    return (
        <div className="container mt-4">
            <div className="jumbotron">
                <h2>Schedule a Demo</h2>
                <h4>See what can GigSasa do for you</h4>

                <form action="/auth/register/" method="POST">
                    <div className="form-row">
                        <div className="form-group col-md-6">

                            <input type="name" className="form-control" placeholder="First Name" id="firstname"
                                   name="fname"/>
                        </div>
                        <div className="form-group col-md-6">

                            <input type="name" placeholder="Last Name" className="form-control" id="lastname"
                                   name="lname"/>
                        </div>
                    </div>
                    <div className="form-group">

                        <input type="text" className="form-control" id="email" placeholder="Work Email" name="email"/>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">

                            <input type="company name" className="form-control" placeholder="Company Name" id="company"
                                   name="company"/>
                        </div>
                        <div className="form-group col-md-6">

                            <select id="size" aria-placeholder="Company Size" className="form-control">
                                <option selected>Company Size</option>
                                <option value="100">0-100</option>
                                <option value="200">101-200</option>
                                <option value="300">201-300</option>
                                <option value="400">301-400</option>
                                <option value="500">401-500</option>
                                <option value="500+">500+</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">

                        <input type="text" className="form-control" id="number" placeholder="Mobile Number"
                               name="mobileNumber"/>
                    </div>
                    <div className="form-group">

                        <input type="text" className="form-control" id="comments" placeholder="Enter your Message"
                               name="comments"/>
                    </div>
                    <div className="text-center">

                        <button className="btn btn-outline-primary" style={{alignContent: "center"}}>SCHEDULE A DEMO
                        </button>
                    </div>
                    <div className="text-center">
                        By submitting your details you hereby agree to our terms of use and privacy policy. <br/> You
                        can always opt out from our mailing lists as <br/> detailed in the privacy policy.
                    </div>
                </form>

            </div>
        </div>
    )
}
export default Demo