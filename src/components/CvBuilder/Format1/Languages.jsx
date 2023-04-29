import React from "react";
import { UiCvItem } from "../UiCvItem";
import { UiCvSecTitle } from "../../Common/UiTitle";

export const Languages = (props) => {
    return (
        <>
            <div className="pd-cv-wrapper__inner-desc pd-flx-space-between align-items-top">
                <UiCvSecTitle title="Languages" />
                <UiCvItem
                    location="Enlgish"
                >
                    <h6>Fluent</h6>
                    <p>Advance Diploma in University of Colombo</p>
                </UiCvItem>

                <UiCvItem
                    location="French"
                >
                    <h6>Fluent</h6>
                    <p>Diploma in University of Colombo</p>
                </UiCvItem>




            </div>
        </>
    )
}