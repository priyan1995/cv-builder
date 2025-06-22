import React from "react";
import { UiContainer } from "../Common/UiContainr";
import { UiRow } from "../Common/UiRow";
import { UiCol } from "../Common/UiCol";
import { UiSubtitle, UiTitle } from "../Common/UiTitle";
import { UiButton } from "../Common/UiButtons";
import { useNavigate } from "react-router-dom";

export const HomeWhyOnlineResumeMaker = (props) => {

    const navigate = useNavigate();

    const goToCVBuilder = () => {
        navigate('/cv');
    }

    return (
        <>
            <section className="pd-padd pd-worm">
                <UiContainer>
                    <UiRow className="text-center">
                        <UiCol lg="12">
                            <UiTitle>Why use Resume Coach’s online resume maker?</UiTitle>
                            <UiSubtitle>Using our online editor gives you a 67% better chance of getting each job (and it just takes a few minutes!)</UiSubtitle>
                            <UiButton className="pd-primary-btn" onClick={goToCVBuilder}> CREATE MY RESUME NOW! </UiButton>
                        </UiCol>
                        <UiCol lg="12">
                            <iframe src="https://www.youtube.com/embed/D0UnqGm_miA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </UiCol>
                    </UiRow>
                </UiContainer>
            </section>
        </>
    )
}