/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function RightSection({imageUrl,productName,productDescription,tryDemo,learnMore}){
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-1"></div>

                <div className="col-5 p-5 mt-5">
                    <h1 className="mt-2">{productName}</h1>
                    <p style={{width: "70%"}}>{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{textDecoration: "none"}}>Learn More &nbsp;<i className="fa-solid fa-right-long fa-beat" ></i></a>
                    </div>
                </div>
                
                <div className="col-5">
                    <img src={imageUrl} alt="productImg" style={{width: "100%"}} />
                </div>

                <div className="col-1"></div>
            </div>
        </div>
    )
}

export default RightSection;