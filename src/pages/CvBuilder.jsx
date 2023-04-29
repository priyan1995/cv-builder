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

export const CvBuilder = () => {

    const [firstName, setFirstName] = useState('Priyan');
    const [lastName, setLastName] = useState('Darshana');
    const [occupation, setOccupation] = useState('Web Developer');
    const [email, setEmail] = useState('priyan@gmail.com');
    const [address, setAddress] = useState('No.120, Kottawa, Pannipitiya.');
    const [phone, setPhone] = useState('0741251125');
    const [date, setDate] = useState();

    // const [date, setDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

    //  console.log(date);

    const [viewPersonalInfo, setViewPersonalInfo] = useState(true);

    const OnsaveFormOne = () => {
        console.log('saved Contact');
        setViewPersonalInfo(false);
    }

    const OnsaveObjective = () => {
        console.log('saved Objective');
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

                        <ObjectivesForm
                            title="Now, let's work on your resume objective"
                            description="This appears near the top of your resume. Impress employers with a strong opening statement that sums up your strengths and experience.
                            Objective
                            "
                            onClick={OnsaveObjective}
                            SaveBttonText="Save Objective"

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

                        />
                    </UiCol>
                </UiRow>
            </UiContainer>
        </>
    )
}