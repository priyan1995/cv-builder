import React from "react";
import { UiCvItem } from "../UiCvItem";
import { UiCvSecTitle } from "../../Common/UiTitle";

export const Skills = (props) => {
    const skillItems = props.skillData;
    return (
        <>
            <div className="pd-cv-wrapper__inner-desc pd-flx-space-between align-items-top">
                <UiCvSecTitle title="Skills" />
                <UiCvItem  >


                    <div className="pd-skills-set" >
                        <div className="pd-skills-set__item">
                            {
                                skillItems.map((item) => {
                                    return (
                                        <>
                                            <div key={item.id}>{item.name}</div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>


                </UiCvItem>

            </div >
        </>
    )
}