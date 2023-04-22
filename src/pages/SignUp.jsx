import React from "react";
import { WebHeader } from "../components/Common/WebHeader";
import { UiContainer } from "../components/Common/UiContainr";
import { UiRow } from "../components/Common/UiRow";
import { UiCol } from "../components/Common/UiCol";
import { UiCheckBox, UiTextInput } from "../components/Common/UiInput";
import { UiTitle } from "../components/Common/UiTitle";
import { Link } from "react-router-dom";
import { UiButton } from "../components/Common/UiButtons";
import { UiSocialLogin } from "../components/Login/UiSocialLogin";

export const SignUp = (props) => {
    return (
        <>
            <WebHeader />
            <section className="pd-padd pd-login">
                <UiContainer>
                    <UiRow>
                        <UiCol lg="12" className="text-center">
                            <div className="pd-login-form text-left">
                                <UiTitle>Create a free account and launch your career</UiTitle>
                                <p>Already have an account?
                                    <Link to="/login"> Log in now</Link></p>

                                <UiSocialLogin />

                                <UiTextInput
                                    label="Email"
                                    type="email"
                                    className="w-100 pd-mui-input"
                                />

                                <UiTextInput
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    className="w-100 pd-mui-input"
                                />                              

                                <UiButton className="pd-primary-btn w-100">Sign up for free</UiButton>

                                <div className="pd-su-terms">
                                    By clicking “Sign up for free!”, I expressly agree to the <Link to="/">Terms and Conditions</Link> and <Link to="/">Privacy Policy.</Link>
                                </div>
                            </div>
                        </UiCol>
                    </UiRow>
                </UiContainer>
            </section>
        </>
    )
}