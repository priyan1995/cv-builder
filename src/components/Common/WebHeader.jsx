import React from "react";
import { UiContainer } from "./UiContainr";
import { UiRow } from "./UiRow";
import { UiCol } from "./UiCol";
import MainLogo from '../../styles/img/logo.png';
import { UiButton } from "./UiButtons";
import { Link } from "react-router-dom";

export const WebHeader = (props) => {
    return (
        <>
            <section className="pd-web-header">
                <UiContainer>
                    <UiRow className="align-items-center">
                        <UiCol lg="6" className="text-left">
                            <img src={MainLogo} />
                        </UiCol>

                        <UiCol lg="6" className="text-right">
                            <Link to="/login">
                                <UiButton className="pd-primary-btn-outlined">Login</UiButton>
                            </Link>
                            <Link to="/sign-up">
                                <UiButton className="pd-primary-btn">Sign Up</UiButton>
                            </Link>
                        </UiCol>
                    </UiRow>
                </UiContainer>
            </section>

        </>
    )
}