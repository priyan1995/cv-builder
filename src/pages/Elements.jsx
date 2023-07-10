import React from "react";
import { UiContainer } from "../components/Common/UiContainr";
import { WebHeader } from "../components/Common/WebHeader";
import { UiRow } from "../components/Common/UiRow";
import { UiCol } from "../components/Common/UiCol";
import { UiSelectInput } from "../components/Common/UiInput";

export const Elements = (props) => {
    return (
        <>
            <WebHeader />
            <UiContainer fluid={true}>
                <UiRow>
                    <UiCol lg="12" className="pd-padd  pd-cv-right-6">
                      <UiSelectInput
                      label="Age" />
                    </UiCol>
                </UiRow>

            </UiContainer>
        </>
    )
}