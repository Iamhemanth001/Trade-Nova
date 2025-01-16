/* eslint-disable no-unused-vars */
import React from "react";

function Hero(){
    return (
        <div className="container mt-5 text-center">
            <div className="row mt-5 p-4">
                <div>
                    <h1 className="mt-5">Charges</h1>
                    <h3 className="text-muted fs-5 mt-2 mb-5">List of all charges and taxes</h3>
                </div>

                <div className="col p-4">
                    <img src="media/images/pricingEquity.svg"/>
                    <h2>Free equity delivery</h2>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className="col p-4">
                    <img src="media/images/intradayTrades.svg"/>
                    <h2>Intraday and F&O trades</h2>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className="col p-4">
                    <img src="media/images/pricingEquity.svg"/>
                    <h2>Free equity delivery</h2>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;