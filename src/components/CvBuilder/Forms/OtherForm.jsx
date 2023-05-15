import React, { useState } from "react";
import { UiRow } from "../../Common/UiRow";
import { UiCol } from "../../Common/UiCol";
import { UiDateInput, UiTextArea, UiTextInput } from "../../Common/UiInput";
import { UiTitle } from "../../Common/UiTitle";
import { UiButton } from "../../Common/UiButtons";
import { Link } from "react-router-dom";

export const OtherForm = (props) => {

    const otherTitle = props.otherTitle;
    const setOtherTitle = props.setOtherTitle;
    const otherDesc = props.otherDesc;
    const setOtherDesc = props.setOtherDesc;

    return (
        <>
            <div className="pd-cv-inp-form-wrapper">

                <UiTitle>{props.title}</UiTitle>
                <p className="pd-cv-desc">{props.description}</p>


                <form>
                    <UiRow>
                        <h4 className="pd-form-inp-title">Others</h4>
                        <UiCol lg="12">
                            <UiTextInput
                                label="Title"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setOtherTitle(e.target.value)}
                                defaultValue={otherTitle}
                            />
                        </UiCol>

                        <UiCol lg="12">
                            <UiTextArea
                                placeholder="Description"
                                minRows="5"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setOtherDesc(e.target.value)}
                                defaultValue={otherDesc}
                            />
                        </UiCol>




                        <UiCol lg="12">
                            <div className="pd-btn-group">
                                <UiButton className="pd-primary-btn pd-large-pad" onClick={props.onClick}>{props.SaveBttonText}</UiButton>
                                <UiButton className="pd-primary-btn pd-large-pad pd-link-btn" > <Link to={props.next}>Finish</Link></UiButton>
                            </div>
                        </UiCol>

                    </UiRow>
                </form>
            </div>

          
        </>
    )
}