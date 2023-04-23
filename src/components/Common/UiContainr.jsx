import React from "react";
import Container from 'react-bootstrap/Container';

export const UiContainer = (props) => {
    return (
        <>
            {
                props.fluid ?
                    <Container fluid>
                        {props.children}
                    </Container>
                    :

                    <Container>
                        {props.children}
                    </Container>

            }

        </>
    )
}