import React from "react";

export const Other = (props) => {
    return (
        <>
            <div className="pd-cv-wrapper__inner-desc pd-flx-space-between align-items-top">
                <div className="pd-cv-left">
                    <h4 className="cv-sec-title">{props.title}</h4>
                </div>
                <div className="pd-cv-right">
                    <div>
                        <p className="pd-cv-desc">
                            {props.desc}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}