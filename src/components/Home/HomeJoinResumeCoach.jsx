import React from "react";
import { UiContainer } from "../Common/UiContainr";
import { UiRow } from "../Common/UiRow";
import { UiCol } from "../Common/UiCol";
import {  UiTitle } from "../Common/UiTitle";
import Calendar from '../../styles/img/calendar.png';
import Falg from '../../styles/img/finish.png';
import Target from '../../styles/img/target.png';


export const HomeJoinResumeCoach = (props) => {
    return (
        <>
            <section className="pd-padd pd-wiprc">
                <UiContainer>
                    <UiRow>
                        <UiCol lg="12" className="text-center">
                            <UiTitle >
                                Why it pays to join ResumeCoach...
                            </UiTitle>

                        </UiCol>                     

                        <UiCol lg="4" className="pd-wiprc__card">
                            <div className="pd-res-step-card">
                                <img src={Falg} />
                                <h4>+67%</h4>
                                <p>Better chance of getting a job</p>
                            </div>
                        </UiCol>

                        <UiCol lg="4" className="pd-wiprc__card">
                            <div className="pd-res-step-card">
                                <img src={Calendar} />
                                <h4>23 days</h4>
                                <p>Average time to get hired after signing up</p>
                            </div>
                        </UiCol>

                        <UiCol lg="4" className="pd-wiprc__card">
                            <div className="pd-res-step-card">
                                <img src={Target} />
                                <h4>12 min</h4>
                                <p>Average time to create a resume</p>
                            </div>
                        </UiCol>
                    </UiRow>

                 
                </UiContainer>
            </section>
        </>
    )
}