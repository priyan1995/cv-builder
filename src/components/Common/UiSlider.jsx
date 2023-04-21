import React from "react";

import Slider from "react-slick";

export const UiSlider = (props) => {
    console.log(props.settings)
    const settings = props.settings;
    return (
        <>
            <Slider {...settings}>
                {props.children}
            </Slider>
        </>
    )
}