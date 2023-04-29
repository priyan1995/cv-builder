import React from "react";
import { UiCvItem } from "../UiCvItem";
import { UiCvSecTitle, UiTitle } from "../../Common/UiTitle";

export const Experience = (props) => {

    const Experience = {
        data: [
            { id: '1', position: 'Sales Associate', companyName: 'Louis Vuitton', location: 'San Fransisco, CA', period: 'Jan 2015 - Mar 2018', desc: 'experience in crafting and testing user-friendly interfaces, debugging and updating existing projects' },
            { id: '1', position: 'Sales Associate', companyName: 'Louis Vuitton', location: 'San Fransisco, CA', period: 'Jan 2015 - Mar 2018', desc: 'experience in crafting and testing user-friendly interfaces, debugging and updating existing projects' }

        ]
    }

    return (
        <>
            <div className="pd-cv-wrapper__inner-desc pd-flx-space-between align-items-top">
               <UiCvSecTitle title="Experience" />
                {
                    Experience.data.map((item) => {
                        return (
                            <>
                                <UiCvItem
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