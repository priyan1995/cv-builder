import React from "react";
import Col from 'react-bootstrap/Col';

export const UiCol = (props) => {
    return (
        <>
            <Col className={props.className} xxl={props.xxl} xl={props.xl}
                lg={props.lg} md={props.md} sm={props.sm} xs={props.xs}>
                {props.children}
            </Col>
        </>
    )
}