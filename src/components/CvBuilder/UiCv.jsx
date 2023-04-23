import React from "react";
import { UiRow } from "../Common/UiRow";
import { UiCol } from "../Common/UiCol";
import profileImg from '../../styles/img/profile.jpg';

export const UiCv = (props) => {
    return (
        <>
            <section className="pd-cv-format pd-padd">
                <div className="pd-cv-top-bar">
                    <div className="pd-cv-top-bar__left">
                        <h2>Lorem Ipsum</h2>
                        <p>Web Developer</p>
                    </div>
                    <div className="pd-cv-top-bar__right">
                        <div>
                            <p><strong>Email: </strong>priyan@gmail.com</p>
                            <p><strong>Address: </strong>No.120, Kottawa, Pannipitiya.</p>
                            <p><strong>Phone: </strong>0741251125</p>
                        </div>
                        <img src={profileImg} />
                    </div>
                </div>
            </section>
        </>
    )
}