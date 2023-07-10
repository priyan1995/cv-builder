import React from "react";
import { UiContainer } from "../components/Common/UiContainr";
import { WebHeader } from "../components/Common/WebHeader";
import { UiRow } from "../components/Common/UiRow";
import { UiCol } from "../components/Common/UiCol";
import MultipleSelect, { UiSelectInput } from "../components/Common/UiInput";

export const Elements = (props) => {
    return (
        <>
            <WebHeader />
            <UiContainer fluid={true}>
                <UiRow className="pd-elem-row">
                    <UiCol lg="6" className="pd-elem-row__elem-cls">
                        <UiSelectInput
                            label="Age" />
                    </UiCol>
                    <UiCol lg="6"  className="pd-elem-row__elem-cls">
                        <MultipleSelect />
                    </UiCol>
                </UiRow>

            </UiContainer>
        </>
    )
}