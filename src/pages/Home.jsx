
import React from "react";
import { WebHeader } from "../components/Common/WebHeader";
import { HomeBanner } from "../components/Home/HomeBanner";
import { HomeFeatures } from "../components/Home/HomeFeatures";
import { HowToCreateGreatResume } from "../components/Home/HomeHowToCreateResume";

export const Home = () => {
    return (
        <>
            <WebHeader />
            <HomeBanner />
            <HomeFeatures />
            <HowToCreateGreatResume />

        </>
    )
}