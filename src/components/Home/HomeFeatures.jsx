import React from "react";
import { UiContainer } from "../Common/UiContainr";
import { UiRow } from "../Common/UiRow";
import { UiCol } from "../Common/UiCol";
import { UiTitle } from "../Common/UiTitle";
import TrophyImage from '../../styles/img/trophy.png';
import step from '../../styles/img/requirement.png';
import jobseasrch from '../../styles/img/search.png';
import letter from '../../styles/img/contract.png';

export const HomeFeatures = (props) => {
    return (
        <>
            <section className="pd-home-features-content pd-padd">
                <UiContainer>
                    <UiRow>
                        <UiCol lg="3">
                            <div className="pd-feature-card">
                                <div className="pd-img-feat">
                                    <img src={TrophyImage} />
                                </div>
                                <UiTitle>Job-winning Templates</UiTitle>
                                <p>Be in the top 3% that <br />gets past the first round.</p>
                            </div>
                        </UiCol>

                        <UiCol lg="3">
                            <div className="pd-feature-card">
                                <div className="pd-img-feat">
                                    <img src={letter} />
                                </div>
                                <UiTitle>Professional Cover Letter Creator</UiTitle>
                                <p>Enjoy effective cover letter guidance <br/> and inspiring examples.</p>
                            </div>
                        </UiCol>

                        <UiCol lg="3">
                            <div className="pd-feature-card">
                                <div className="pd-img-feat">
                                    <img src={jobseasrch} />
                                </div>
                                <UiTitle>Job-winning Templates</UiTitle>
                                <p>Find jobs quickly that match your <br /> experience.</p>
                            </div>
                        </UiCol>

                        <UiCol lg="3">
                            <div className="pd-feature-card">
                                <div className="pd-img-feat">
                                    <img src={step} />
                                </div>
                                <UiTitle>Job-winning Templates</UiTitle>
                                <p>Expert advice and real-life examples <br /> from successful jobseekers.</p>
                            </div>
                        </UiCol>
                    </UiRow>
                </UiContainer>
            </section>
        </>
    )
}