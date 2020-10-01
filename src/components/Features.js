import React from "react";


import Feature from "./partials/Feature";

const Features = ()=>{
    return (
        <div className="border-bottom border-light">
                <div style={{marginBottom: '60px'}} className="row">
                    <Feature
                        color={"#ff7b25"}
                        icon={"orange circular huge eye icon"}
                        title={"Increase Accountability"}
                        description={"Build trust through complete transparency. Know exactly who’s on the clock and where they are."}
                    />

                    <Feature
                        color={"green"}
                        icon={"green circular huge stopwatch icon"}
                        title={"Save Time & Money"}
                        description={"Spend less time tracking hours. Automate timesheets and focus on growing your business."}
                    />
                    <Feature
                        color={"purple"}
                        icon={"purple circular huge thumbs up icon"}
                        title={"Reduce Errors"}
                        description={"No more second-guessing. Forget paper timesheets and get accurate reports, every time."}
                    />
                </div>
        </div>
    )
}
export default Features