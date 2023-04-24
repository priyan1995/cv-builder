import React from "react";
import { UiCvItem } from "../UiCvItem";

export const Experience = (props) => {
    return (
        <>
            <div className="pd-cv-wrapper__inner-desc pd-flx-space-between align-items-top">
              
                <UiCvItem
                    title="Experience"
                    location="San Fransisco, CA"
                    duration="Jan 2015 - Mar 2018">
                    <h5>Sales Associate</h5>
                    <h6>Louis Vuitton</h6>
                    <p>experience in crafting and testing user-friendly interfaces, debugging and updating existing projects</p>
                </UiCvItem>
            </div>
        </>
    )
}