import React from "react";

export const Experience = (props) => {
    return (
        <>
            <div className="pd-cv-wrapper__inner-desc pd-flx-space-between align-items-top">
                <div className="pd-cv-left">
                    <h4 className="cv-sec-title">Experience</h4>
                    <p className="pd-ls-loc">
                        San Fransisco, CA
                    </p>
                    <p className="pd-ls-duration">
                        Jan 2013 - Mar 2017
                    </p>
                </div>
                <div className="pd-cv-right">
                    <div className="pd-desc-lg">
                     <h5>Sales Associate</h5>  
                     <h6>Louis Vuitton</h6>
                     <p>experience in crafting and testing user-friendly interfaces, debugging and updating existing projects</p>

                    </div>
                </div>
            </div>
        </>
    )
}