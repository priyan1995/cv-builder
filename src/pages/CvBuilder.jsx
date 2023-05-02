import React, { useState } from "react";
import { WebHeader } from "../components/Common/WebHeader";
import { UiContainer } from "../components/Common/UiContainr";
import { UiRow } from "../components/Common/UiRow";
import { UiCol } from "../components/Common/UiCol";
import { UiCv } from "../components/CvBuilder/UiCv";
import { UiTitle } from "../components/Common/UiTitle";
import { UiDateInput, UiTextInput } from "../components/Common/UiInput";
import dayjs, { Dayjs } from "dayjs";
import { ContactInfoForm } from "../components/CvBuilder/Forms/ContactInfoForm";
import { ObjectivesForm } from "../components/CvBuilder/Forms/ObjectivesForm";
import { ExperienceForm } from "../components/CvBuilder/Forms/ExperienceForm";
import { Objectives } from "../mockData/Objectives";
import { ExperienceData } from "../mockData/Experience";
import { EducationData } from "../mockData/Education";

export const CvBuilder = () => {

    // get mock data
    const objs = Objectives;
    const experienceArr = ExperienceData;
    const educationeArr = EducationData;

    // personal Info
    const [firstName, setFirstName] = useState('Priyan');
    const [lastName, setLastName] = useState('Darshana');
    const [occupation, setOccupation] = useState('Web Developer');
    const [email, setEmail] = useState('priyan@gmail.com');
    const [address, setAddress] = useState('No.120, Kottawa, Pannipitiya.');
    const [phone, setPhone] = useState('0741251125');
    const [date, setDate] = useState();

    // objectives
    const [objective, setObjective] = useState(objs);

    // experience
    const [experience, setExperience] = useState(experienceArr);
    const [position, setPosition] = useState('');
    const [compName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [period, setPeriod] = useState('');
    const [jobDescription, setJobDescription] = useState('');

    // education
    const [education, setEducation] = useState(educationeArr);



    // wizard steps
    const [viewPersonalInfo, setViewPersonalInfo] = useState(true);
    const [viewObjectives, setViewObjectives] = useState(false);
    const [viewExperience, setViewExperience] = useState(false);

    // personal Infomation Form
    const OnsaveFormOne = () => {
        console.log('saved Contact');
        setViewPersonalInfo(false);
        setViewObjectives(true);
    }

    // objectives Form
    const OnsaveObjective = () => {
        console.log('saved Objective');
        setViewObjectives(false);
        setViewExperience(true);
    }

    // experience form next
    const nextFromExp = () => {
        setViewExperience(false);
    }

    // save Experience data
    const onSaveExp = (e) => {
        setPosition(e.target.value);
        setCompanyName(e.target.value);
        setLocation(e.target.value);
        setPeriod(e.target.value);
        setJobDescription(e.target.value);

        const newElement = { id: '3', position: position, companyName: compName, location: location, period: period, desc: jobDescription }

        setExperience(experience => [...experience, newElement]);
    }

    // remove experience item
    const removeExperienceItem = (id) => {
        setExperience(experience => experience.filter(experience => experience.id !== id));
    }


    return (
        <>
            <WebHeader />
            <UiContainer fluid={true} >
                <UiRow className="pd-m-0">
                    <UiCol lg="6" className="pd-padd pd-cv-left-6">

                        {
                            viewPersonalInfo &&
                            <ContactInfoForm
                                title="Tell us a little about yourself"
                                description="Let us know who you are, how employers can get in touch with you, and what your profession is."
                                firstName={firstName}
                                setFirstName={setFirstName}
                                lastName={lastName}
                                setLastName={setLastName}
                                occupation={occupation}
                                setOccupation={setOccupation}
                                email={email}
                                setEmail={setEmail}
                                address={address}
                                setAddress={setAddress}
                                phone={phone}
                                setPhone={setPhone}
                                date={date}
                                setDate={setDate}
                                onClick={OnsaveFormOne}
                                SaveBttonText="Save Contact Detail"
                            />
                        }

                        {
                            viewObjectives &&

                            <ObjectivesForm
                                title="Now, let's work on your resume objective"
                                description="This appears near the top of your resume. Impress employers with a strong opening statement that sums up your strengths and experience.
                            Objective"
                                onClick={OnsaveObjective}
                                SaveBttonText="Save Objective"
                                objective={objective}
                                setObjective={setObjective}

                            />
                        }

                        {
                            viewExperience &&

                            <ExperienceForm
                                title="Great! Let's fill out your work experience next"
                                description="Great! Let's fill out your work experience next"
                                SaveBttonText="Add Experience"
                                onClick={onSaveExp}
                                position={position}
                                setPosition={setPosition}
                                compName={compName}
                                setCompanyName={setCompanyName}
                                location={location}
                                setLocation={setLocation}
                                period={period}
                                setPeriod={setPeriod}
                                jobDescription={jobDescription}
                                setJobDescription={setJobDescription}
                                exper={experience}
                                removeItem={removeExperienceItem}
                                nextStep={nextFromExp}
                               
                            />
                        }




                    </UiCol>
                    <UiCol lg="6" className="pd-padd  pd-cv-right-6">
                        <UiCv
                            firstName={firstName}
                            lastName={lastName}
                            occupation={occupation}
                            email={email}
                            address={address}
                            phone={phone}
                            objective={objective}
                            exper={experience}
                            education={education}
                        />
                    </UiCol>
                </UiRow>
            </UiContainer>
        </>
    )
}