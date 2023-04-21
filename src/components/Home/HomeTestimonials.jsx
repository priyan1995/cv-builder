import React from "react";
import { UiContainer } from "../Common/UiContainr";
import { UiRow } from "../Common/UiRow";
import { UiCol } from "../Common/UiCol";
import { UiSubtitle, UiTitle } from "../Common/UiTitle";
import { UiSlider } from "../Common/UiSlider";
import commaIcon from '../../styles/img/comma.png';

export const Testimonials = (props) => {
    const Slidersettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }
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
                    <UiRow className="pd-testimonials-sec__testi-slider">
                        <UiSlider settings={Slidersettings}>
                            <div className="pd-slider-item">
                                <p>Very easy and helpful. Making my resume on this website was a breeze and it helped me point out important details about my experience, skills, and objective. The agents via chat are amazing. </p>
                                <img src={commaIcon}  className="comma"/>
                                <h5>Lorem Ipsum</h5>
                            </div>

                            <div className="pd-slider-item">
                                <p>Very easy and helpful. Making my resume on this website was a breeze and it helped me point out important details about my experience, skills, and objective. The agents via chat are amazing. </p>
                                <img src={commaIcon}  className="comma"/>
                                <h5>Lorem Ipsum</h5>
                            </div>

                            <div className="pd-slider-item">
                                <p>Very easy and helpful. Making my resume on this website was a breeze and it helped me point out important details about my experience, skills, and objective. The agents via chat are amazing. </p>
                                <img src={commaIcon}  className="comma"/>
                                <h5>Lorem Ipsum</h5>
                            </div>

                            <div className="pd-slider-item">
                                <p>Very easy and helpful. Making my resume on this website was a breeze and it helped me point out important details about my experience, skills, and objective. The agents via chat are amazing. </p>
                                <img src={commaIcon}  className="comma"/>
                                <h5>Lorem Ipsum</h5>
                            </div>

                            <div className="pd-slider-item">
                                <p>Very easy and helpful. Making my resume on this website was a breeze and it helped me point out important details about my experience, skills, and objective. The agents via chat are amazing. </p>
                                <img src={commaIcon}  className="comma"/>
                                <h5>Lorem Ipsum</h5>
                            </div>
                        </UiSlider>
                    </UiRow>
                </UiContainer>
            </section>
        </>
    )
}