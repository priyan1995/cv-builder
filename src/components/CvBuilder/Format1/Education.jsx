import React from "react";

export const Education = (props) => {
    return (
        <>
            <div className="pd-cv-wrapper__inner-desc pd-flx-space-between align-items-top">
                <div className="pd-cv-left">
                    <h4 className="cv-sec-title">Education</h4>
                    <p className="pd-ls-loc">
                        San Fransisco, CA
                    </p>
                    <p className="pd-ls-duration">
                        Jan 2013 - Mar 2017
                    </p>
                </div>
                <div className="pd-cv-right">
                    <div className="pd-desc-lg">
                     <h5>Web Application Development</h5>  
                     <h6>University of Colombo</h6>
                     <p>Bachalor of Information</p>

                    </div>
                </div>
            </div>
        </>
    )
}