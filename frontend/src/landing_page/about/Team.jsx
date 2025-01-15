/* eslint-disable no-unused-vars */
import React from "react";

function Team(){
    return (
        <div className="container">
            <div className="row mt-5 border-top">
                <h1 className="text-center mt-5">People</h1>
            </div>

            <div className="row mb-5 text-muted" style={{lineHeight: "1.8",fontSize: "1.1em"}}>
               <div className="col-6 p-5 text-center">
                    <img src="media/images/Arjun.jpg" alt="Founder" style={{borderRadius: "100%", width: "60%"}}/>
                    <h4 className="mt-5">Hemanth Kumar</h4>
                    <h6>Founder, CEO</h6>
               </div>

               <div className="col-6 p-5">
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    
                <p>Playing basketball is his zen.</p>

                Connect on Homepage / TradingQnA / Twitter
                
               </div>
            </div>
        </div>
    )
}

export default Team;