import React from "react";
import { UiRow } from "../Common/UiRow";
import { UiCol } from "../Common/UiCol";
import profileImg from '../../styles/img/profile.jpg';

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

                    <div className="pd-cv-wrapper__inner-desc pd-flx-space-between align-items-top">
                        <div className="pd-cv-left">
                            <h4 className="cv-sec-title">Objective</h4>
                        </div>
                        <div className="pd-cv-right">
                            <div>
                                <p className="pd-cv-desc">
                                    Meticulous web developer with a proven track record in creating remarkable and responsive solutions in the least possible time. Have 7+ years of experience in crafting and testing user-friendly interfaces, debugging and updating existing projects, and ensuring customer satisfaction. Looking forward to demonstrating my proven abilities in optimizing web functionalities in a challenging and motivating work environment.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}