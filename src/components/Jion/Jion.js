import React, { useRef } from "react";
import "./Jion.css";
import emailjs from "@emailjs/browser";

const Jion = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_ljoi28a",
                "template_5wzlu26",
                form.current,
                "TS3UxRjq7nIvSgLI8"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="Jion" id="jion-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form
                    ref={form}
                    className="email-container"
                    onSubmit={sendEmail}>
                    <input
                        type="email"
                        name="User_Email"
                        placeholder="Enter your Email Address ..."
                    />
                    <button className="btn btn-j">Jion Now</button>
                </form>
            </div>
        </div>
    );
};

export default Jion;
