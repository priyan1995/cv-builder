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

export const Login = (props) => {
    return (
        <>
            <WebHeader />
            <section className="pd-padd pd-login">
                <UiContainer>
                    <UiRow>
                        <UiCol lg="12" className="text-center">
                            <div className="pd-login-form text-left">
                                <UiTitle>Log In</UiTitle>
                                <p>New to CVWinner?
                                    <Link to="/"> Create account here</Link></p>

                                <UiSocialLogin />

                                <UiTextInput
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    className="w-100 pd-mui-input"
                                />

                                <UiTextInput
                                    label="Email"
                                    type="email"
                                    className="w-100 pd-mui-input"
                                />
                                <div className="pd-flx-space-between">
                                    <UiCheckBox label="Remember Me" />
                                    <Link to="/">Forgot Password</Link>
                                </div>

                                <UiButton className="pd-primary-btn w-100">Log In</UiButton>
                            </div>
                        </UiCol>
                    </UiRow>
                </UiContainer>
            </section>
        </>
    )
}