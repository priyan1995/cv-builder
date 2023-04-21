import React from "react";
import { UiContainer } from "../Common/UiContainr";
import { UiRow } from "../Common/UiRow";
import { UiCol } from "../Common/UiCol";
import Background from '../../styles/img/bg-banner-home.jpg'
import { UiButton } from "../Common/UiButtons";
import { UiTitle } from "../Common/UiTitle";

export const HomeBanner = (props) => {
    return (
        <>
            <section className="pd-home-banner" style={{ backgroundImage: `url(${Background})` }}>
                <UiContainer>
                    <UiRow className="align-items-center">
                        <UiCol lg="6">
                            <UiTitle>Build the resume that <br/> lands you jobs</UiTitle>
                            <p>Do it in minutes with our resume builder and cover letter creator. Get 70% more interviews. More than 5 million users have already found the job they deserve with us.</p>
                            <UiButton className="pd-primary-btn">Get Started!</UiButton>
                        </UiCol>
                    </UiRow>

                </UiContainer>
            </section>
        </>
    )
}