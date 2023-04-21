
import React from "react";
import { WebHeader } from "../components/Common/WebHeader";
import { HomeBanner } from "../components/Home/HomeBanner";
import { HomeFeatures } from "../components/Home/HomeFeatures";
import { HowToCreateGreatResume } from "../components/Home/HomeHowToCreateResume";
import { Testimonials } from "../components/Home/HomeTestimonials";
import { HomeJoinResumeCoach } from "../components/Home/HomeJoinResumeCoach";
import { HomeWhyOnlineResumeMaker } from "../components/Home/HomeWhyOnlineResumeMaker";

export const Home = () => {
    return (
        <>
            <WebHeader />
            <HomeBanner />
            <HomeFeatures />
            <HowToCreateGreatResume />
            <Testimonials />
            <HomeJoinResumeCoach />
            <HomeWhyOnlineResumeMaker />

        </>
    )
}