import React from "react";

export const UiTitle = (props) => {
    return (
        <>
            <h2 className="pd-main-title">
                {props.children}
            </h2>
        </>
    )
}

export const UiSubtitle = (props) => {
    return (
        <>
            <h2 className="pd-sub-title">
                {props.children}
            </h2>
        </>
    )
}

export const UiCvSecTitle = (props) => {
    return (
        <>
            <h4 className="cv-sec-title">{props.title}</h4>
        </>
    )
}