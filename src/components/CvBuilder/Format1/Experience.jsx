import React from "react";
import { UiCvItem } from "../UiCvItem";
import { UiCvSecTitle, UiTitle } from "../../Common/UiTitle";
import { useState } from "react";

export const Experience = (props) => {

    const experience = props.experience;

    return (
        <>
            <div className="pd-cv-wrapper__inner-desc pd-flx-space-between align-items-top">
                <UiCvSecTitle title="Experience" />
                {
                    experience.map((item) => {
                        return (
                            <>
                                <UiCvItem
                                    key={item.id}
                                    location={item.location}
                                    duration={item.period}>
                                    <h5>{item.position}</h5>
                                    <h6>{item.companyName}</h6>
                                    <p>{item.desc}</p>
                                </UiCvItem>
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}