import React from "react";
import { UiContainer } from "./UiContainr";
import { UiRow } from "./UiRow";
import { UiCol } from "./UiCol";
import { Link } from "react-router-dom";
import MainLogo from '../../styles/img/logo.png';

export const WebFooter = (props) => {
    return (
        <>
            <section className="pd-padd pd-main-web-footer">
                <UiContainer>
                    <UiRow className="pd-main-web-footer__pd-footer-menu">
                        {/* <UiCol lg="4">
                            <h4>About Cv Builder</h4>
                            <Link to="/">About</Link>
                            <Link to="/">Contact</Link>
                        </UiCol>

                        <UiCol lg="4">
                            <h4>Support</h4>
                            <Link to="/">Privacy Policy</Link>
                            <Link to="/">FAQ</Link>
                            <Link to="/">Terms & Conditions</Link>
                        </UiCol> */}

                        <UiCol lg="12" className="text-center">
                            <img src={MainLogo}  className="pd-main-logo"/>
                            <h4>Quick Links</h4>
                            <Link to="/">Privacy Policy</Link>
                            <Link to="/">FAQ</Link>
                            <Link to="/">Terms & Conditions</Link>
                            <Link to="/">Buid a CV</Link>
                        </UiCol>
                    </UiRow>

                </UiContainer>

                <div className="pd-main-web-footer__pd-f-credit">
                    <p>Design & Developed By <a href="#" target="_blank">Lorem Ipsum</a></p>
                </div>

            </section>
        </>
    )
}