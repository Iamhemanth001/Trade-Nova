/* eslint-disable no-unused-vars */
import React from "react";

function Education(){
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" style={{width: "72%"}}/>
                </div>

                <div className="col-6 mb-5">
                    <h1 className="fs-2 mb-3 mt-3">Free and open market education</h1>

                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{textDecoration: "none"}}> Varsity  &nbsp;
                            <i className="fa-solid fa-right-long fa-beat" ></i>
                    </a>

                    <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration: "none"}}> TradingQ&A  &nbsp;
                            <i className="fa-solid fa-right-long fa-beat" ></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Education;