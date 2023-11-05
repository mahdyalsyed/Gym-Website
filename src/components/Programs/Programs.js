import React from "react";
import "./Programs.css";
import programsData from "../../data/programsData";
import RightArrow from "../../assas/rightArrow.png";

const Programs = () => {
    return (
        <div className="Programs" id="Programs">
            <div className="Programs-header">
                <span className="stroke-text">EXPLORE OUR</span>
                <span>PROGRAMS</span>
                <span className="stroke-text">TO SHAPE YOU</span>
            </div>
            <div className="program-categories">
                {programsData.map((program) => {
                    return (
                        <div className="category">
                            {program.image}
                            <span>{program.heading}</span>
                            <span>{program.details}</span>
                            <div className="join-now">
                                <span>Join Now</span>
                                <img src={RightArrow} alt="" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Programs;
