import React from "react";
import Row from 'react-bootstrap/Row';

export const UiRow = (props) => {
    return (
        <>
            <Row>
                {props.children}
            </Row>
        </>
    )
}