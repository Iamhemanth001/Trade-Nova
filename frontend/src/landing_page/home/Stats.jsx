/* eslint-disable no-unused-vars */
import React from "react";

function Stats(){
    return (
        <div className="container">
            <div className="row p-5">
                <div className="col p-5">
                    <h1 className="fs-2 mb-5">Trust with confidence</h1>
                    
                    <h2 className="fs-4">Customer-first always</h2>
                    <p className="text-muted">That&apos;s why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className="text-muted">No gimmicks, spam, &quot;gamification&quot;, or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h2 className="fs-4">The Zerodha universe</h2>
                    <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className="fs-4">Do better with money</h2>
                    <p className="text-muted">With initiatives like Nudge and Kill Switch, we don&apos;t just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col p-5">
                    <img src="media/images/ecosystem.png" style={{width: "100%"}}/>
                    <div className="text-center"> 
                        <a href="" className="mx-5" style={{textDecoration: "none"}}>Explore our products &nbsp;
                            <i className="fa-solid fa-right-long fa-beat"></i>
                        </a>
                        <a href="" style={{textDecoration: "none"}}> Try Kite demo &nbsp;
                            <i className="fa-solid fa-right-long fa-beat" ></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;