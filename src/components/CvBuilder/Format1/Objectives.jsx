import React from "react";

export const Objectives = (props) => {
    return (
        <>
            <div className="pd-cv-wrapper__inner-desc pd-flx-space-between align-items-top">
                <div className="pd-cv-left">
                    <h4 className="cv-sec-title">Objective</h4>
                </div>
                <div className="pd-cv-right">
                    <div>
                        <p className="pd-cv-desc">{props.objectives}</p>
                    </div>
                </div>
            </div>
        </>
    )
}