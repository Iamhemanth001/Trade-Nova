/* eslint-disable no-unused-vars */
import React from "react";

function Hero(){
    return (
        <section className="container-fluid" id="supportHero">
        <div className="p-5 mt-5" id="supportWrapper">
          <h4>Support Portal</h4>
          <a href="">Track Tickets</a>
        </div>

        <div className="container">

        <div className="row mx-5">
          <div className="col-6 p-3">
            <h1 className="fs-4">
              Track Your Requests
            </h1>

            <ul className="fs-5">
              <li><a href="">Track account opening</a></li>
              <li><a href="">Track segment activation</a></li>
              <li><a href="">Intraday margins</a></li>
              <li> <a href="">Kite user manual</a></li>
            </ul>           
          </div>

          <div className="col-6 p-3">
            <h1 className="fs-3">Featured</h1>
            <ol className="fs-5">
              <li className="mb-3">
                <a href="">Current Takeovers and Delisting - January 2024</a>
              </li>
              <li>
                <a href="">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
        </div>
      </section>
    )
}

export default Hero;