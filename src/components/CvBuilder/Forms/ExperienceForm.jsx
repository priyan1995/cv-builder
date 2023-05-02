import React, { useState } from "react";
import { UiRow } from "../../Common/UiRow";
import { UiCol } from "../../Common/UiCol";
import { UiDateInput, UiTextArea, UiTextInput } from "../../Common/UiInput";
import { UiTitle } from "../../Common/UiTitle";
import { UiButton } from "../../Common/UiButtons";

export const ExperienceForm = (props) => {


    const position = props.position;
    const setPosition = props.setPosition;
    const compName = props.compName;
    const setCompanyName = props.setCompanyName;
    const location = props.location;
    const setLocation = props.setLocation;
    const period = props.period;
    const setPeriod = props.setPeriod;
    const jobDescription = props.jobDescription;
    const setJobDescription = props.setJobDescription;
    const exper = props.exper;
    const removeItem = props.removeItem;


    return (
        <>
            <div className="pd-cv-inp-form-wrapper">

                <UiTitle>{props.title}</UiTitle>
                <p className="pd-cv-desc">{props.description}</p>


                <form>
                    <UiRow>
                        <h4 className="pd-form-inp-title">Experience</h4>
                        <UiCol lg="12">
                            <UiTextInput
                                label="Position"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setPosition(e.target.value)}
                                defaultValue={position}
                            />
                        </UiCol>


                        <UiCol lg="12">
                            <UiTextInput
                                label="Company Name"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setCompanyName(e.target.value)}
                                defaultValue={compName}
                            />
                        </UiCol>

                        <UiCol lg="12">
                            <UiTextInput
                                label="Location"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setLocation(e.target.value)}
                                defaultValue={location}
                            />
                        </UiCol>

                        <UiCol lg="12">
                            <UiTextInput
                                label="Period"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setPeriod(e.target.value)}
                                defaultValue={period}
                            />
                        </UiCol>


                        <UiCol lg="12">
                            <UiTextArea
                                placeholder="Description"
                                minRows="5"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setJobDescription(e.target.value)}
                                defaultValue={jobDescription}
                            />
                        </UiCol>


                        <UiCol lg="12">
                            <UiButton className="pd-primary-btn pd-large-pad" onClick={props.onClick}>{props.SaveBttonText}</UiButton>
                        </UiCol>

                    </UiRow>
                </form>
            </div>

            <div className="pd-experience-list">
                {
                    exper.map((item) => {
                        return (
                            <>
                                <div key={item.id}>
                                    <h5>{item.position}</h5>
                                    <h6>{item.companyName}</h6>
                                    <p className="pd-per">{item.period}</p>
                                    <p className="pd-loc">{item.location}</p>
                                    <p className="pd-desc">{item.desc}</p>
                                    <button onClick={()=>removeItem(item.id)} className="pd-remove-button-rounded">X</button>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </>
    )
}