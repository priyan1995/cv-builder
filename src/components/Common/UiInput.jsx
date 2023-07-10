import { Box, Checkbox, Chip, FormControl, FormControlLabel, FormGroup, FormLabel, Input, InputLabel, MenuItem, TextField, TextareaAutosize } from "@mui/material";
import React from "react";
import { pink } from '@mui/material/colors';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Textarea } from "@mui/joy";
import FileUplImg from '../../styles/img/file-upload.png'
import { useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
// import MenuItem from '@mui/material/MenuItem';

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

export const UiTextArea = (props) => {
    return (
        <>
            <TextareaAutosize
                placeholder={props.placeholder}
                minRows={props.minRows}
                className={props.className}
                defaultValue={props.defaultValue}
                onChange={props.onChange}
            />
        </>
    )
}

export const UiFileInput = (props) => {
    return (
        <>
            <div className="pd-fi-wrp">
                <label>
                    <div>
                        <img src={FileUplImg} />
                        {props.label}
                    </div>
                </label>
                <Input
                    className={props.className}
                    type="file"
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        </>
    )
}

export const UiSelectInput = (props) => {

    const [age, setAge] = useState('10');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label={props.label}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name: string, personName: string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}




export default function MultipleSelectChip(...args: []) {
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}