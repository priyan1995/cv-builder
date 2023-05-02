import React from "react";
import { UiCvItem } from "../UiCvItem";
import { UiCvSecTitle } from "../../Common/UiTitle";

export const Education = (props) => {
    return (
        <>
            <div className="pd-cv-wrapper__inner-desc pd-flx-space-between align-items-top">
                <UiCvSecTitle title="Education" />
                {
                    props.education.map((item) => {
                        return (
                            <>
                                <UiCvItem
                                    location={item.location}
                                    duration={item.period}
                                    key={item.id}
                                >
                                    <h5>{item.degree}</h5>
                                    <h6>{item.uni}</h6>
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