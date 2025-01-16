/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function LeftSection({imageUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}){
    return (
        <div className="container">
            <div className="row">
                <div className="col p-5">
                    <img src={imageUrl} alt="productImg" />
                </div>
                <div className="col-5 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p style={{width: "70%"}}>{productDescription}</p>

                    <div>    
                        <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo &nbsp;<i className="fa-solid fa-right-long fa-beat" ></i></a> 
                        <a href={learnMore} style={{marginLeft: "95px", textDecoration: "none"}}>Learn More &nbsp;<i className="fa-solid fa-right-long fa-beat" ></i></a>
                    </div>

                    <div className="mt-3">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" style={{marginLeft: "50px"}}/></a>
                    </div>
                </div>

                <div className="col-1"></div>
            </div>
        </div>
    )
}

export default LeftSection;