import React from "react";
import { UiContainer } from "../Common/UiContainr";
import { UiRow } from "../Common/UiRow";
import { UiCol } from "../Common/UiCol";
import { UiSubtitle, UiTitle } from "../Common/UiTitle";
import { UiButton } from "../Common/UiButtons";
import { Link } from "react-router-dom";

export const HowToCreateGreatResume = (props) => {
    return (
        <>
            <section className="pd-padd pd-hcgr">
                <UiContainer>
                    <UiRow>
                        <UiCol lg="12" className="text-center">
                            <UiTitle >
                                How to create a great resume in 3 steps
                            </UiTitle>
                            <UiSubtitle>
                                Resume Coach is so easy you don’t even need to think!
                            </UiSubtitle>
                        </UiCol>
                        <UiCol lg="4" className="pd-hcgr__pd-steps-res">
                            <div className="pd-res-step-card">
                                <div>1</div>
                                <h4>Pick a standout resume template</h4>
                                <p>Choose from a range of styles and colors and get noticed</p>
                            </div>
                        </UiCol>

                        <UiCol lg="4" className="pd-hcgr__pd-steps-res">
                            <div className="pd-res-step-card">
                                <div>2</div>
                                <h4>Add your winning personality</h4>
                                <p>Follow expert tips and examples to make your resume shine!</p>
                            </div>
                        </UiCol>

                        <UiCol lg="4" className="pd-hcgr__pd-steps-res">
                            <div className="pd-res-step-card">
                                <div>3</div>
                                <h4>Follow expert tips and examples to make your resume shine!</h4>
                                <p>Send your resume and start preparing for your job interviews!</p>
                            </div>
                        </UiCol>
                    </UiRow>

                    <UiRow className="pd-hcgr__resume-coach align-items-center">
                        <UiCol lg="6">
                            <UiTitle>
                                See what ResumeCoach can do for you!
                            </UiTitle>
                            <UiSubtitle>
                                Discover how our resume maker can help you nail your resume, get more interviews, and land your dream job!
                            </UiSubtitle>
                            <Link to="/cv">
                                <UiButton className="pd-primary-btn">Try It Now!</UiButton>
                            </Link>
                        </UiCol>
                        <UiCol lg="6">
                            <iframe  src="https://www.youtube.com/embed/D0UnqGm_miA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </UiCol>
                    </UiRow>
                </UiContainer>
            </section>
        </>
    )
}