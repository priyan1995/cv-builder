import React, { useState } from "react";
import { UiRow } from "../../Common/UiRow";
import { UiCol } from "../../Common/UiCol";
import { UiDateInput, UiTextArea, UiTextInput } from "../../Common/UiInput";
import { UiTitle } from "../../Common/UiTitle";
import { UiButton } from "../../Common/UiButtons";

export const EducationForm = (props) => {


    const degree = props.degree;
    const setPosition = props.setPosition;
    const setDegree = props.setDegree
    const university = props.university
    const setUniversity = props.setUniversity
    const locationEdu = props.locationEdu
    const setLocationEdu = props.setLocationEdu
    const periodEdu = props.periodEdu
    const setPeriodEdu = props.setPeriodEdu
    const eduDesc = props.eduDesc
    const setEduDesc = props.setEduDesc

    const edu = props.eduData;
    const removeItem = props.removeItem;
    const next = props.next;


    return (
        <>
            <div className="pd-cv-inp-form-wrapper">

                <UiTitle>{props.title}</UiTitle>
                <p className="pd-cv-desc">{props.description}</p>


                <form>
                    <UiRow className="pd-fh-form">
                        <h4 className="pd-form-inp-title">Education</h4>
                        <UiCol lg="12">
                            <UiTextInput
                                label="Degree"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setDegree(e.target.value)}
                                defaultValue={degree}
                            />
                        </UiCol>


                        <UiCol lg="12">
                            <UiTextInput
                                label="University"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setUniversity(e.target.value)}
                                defaultValue={university}
                            />
                        </UiCol>

                        <UiCol lg="12">
                            <UiTextInput
                                label="Location"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setLocationEdu(e.target.value)}
                                defaultValue={locationEdu}
                            />
                        </UiCol>

                        <UiCol lg="12">
                            <UiTextInput
                                label="Period"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setPeriodEdu(e.target.value)}
                                defaultValue={periodEdu}
                            />
                        </UiCol>

                        <UiCol lg="12">
                            <UiTextArea
                                placeholder="Description"
                                minRows="5"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setEduDesc(e.target.value)}
                                defaultValue={eduDesc}
                            />
                        </UiCol>

                    </UiRow>
                    <UiRow>
                        <UiCol lg="12">
                            <div className="pd-btn-group">
                                <UiButton className="pd-primary-btn pd-large-pad" onClick={props.onClick}>{props.SaveBttonText}</UiButton>
                                <UiButton className="pd-primary-btn pd-large-pad" onClick={next}>Next</UiButton>
                            </div>
                        </UiCol>
                    </UiRow>
                </form>
            </div>

            <div className="pd-experience-list">
                {
                    edu.map((item) => {
                        return (
                            <>
                                <div key={item.id}>
                                    <h5>{item.degree}</h5>
                                    <h6>{item.uni}</h6>
                                    <p className="pd-per">{item.period}</p>
                                    <p className="pd-loc">{item.location}</p>
                                    <p className="pd-desc">{item.desc}</p>
                                    <button onClick={() => removeItem(item.id)} className="pd-remove-button-rounded">X</button>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </>
    )
}