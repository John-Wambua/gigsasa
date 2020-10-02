import React from "react";
import {Zoom} from "react-reveal";

const Footer =()=>{
    return (
        
        <footer class="row site-footer">
            <Zoom>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className={"text-justify"}>GigSasa is a (r)evolutionary  HRM platform that empowers enterprises to simplify HR across the entire employee lifecycle From automation of  day-to-day HR processes, simplifies human interactions, delivers actionable insights to build better workplaces to achieving their strategic HR goals faster and smarter.</p>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Services</h6>
                        <ul class="footer-links">
                            <li><a href="#">Time Tracking & Attendance </a></li>
                            <li><a href="#">Performance Management</a></li>
                            <li><a href="#">Payroll services</a></li>
                            <li><a href="#">Workforce Management</a></li>
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Legal</h6>
                        <ul class="footer-links">
                            <li><a href="#">Privacy Policy </a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Payroll services</a></li>
                            <li><a href="#">Workforce Management</a></li>
                        </ul>
                    </div>
                </div>


                <div className="row justify-content-center">

                    <ul className="social-icons">

                        <li><a className="facebook" href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a className="dribbble" href="#"><i className="fab fa-dribbble"></i></a></li>
                        <li><a className="linkedin" href="#"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
                <hr/>
            </div>



            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-lg-6">
                        <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
                            <a href="#">GigSasa Ltd.</a>.
                        </p>
                    </div>

                    <div className="col-md-8 col-sm-6 col-lg-6">
                        <a href="/cookie-policy.php">Cookie Policy </a>
                        <a href="#"> | </a>
                        <a href="/privacy-policy.php"> Privacy Policy </a>
                        <a href="#"> | </a>
                        <a href="/terms-of-use.php"> Terms of Use</a>
                    </div>

                </div>
            </div>
            </Zoom>
        </footer>
    )
}

export default Footer