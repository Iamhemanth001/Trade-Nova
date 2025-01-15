/* eslint-disable no-unused-vars */
import React from "react";

function Hero(){
    return (
       <div className="container p5 text-center mt-5">
            <div className="row">
                <img src="media/images/homeHero.png" alt="Hero Image" className="mb-4 p-2" />
                <h1 className="mt-5">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="p2 btn btn-primary fs-5 mb-5" style={{width: "15%",margin: "0 auto"}}>Sign up for free</button>
            </div>

       </div>
    )
}

export default Hero;