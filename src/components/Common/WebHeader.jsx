import React from "react";
import { UiContainer } from "./UiContainr";
import { UiRow } from "./UiRow";
import { UiCol } from "./UiCol";
import MainLogo from '../../styles/img/logo.png';
import { UiButton } from "./UiButtons";

export const WebHeader = (props) => {
    return (
        <>
            <section className="pd-web-header">
                <UiContainer>
                    <UiRow>
                        <UiCol lg="6" className="text-left">
                            <img src={MainLogo} />
                        </UiCol>

                        <UiCol lg="6" className="text-right">
                            <UiButton className="pd-primary-btn-outlined">Login</UiButton>
                            <UiButton className="pd-primary-btn">Sign Up</UiButton>
                        </UiCol>
                    </UiRow>
                </UiContainer>
            </section>

        </>
    )
}