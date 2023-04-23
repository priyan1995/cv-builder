import React from "react";
import { WebHeader } from "../components/Common/WebHeader";
import { UiContainer } from "../components/Common/UiContainr";
import { UiRow } from "../components/Common/UiRow";
import { UiCol } from "../components/Common/UiCol";
import { UiCv } from "../components/CvBuilder/UiCv";

export const CvBuilder = () => {
    return (
        <>
            <WebHeader />
            <UiContainer fluid={true}>
                <UiRow>
                    <UiCol lg="6">

                    </UiCol>
                    <UiCol lg="6">
                        <UiCv />
                    </UiCol>
                </UiRow>
            </UiContainer>
        </>
    )
}