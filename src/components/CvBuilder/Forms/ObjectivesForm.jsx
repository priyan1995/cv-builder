import React from "react";
import { UiRow } from "../../Common/UiRow";
import { UiCol } from "../../Common/UiCol";
import { UiDateInput, UiTextArea, UiTextInput } from "../../Common/UiInput";
import { UiTitle } from "../../Common/UiTitle";
import { UiButton } from "../../Common/UiButtons";

export const ObjectivesForm = (props) => {

    const objective = props.objective;
    const setObjective = props.setObjective;

    return (
        <>
            <div className="pd-cv-inp-form-wrapper">

                <UiTitle>{props.title}</UiTitle>
                <p className="pd-cv-desc">{props.description}</p>


                <form>
                    <UiRow className="pd-fh-form">
                        <h4 className="pd-form-inp-title">Objective</h4>


                        <UiCol lg="12">
                            <UiTextArea
                                placeholder="Type Objective Here"
                                minRows="5"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setObjective(e.target.value)}
                                defaultValue={props.objective}
                            />
                        </UiCol>

                    </UiRow>
                    <UiRow>
                        <UiCol lg="12">
                            <UiButton className="pd-primary-btn pd-large-pad" onClick={props.onClick}>{props.SaveBttonText}</UiButton>
                        </UiCol>
                    </UiRow>
                </form>
            </div>

        </>
    )
}