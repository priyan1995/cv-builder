import React from "react";
import { UiRow } from "../Common/UiRow";
import { UiCol } from "../Common/UiCol";
import profileImg from '../../styles/img/profile.jpg';
import { Objectives } from "./Format1/Objectives";
import { Experience } from "./Format1/Experience";
import { Education } from "./Format1/Education";
import { Languages } from "./Format1/Languages";
import { Skills } from "./Format1/Skills";
import { Other } from "./Format1/Other";

export const UiCv = (props) => {
    return (
        <>
            <section className="pd-cv-format ">
                <div className="pd-cv-wrapper">

                    <div className="pd-cv-wrapper__top-bar">
                        <div className="pd-cv-left">
                            <h2>{props.firstName} {props.lastName}</h2>
                            <p>{props.occupation}</p>
                        </div>
                        <div className="pd-cv-right">
                            <div>
                                <p><strong>Email: </strong>{props.email}</p>
                                <p><strong>Address: </strong>{props.address}</p>
                                <p><strong>Phone: </strong>{props.phone}</p>
                            </div>
                            <img src={profileImg} />
                        </div>
                    </div>
                    <Objectives
                        objective={props.objective}
                    />
                    <Experience experience={props.exper} />
                    <Education />
                    <Languages />
                    <Skills />
                    <Other
                        title="Other"
                        desc=" Meticulous web developer with a proven track record in creating remarkable and responsive solutions in the least possible time. Have 7+ years of experience in crafting and testing user-friendly interfaces."
                    />
                </div>
            </section>
        </>
    )
}