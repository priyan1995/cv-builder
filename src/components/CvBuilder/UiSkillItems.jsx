import React from "react";

export const UiSkillItems = (props) => {
    return (
        <>
            <div className="pd-cv-left">
                {
                    props.title &&  <h4 className="cv-sec-title">{props.title}</h4>
                }
               
                <p className="pd-ls-loc">
                    {props.location}
                </p>
                <p className="pd-ls-duration">
                    {props.duration}
                </p>
            </div>
            <div className="pd-cv-right">
                <div className="pd-desc-lg">
                    {props.children}
                </div>
            </div>

        </>
    )
}