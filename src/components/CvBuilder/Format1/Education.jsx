import React from "react";
import { UiCvItem } from "../UiCvItem";

export const Education = (props) => {
    return (
        <>
            <div className="pd-cv-wrapper__inner-desc pd-flx-space-between align-items-top">
                <UiCvItem
                    title="Education"
                    location="San Fransisco, CA"
                    duration="Jan 2013 - Mar 2017"
                >
                    <h5>Web Application Development</h5>
                    <h6>University of Colombo</h6>
                    <p>Bachalor of Information</p>
                </UiCvItem>

                <UiCvItem
                    location="San Fransisco, CA"
                    duration="Jan 2013 - Mar 2017"
                >
                    <h5>Web Application Development</h5>
                    <h6>University of Colombo</h6>
                    <p>Bachalor of Information</p>
                </UiCvItem>


            </div>
        </>
    )
}