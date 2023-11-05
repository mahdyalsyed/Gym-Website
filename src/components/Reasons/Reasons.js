import React from "react";
import "./Reasons.css";
import image1 from "../../assas/image1.png";
import image2 from "../../assas/image2.png";
import image3 from "../../assas/image3.png";
import image4 from "../../assas/image4.png";
import nb from "../../assas/nb.png";
import adidas from "../../assas/adidas.png";
import nike from "../../assas/nike.png";
import tick from "../../assas/tick.png";

const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span>SOME REASONS</span>
                <div>
                    <span className="stroke-text">WHY</span>
                    <span> CHOOSE US?</span>
                </div>
                <div className="details-r">
                    <div>
                        <img src={tick} alt="" />
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span id="parteners">OUR PARTNERS</span>
                <div className="partner">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Reasons;
