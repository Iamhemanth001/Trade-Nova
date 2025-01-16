/* eslint-disable no-unused-vars */
import React from "react";

function Brokerage(){
    return (
        <div className="container mt-5 text-center border-top">
            <div className="row mt-5 p-4">
                <div className="col-8 p-4">
                    <a href="" style={{textDecoration: "none"}}><h3 className="fs-5">Brokerage calculator</h3></a>
                    <ul style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
                        className="text-muted">
                        <li>
                        Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                        GST per order.
                        </li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>
                        Physical copies of contract notes, if required, shall be charged
                        ₹20 per contract note. Courier charges apply.
                        </li>
                        <li>
                        For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                        equity (whichever is lower).
                        </li>
                        <li>
                        For NRI account (PIS), 0.5% or ₹200 per executed order for equity
                        (whichever is lower).
                        </li>
                        <li>
                        If the account is in debit balance, any order placed will be
                        charged ₹40 per executed order instead of ₹20 per executed order.
                        </li>
                    </ul>
                </div>
                <div className="col-4 p-4">
                    <a href="" style={{textDecoration: "none"}}><h3 className="fs-5">List of charges</h3></a>
                    <ul style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
                        className="text-muted">
                        <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>

                        <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                        
                        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>

                        <li>₹9 + GST (Not levied on transfers done via UPI)</li>

                        <li>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Brokerage;