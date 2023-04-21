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