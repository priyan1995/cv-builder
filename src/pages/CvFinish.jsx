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

export const CvFinish = () => {

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
    const [viewOther, setViewOther] = useState(false);

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
        setViewOther(true);
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
        setOtherTitle(otherTitle);
        setOtherDesc(otherDesc);
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
                <UiRow className="pd-m-0 pd-cv-finish">                  
                    <UiCol lg="12" className="pd-padd  pd-cv-right-6">
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