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
import { EducationForm } from "../components/CvBuilder/Forms/EducationForm";
import { LanguagesData } from "../mockData/Languages";
import { LanguagesForm } from "../components/CvBuilder/Forms/LanguagesForm";
import { SkillData } from "../mockData/Skills";
import { SkillsForm } from "../components/CvBuilder/Forms/SkillsForm";
import { OtherData } from "../mockData/Other";
import { OtherForm } from "../components/CvBuilder/Forms/OtherForm";

export const CvBuilder = () => {

    // get mock data
    const objs = Objectives;
    const experienceArr = ExperienceData;
    const educationeArr = EducationData;
    const languagesArr = LanguagesData;
    const skillArr = SkillData;
    const otherFTitle = "Other";
    const otherFDesc = "Meticulous web developer with a proven track record in creating remarkable and responsive solutions in the least possible time. Have 7+ years of experience in crafting and testing user-friendly interfaces.";

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
    const [degree, setDegree] = useState('');
    const [university, setUniversity] = useState('');
    const [locationEdu, setLocationEdu] = useState('');
    const [periodEdu, setPeriodEdu] = useState('');
    const [eduDesc, setEduDesc] = useState('');

    // langauges
    const [lang, setLang] = useState(languagesArr);
    const [language, setLanguage] = useState('');
    const [skillLevel, setSkillLevel] = useState('');
    const [langDesc, setLangDesc] = useState('');

    // skills
    const [skills, setSkills] = useState(skillArr);
    const [skillTitle, setSkillTitle] = useState('');

    // other
    const [otherTitle, setOtherTitle] = useState(otherFTitle);
    const [otherDesc, setOtherDesc] = useState(otherFDesc);


    // wizard steps
    const [viewPersonalInfo, setViewPersonalInfo] = useState(true);
    const [viewObjectives, setViewObjectives] = useState(false);
    const [viewExperience, setViewExperience] = useState(false);
    const [viewEducation, setViewEducation] = useState(false);
    const [viewLang, setViewLang] = useState(false);
    const [viewSkills, setViewSkills] = useState(false);

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
        setViewEducation(true);
    }

    const nextFromEdu = () => {
        setViewEducation(false);
        setViewLang(true);
    }

    // Langauge form next
    const nextFromLang = () => {
        setViewLang(false);
        setViewSkills(true);

    }

    // skills form next
    const nextFromSkills = () => {
        setViewSkills(false);
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

    // save education data
    const onSaveEduc = (e) => {
        setDegree(e.target.value);
        setUniversity(e.target.value);
        setLocationEdu(e.target.value)
        setPeriodEdu(e.target.value);
        setEduDesc(e.target.value);

        const newEduElement = { id: '3', degree: degree, uni: university, location: locationEdu, period: periodEdu, desc: eduDesc }

        setEducation(education => [...education, newEduElement]);

        console.log(newEduElement);
    }

    // save language data
    const onSaveLang = (e) => {

        setLanguage(e.target.value);
        setSkillLevel(e.target.value);
        setLangDesc(e.target.value);

        const newLang = { id: '3', language: language, skillLevel: skillLevel, desc: langDesc };
        setLang(lang => [...lang, newLang]);
    }

    // save skill
    const onSaveSkill = (e) => {
        setSkillTitle(e.target.value);

        const newSkill = { id: '13', name: skillTitle, };
        setSkills(skills => [...skills, newSkill]);
    }

    // save Other
    const onSaveOther = (e) => {

        // setOtherTitle(e.target.value);
        // setOtherDesc(e.target.value);
        console.log('saved');
        setOtherTitle('asdfasdgfasgf');

        // const newOther = { id: '1', title: otherTitle, desc: otherDesc };
        // setOthData(othData => [...othData, newOther]);
    }


    // remove experience item
    const removeExperienceItem = (id) => {
        setExperience(experience => experience.filter(experience => experience.id !== id));
    }
    // remove education item
    const removeEducationItem = (id) => {
        setEducation(education => education.filter(education => education.id !== id));
    }
    // remove language item
    const removeLanguage = (id) => {
        setLang(lang => lang.filter(lang => lang.id !== id));
    }
    // remove Skill
    const removeSkill = (id) => {
        setSkills(skills => skills.filter(skills => skills.id !== id));
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

                        {
                            viewEducation &&

                            <EducationForm
                                title="Awesome! Now, what qualifications do you have?"
                                description="Start with your most recent period of education and work backwards. If you have many, just add the most recent and relevant ones."
                                SaveBttonText="Add Education"
                                degree={degree}
                                setDegree={setDegree}
                                university={university}
                                setUniversity={setUniversity}
                                locationEdu={locationEdu}
                                setLocationEdu={setLocationEdu}
                                periodEdu={periodEdu}
                                setPeriodEdu={setPeriodEdu}
                                eduDesc={eduDesc}
                                setEduDesc={setEduDesc}
                                next={nextFromEdu}
                                eduData={education}
                                removeItem={removeEducationItem}
                                onClick={onSaveEduc}
                            />
                        }

                        {
                            viewLang &&

                            <LanguagesForm
                                title="Speak multiple languages?"
                                description="Add your languages and levels of ability here (only if you speak more than one language). Languages"
                                SaveBttonText="Add Language"
                                lang={lang}
                                setLang={setLang}
                                language={language}
                                setLanguage={setLanguage}
                                skillLevel={skillLevel}
                                setSkillLevel={setSkillLevel}
                                langDesc={langDesc}
                                setLangDesc={setLangDesc}
                                removeItem={removeLanguage}
                                next={nextFromLang}
                                onClick={onSaveLang}

                            />
                        }

                        {
                            viewSkills &&

                            <SkillsForm
                                title="Almost finished the basics! Just add a list of skills"
                                description="The skills you add should reflect the requirements of the job you're applying for."
                                SaveBttonText="Add Skill"
                                skillTitle={skillTitle}
                                setSkillTitle={setSkillTitle}
                                skills={skills}
                                removeItem={removeSkill}
                                onClick={onSaveSkill}
                                next={nextFromSkills}
                            />
                        }


                        <OtherForm
                            title="Here’s where you can create your own custom section!"
                            description="Call this section whatever you want and make it your own. It can be something specific such as 'IT Skills' or 'Driving Experience', or it could be something creative to help you stand out."
                            otherTitle={otherTitle}
                            setOtherTitle={setOtherTitle}
                            otherDesc={otherDesc}
                            setOtherDesc={setOtherDesc}
                            SaveBttonText="Save"
                            onClick={onSaveOther}

                        />

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
                            lang={lang}
                            skillData={skills}
                            otherFTitle={otherTitle}
                            otherFDesc={otherDesc}
                        />
                    </UiCol>
                </UiRow>
            </UiContainer>
        </>
    )
}