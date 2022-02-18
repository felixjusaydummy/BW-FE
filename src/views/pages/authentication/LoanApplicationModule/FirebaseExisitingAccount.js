import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { Typography } from '@material-ui/core';
import FirebaseSpouseInfo from './FirebaseSpouseInfo';

export default function FirebaseExistingAccount() {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleChange = (event) => {
        event.preventDefault();

        if (value === 'married') {
            setHelperText(<FirebaseSpouseInfo />);
            setError(false);
        } else {
            setHelperText('');
            setError(true);
        }
    };

    return (
        <form onChange={handleChange}>
            <FormControl sx={{ m: 1 }} component="fieldset" error={error} variant="standard">
                <Typography>Do you have an existing BPI/BPI Family Savings Account?</Typography>
                <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                    <FormControlLabel onChange={handleChange} value="married" control={<Radio />} label="Single" />
                    <FormControlLabel onChange={handleChange} value="single" control={<Radio />} label="Married" />
                </RadioGroup>
                <FormControl>{helperText}</FormControl>
            </FormControl>
        </form>
    );
}