import React, { useState } from "react";
import { UiRow } from "../../Common/UiRow";
import { UiCol } from "../../Common/UiCol";
import { UiDateInput, UiTextArea, UiTextInput } from "../../Common/UiInput";
import { UiTitle } from "../../Common/UiTitle";
import { UiButton } from "../../Common/UiButtons";

export const SkillsForm = (props) => {


    const skillTitle = props.skillTitle;
    const setSkillTitle = props.setSkillTitle;
    const skills = props.skills;
    const removeItem = props.removeItem;

    return (
        <>
            <div className="pd-cv-inp-form-wrapper">

                <UiTitle>{props.title}</UiTitle>
                <p className="pd-cv-desc">{props.description}</p>


                <form>
                    <UiRow>
                        <h4 className="pd-form-inp-title">Skills</h4>
                        <UiCol lg="12">
                            <UiTextInput
                                label="Skill"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setSkillTitle(e.target.value)}
                                defaultValue={skillTitle}
                            />
                        </UiCol>




                        <UiCol lg="12">
                            <div className="pd-btn-group">
                                <UiButton className="pd-primary-btn pd-large-pad" onClick={props.onClick}>{props.SaveBttonText}</UiButton>
                                <UiButton className="pd-primary-btn pd-large-pad" onClick={props.next}>Next</UiButton>
                            </div>
                        </UiCol>

                    </UiRow>
                </form>
            </div>

            <div className="pd-experience-list pd-skills-list-fm">
                {
                    skills.map((item) => {
                        return (
                            <>
                                <div key={item.id}>
                                    <h5>{item.name}</h5>
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