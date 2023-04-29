import React from "react";
import { UiCvItem } from "../UiCvItem";
import { UiCvSecTitle } from "../../Common/UiTitle";

export const Skills = (props) => {
    const skillItems = {
        data: [
            { id: '1', name: 'Programming Languages', skillsIt: ['Java', 'Javascript', 'PHP'] },
            { id: '2', name: 'Frameworks', skillsIt: ['Laraval', 'React', 'Codeigniter'] },
            { id: '3', name: 'Markups', skillsIt: ['CSS', 'HTML'] }
        ]
    }

    const allSKills = skillItems.data;

    console.log(allSKills)
    return (
        <>
            <div className="pd-cv-wrapper__inner-desc pd-flx-space-between align-items-top">
                <UiCvSecTitle title="Skills" />
                <UiCvItem>
                    {
                        allSKills.map((item) => {
                            return (
                                <>
                                    <div className="pd-skills-set">
                                        <h6>{item.name}</h6>
                                        <div className="pd-skills-set__item">
                                            {
                                                item.skillsIt.map((sk) => {
                                                    return (
                                                        <div>{sk}</div>
                                                    )
                                                })
                                            }
                                            
                                        </div>
                                    </div>
                                </>
                            )

                        })
                    }

                </UiCvItem>
            </div>
        </>
    )
}