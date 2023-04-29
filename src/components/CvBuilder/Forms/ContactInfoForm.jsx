import React from "react";
import { UiRow } from "../../Common/UiRow";
import { UiCol } from "../../Common/UiCol";
import { UiDateInput, UiTextInput } from "../../Common/UiInput";
import { UiTitle } from "../../Common/UiTitle";

export const ContactInfoForm = (props) => {

    const firstName = props.firstName;
    const setFirstName = props.setFirstName;
    const lastName = props.lastName;
    const setLastName = props.setLastName;
    const occupation = props.occupation;
    const setOccupation = props.setOccupation;
    const email = props.email;
    const setEmail = props.setEmail;
    const address = props.address;
    const setAddress = props.setAddress;
    const phone = props.phone;
    const setPhone = props.setPhone;
    const date = props.date;
    const setDate = props.setDate;

    return (
        <>
            <div className="pd-cv-inp-form-wrapper">

                <UiTitle>{props.title}</UiTitle>
                <p className="pd-cv-desc">{props.description}</p>


                <form>
                    <UiRow>
                        <h4 className="pd-form-inp-title">Contact Information</h4>
                        <UiCol lg="6">
                            <UiTextInput
                                label="First Name"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setFirstName(e.target.value)}
                                defaultValue={firstName}
                            />
                        </UiCol>
                        <UiCol lg="6">

                        </UiCol>

                        <UiCol lg="6">
                            <UiTextInput
                                label="Last Name"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setLastName(e.target.value)}
                                defaultValue={lastName}
                            />
                        </UiCol>

                        <UiCol lg="12">
                            <UiTextInput
                                label="Occupation"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setOccupation(e.target.value)}
                                defaultValue={occupation}
                            />
                        </UiCol>

                        <UiCol lg="12">
                            <UiTextInput
                                label="Address"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setAddress(e.target.value)}
                                defaultValue={address}
                            />
                        </UiCol>
                        <UiCol lg="6">
                            <UiTextInput
                                label="Phone"
                                type="text"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setPhone(e.target.value)}
                                defaultValue={phone}
                            />
                        </UiCol>

                        <UiCol lg="6">
                            <UiTextInput
                                label="Email"
                                type="email"
                                className="w-100 pd-mui-input"
                                onChange={(e) => setEmail(e.target.value)}
                                defaultValue={email}
                            />
                        </UiCol>

                        <UiCol lg="12">
                            <UiDateInput
                                label="Date of Birth"
                                className="w-100 pd-mui-input"

                            />
                        </UiCol>

                    </UiRow>
                </form>
            </div>

        </>
    )
}