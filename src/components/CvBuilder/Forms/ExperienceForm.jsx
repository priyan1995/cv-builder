import React, { useState } from "react";
import { UiRow } from "../../Common/UiRow";
import { UiCol } from "../../Common/UiCol";
import { UiDateInput, UiTextArea, UiTextInput } from "../../Common/UiInput";
import { UiTitle } from "../../Common/UiTitle";
import { UiButton } from "../../Common/UiButtons";

export const ExperienceForm = (props) => {

    const [position, setPosition] = useState('');
    const [compName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [period, setPeriod] = useState('');
    const [description, setDescription] = useState('');


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
                                onChange={(e) => setDescription(e.target.value)}
                                defaultValue={description}
                            />
                        </UiCol>


                        <UiCol lg="12">
                            <UiButton className="pd-primary-btn pd-large-pad" onClick={props.onClick}>{props.SaveBttonText}</UiButton>
                        </UiCol>

                    </UiRow>
                </form>
            </div>

        </>
    )
}