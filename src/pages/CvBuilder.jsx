import React, { useState } from "react";
import { WebHeader } from "../components/Common/WebHeader";
import { UiContainer } from "../components/Common/UiContainr";
import { UiRow } from "../components/Common/UiRow";
import { UiCol } from "../components/Common/UiCol";
import { UiCv } from "../components/CvBuilder/UiCv";
import { UiTitle } from "../components/Common/UiTitle";
import { UiDateInput, UiTextInput } from "../components/Common/UiInput";
import dayjs, { Dayjs } from "dayjs";

export const CvBuilder = () => {

    const [firstName, setFirstName] = useState('Priyan');
    const [lastName, setLastName] = useState('Darshana');
    const [occupation, setOccupation] = useState('Web Developer');
    const [email, setEmail] = useState('priyan@gmail.com');
    const [address, setAddress] = useState('No.120, Kottawa, Pannipitiya.');
    const [phone, setPhone] = useState('0741251125');
     const [date, setDate] = useState();

    // const [date, setDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

     console.log(date);

    return (
        <>
            <WebHeader />
            <UiContainer fluid={true} >
                <UiRow className="pd-m-0">
                    <UiCol lg="6" className="pd-padd pd-cv-left-6">

                        <div className="pd-cv-inp-form-wrapper">

                            <UiTitle>Tell us a little about yourself</UiTitle>
                            <p className="pd-cv-desc">Let us know who you are, how employers can get in touch with you, and what your profession is.</p>

                            <form>
                                <UiRow>
                                    <h4 className="pd-form-inp-title">Contact Information</h4>
                                    <UiCol lg="6">
                                        <UiTextInput
                                            label="First Name"
                                            type="text"
                                            className="w-100 pd-mui-input"
                                            onChange={(e) => setFirstName(e.target.value)} 
                                            defaultValue={firstName}                                          
                                        />
                                    </UiCol>
                                    <UiCol lg="6">

                                    </UiCol>

                                    <UiCol lg="6">
                                        <UiTextInput
                                            label="Last Name"
                                            type="text"
                                            className="w-100 pd-mui-input"
                                            onChange={(e) => setLastName(e.target.value)}
                                            defaultValue={lastName}  
                                        />
                                    </UiCol>  

                                    <UiCol lg="12">
                                        <UiTextInput
                                            label="Occupation"
                                            type="text"
                                            className="w-100 pd-mui-input"
                                            onChange={(e) => setOccupation(e.target.value)}
                                            defaultValue={occupation}  
                                        />
                                    </UiCol>

                                    <UiCol lg="12">
                                        <UiTextInput
                                            label="Address"
                                            type="text"
                                            className="w-100 pd-mui-input"
                                            onChange={(e) => setAddress(e.target.value)}
                                            defaultValue={address}  
                                        />
                                    </UiCol>
                                    <UiCol lg="6">
                                        <UiTextInput
                                            label="Phone"
                                            type="text"
                                            className="w-100 pd-mui-input"
                                            onChange={(e) => setPhone(e.target.value)}
                                            defaultValue={phone}  
                                        />
                                    </UiCol>

                                    <UiCol lg="6">
                                        <UiTextInput
                                            label="Email"
                                            type="email"
                                            className="w-100 pd-mui-input"
                                            onChange={(e) => setEmail(e.target.value)}
                                            defaultValue={email}  
                                        />
                                    </UiCol>

                                    <UiCol lg="12">
                                        <UiDateInput
                                            label="Date of Birth"
                                            className="w-100 pd-mui-input"                                         
                                                                                    
                                        />
                                    </UiCol>

                                </UiRow>
                            </form>


                        </div>

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