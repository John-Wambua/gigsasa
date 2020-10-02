import React from "react";
import {Slide, Rotate} from 'react-reveal';
import Bullet from "./partials/Bullet";

const WhyGigsasa = ()=>{
    return (
        <section style={{backgroundColor: '#a6f6f1'}} className="home-why">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h5>Why GigSasa</h5>
                            <h1 style={{fontFamily: '\'Secular One\', sans-serif'}}>Join the HR Revolution At The Press of a Button</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <Slide left>
                        <Bullet
                            icon={"handshake"}
                            main={"Buffet approach"}
                            description={"All core processes provided to you."}
                        />
                        <Bullet
                            icon={"lightbulb"}
                            main={"Agile"}
                            description={"Supports your ever-growing business needs and adapts to your changes. We are tailored to your focus."}
                        />
                        <Bullet
                            icon={"clipboard"}
                            main={"Ideal for SMEs"}
                            description={"One HR platforms for everything coupled with round-the-clock personal support."}
                        />
                        <Bullet
                            icon={"industry"}
                            main={"Proven"}
                            description={"A solution that is proven to work in a highly complex and dynamic market."}
                        />
                        <Bullet
                            icon={"building outline"}
                            main={"Swift In-house Implementation"}
                            description={""}
                        />
                        {/*<h4><i className="blue big lightbulb icon"></i> <span>•Agile<br/>Supports your ever-growing business needs and adapts to your changes. We are tailored to your focus.</span>*/}
                        {/*</h4>*/}
                        {/*<h4><i className="blue big clipboard icon"></i><span>•Ideal for SMEs<br/>One HR platforms for everything coupled with round-the-clock personal support.</span>*/}
                        {/*</h4>*/}
                        {/*<h4><i className="blue big industry icon"></i> <span>•Proven <br/>A solution that is proven to work in a highly complex and dynamic market.</span>*/}
                        {/*</h4>*/}
                        {/*<h4><i className="blue big building outline icon"></i> <span>• Swift In-house Implementation</span></h4>*/}
                        </Slide>
                    </div>
                    <div className="col-lg-6 order-two">
                        <Rotate top left>
                        <img src="img/meeting.png" alt="Workplace" className="meeting"/>
                        <img style={{float: 'right',maxWidth: '350px',marginTop: '-70px',zIndex: '9',position: 'relative'}} src="img/man.png" alt="HR management" className="man"/>
                        </Rotate>
                    </div>

                </div>
        </section>
    )
}
export default WhyGigsasa