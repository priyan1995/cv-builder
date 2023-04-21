import React from "react";
import { UiContainer } from "../Common/UiContainr";
import { UiRow } from "../Common/UiRow";
import { UiCol } from "../Common/UiCol";
import { UiSubtitle, UiTitle } from "../Common/UiTitle";

export const Testimonials = () => {
    return (
        <>
            <section className="pd-padd pd-testimonials-sec">
                <UiContainer>
                    <UiRow>
                        <UiCol lg="12" className="text-center">
                            <UiTitle>What our users say about us</UiTitle>
                            <UiSubtitle>Based on +850 user reviews</UiSubtitle>
                        </UiCol>
                    </UiRow>
                </UiContainer>
            </section>
        </>
    )
}