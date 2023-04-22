import React from "react";
import GoogleIcon from '../../styles/img/google.png';
import LinkedInIcon from '../../styles/img/linkedin.png';
import { Link } from "react-router-dom";

export const UiSocialLogin = (props) => {
    return (
        <>

            <div className="pd-log-with">
                <div className="pd-flx-space-between">
                    <Link className="pd-log-with__icon-card">
                        <div className="">
                            <img src={GoogleIcon} /> <span>Google</span>
                        </div>
                    </Link>
                    <Link className="pd-log-with__icon-card">
                        <div>
                            <img src={LinkedInIcon} /> <span>Linkedin</span>
                        </div>
                    </Link>
                </div>
                <div className="pd-log-with__pd-sep-or">
                    <p>Or</p>
                </div>
            </div>

        </>
    )
}