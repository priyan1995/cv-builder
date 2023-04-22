import React from "react";
import GoogleIcon from '../../styles/img/google.png';
import LinkedInIcon from '../../styles/img/linkedin.png';

export const UiSocialLogin = (props) => {
    return (
        <>

            <div className="pd-log-with">
                <div className="pd-flx-space-between">
                    <div className="pd-log-with__icon-card">
                        <img src={GoogleIcon} /> <span>Google</span>
                    </div>
                    <div className="pd-log-with__icon-card">
                        <img src={LinkedInIcon} /> <span>Linkedin</span>
                    </div>
                </div>
                <div className="pd-log-with__pd-sep-or">
                    <p>Or</p>
                </div>
            </div>

        </>
    )
}