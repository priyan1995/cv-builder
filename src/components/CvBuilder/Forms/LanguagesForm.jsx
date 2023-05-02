import React, { useState } from "react";
import { UiRow } from "../../Common/UiRow";
import { UiCol } from "../../Common/UiCol";
import { UiDateInput, UiTextArea, UiTextInput } from "../../Common/UiInput";
import { UiTitle } from "../../Common/UiTitle";
import { UiButton } from "../../Common/UiButtons";

export const LanguagesForm = (props) => {

    const lang = props.lang
    const setLang = props.setLang
    const language = props.language
    const setLanguage = props.setLanguage
    const skillLevel = props.skillLevel
    const setSkillLevel = props.setSkillLevel
    const langDesc = props.langDesc
    const setLangDesc = props.setLangDesc


    const removeItem = props.removeItem;


    return (
        <>
            <div className="pd-cv-inp-form-wrapper">

                <UiTitle>{props.title}</UiTitle>
                <p className="pd-cv-desc">{props.description}</p>


                <form>
                    <UiRow>
                        <h4 className="pd-form-inp-title">Languages</h4>
                        <UiCol lg="12">
                            <UiTextInput
                                label="Language"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setLanguage(e.target.value)}
                                defaultValue={language}
                            />
                        </UiCol>


                        <UiCol lg="12">
                            <UiTextInput
                                label="Skill Level (Ex: Fluent..)"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setSkillLevel(e.target.value)}
                                defaultValue={skillLevel}
                            />
                        </UiCol>

                        <UiCol lg="12">
                            <UiTextInput
                                label="University"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setLangDesc(e.target.value)}
                                defaultValue={langDesc}
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

            <div className="pd-experience-list">
                {
                    lang.map((item) => {
                        return (
                            <>
                                <div key={item.id}>
                                    <h5>{item.language}</h5>
                                    <h6>{item.skillLevel}</h6>
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