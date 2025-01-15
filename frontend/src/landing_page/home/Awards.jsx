/* eslint-disable no-unused-vars */
import React from "react";

function Awards(){
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p5">
                    <img src="media/images/largestBroker.svg" alt="" className="mt-5"/>
                </div>
                <div className="col-6 p5 mt-5">
                    <h1 className="mt-5">Largest stock broker in India</h1>
                    <p>2+ million TradeNova clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>

                    <div className="row mt-5">
                        <div className="col">
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. securities</p>
                                </li>
                            </ul>
                        </div>

                        <img src="media/images/pressLogos.png" style={{width: "90%"}}/>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Awards;