import React, { useRef, useState } from "react";
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
import { UiButton } from "../components/Common/UiButtons";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import { ProfileImage } from "../mockData/ProfileImage";

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
    const [profileImage, setProfileImage] = useState(ProfileImage);
    const [occupation, setOccupation] = useState('Web Developer');
    const [email, setEmail] = useState('priyan@gmail.com');
    const [address, setAddress] = useState('No.120, Kottawa, Pannipitiya.');
    const [phone, setPhone] = useState('0741251125');

    // objectives
    const [objective, setObjective] = useState(objs);

    // experience
    const [experience, setExperience] = useState(experienceArr);

    // education
    const [education, setEducation] = useState(educationeArr);

    // langauges
    const [lang, setLang] = useState(languagesArr);

    // skills
    const [skills, setSkills] = useState(skillArr);

    // other
    const [otherTitle, setOtherTitle] = useState(otherFTitle);
    const [otherDesc, setOtherDesc] = useState(otherFDesc);


    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Cv',
        onAfterPrint: () => alert("Print Success")
    })



    return (
        <>
            <WebHeader />
            <div ref={componentRef} >
                <UiContainer fluid={true}>
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
                                profileImage={profileImage}
                            />
                        </UiCol>

                    </UiRow>
                </UiContainer>


            </div>
            <UiContainer>
                <UiRow>
                    <UiCol lg="12 pd-download text-center pd-btn-group">
                        <UiButton className="pd-primary-btn pd-large-pad " onClick={handlePrint}> Download</UiButton>
                        <UiButton className="pd-primary-btn pd-large-pad pd-link-btn" > <Link to="/cv">Edit CV</Link></UiButton>
                    </UiCol>
                </UiRow>
            </UiContainer>
        </>
    )
}