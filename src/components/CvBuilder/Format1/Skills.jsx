import React from "react";
import { UiCvItem } from "../UiCvItem";
import { UiCvSecTitle } from "../../Common/UiTitle";

export const Skills = (props) => {
    const skillItems = props.skillData
    return (
        <>
            <div className="pd-cv-wrapper__inner-desc pd-flx-space-between align-items-top">
                <UiCvSecTitle title="Skills" />

                {
                    skillItems.map((item) => {
                        return (
                            <>
                                <UiCvItem
                                    key={item.id}
                                    location={item.name}>

                                    <div className="pd-skills-set" >
                                        <div className="pd-skills-set__item">
                                            {
                                                item.skillsIt.map((sk, index) => {
                                                    return (
                                                        <div key={index}>{sk}</div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </UiCvItem>
                            </>
                        )

                    })
                }

            </div >
        </>
    )
}