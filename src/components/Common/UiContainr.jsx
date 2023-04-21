import React from "react";
import Container from 'react-bootstrap/Container';

export const UiContainer = (props) => {
    return (
        <>
            <Container>
                {props.children}
            </Container>
        </>
    )
}