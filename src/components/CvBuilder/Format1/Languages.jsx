import React from "react";
import { UiCvItem } from "../UiCvItem";

export const Languages = (props) => {
    return (
        <>
            <div className="pd-cv-wrapper__inner-desc pd-flx-space-between align-items-top">
                <UiCvItem
                    title="Languages"
                >
                    <h5>English</h5>
                    <h6>Fluent</h6>
                    <p>Advance Diploma in University of Colombo</p>
                </UiCvItem>

                <UiCvItem
                >
                    <h5>French</h5>
                    <h6>Fluent</h6>
                    <p>Diploma in University of Colombo</p>
                </UiCvItem>




            </div>
        </>
    )
}