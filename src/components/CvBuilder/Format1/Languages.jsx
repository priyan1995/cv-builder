import React from "react";
import { UiCvItem } from "../UiCvItem";
import { UiCvSecTitle } from "../../Common/UiTitle";

export const Languages = (props) => {
    console.log(props.lang)
    return (
        <>
            <div className="pd-cv-wrapper__inner-desc pd-flx-space-between align-items-top">
                <UiCvSecTitle title="Languages" />

                {
                    props.lang.map((item) => {
                        return (
                            <>
                                <UiCvItem
                                    location={item.language}
                                    key={item.id}
                                >
                                    <h6>{item.skillLevel}</h6>
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