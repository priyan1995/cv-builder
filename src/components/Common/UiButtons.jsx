import React from "react";
import { Button } from "react-bootstrap";

export const UiButton = (props) => {
    return(
        <>
        <Button className={props.className}>
            {props.children}
        </Button>
        </>
    )
}