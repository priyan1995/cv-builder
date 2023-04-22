import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Input, TextField } from "@mui/material";
import React from "react";



export const UiTextInput = (props) => {
    return (
        <>
            <TextField
                id={props.id}
                label={props.label}
                type={props.type}
                className={props.className}
            />

        </>
    )
}

export const UiCheckBox = (props) => {
    return (
        <>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label={props.label} />
            </FormGroup>
        </>
    )
}