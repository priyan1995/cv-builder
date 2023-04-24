import React from "react";
import { UiRow } from "../Common/UiRow";
import { UiCol } from "../Common/UiCol";
import profileImg from '../../styles/img/profile.jpg';
import { Objectives } from "./Format1/Objectives";
import { Experience } from "./Format1/Experience";
import { Education } from "./Format1/Education";

export const UiCv = (props) => {
    return (
        <>
            <section className="pd-cv-format pd-padd">
                <div className="pd-cv-wrapper">

                    <div className="pd-cv-wrapper__top-bar">
                        <div className="pd-cv-left">
                            <h2>Priyan Darshana</h2>
                            <p>Web Developer</p>
                        </div>
                        <div className="pd-cv-right">
                            <div>
                                <p><strong>Email: </strong>priyan@gmail.com</p>
                                <p><strong>Address: </strong>No.120, Kottawa, Pannipitiya.</p>
                                <p><strong>Phone: </strong>0741251125</p>
                            </div>
                            <img src={profileImg} />
                        </div>
                    </div>
                    <Objectives />
                    <Experience />
                    <Education />
                </div>
            </section>
        </>
    )
}