import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Input, TextField } from "@mui/material";
import React from "react";
import { pink } from '@mui/material/colors';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const UiTextInput = (props) => {
    return (
        <>
            <TextField
                id={props.id}
                label={props.label}
                type={props.type}
                className={props.className}
                value={props.value}
                onChange={props.onChange}
                defaultValue={props.defaultValue}
            />

        </>
    )
}

export const UiCheckBox = (props) => {
    return (
        <>
            <FormGroup>
                <FormControlLabel control={<Checkbox
                    sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                            color: pink[600],
                        },
                    }}
                />} label={props.label} />
            </FormGroup>
        </>
    )
}

export const UiDateInput = (props) => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        label={props.label}
                        className={props.className}
                        onChange={props.onChange}
                        value={props.value}
                        defaultValue={props.defaultValue}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </>
    )
}