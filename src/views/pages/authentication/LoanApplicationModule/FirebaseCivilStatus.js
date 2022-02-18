import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@material-ui/core';
import FirebaseSpouseInfo from './FirebaseSpouseInfo';

export default function FirebaseCivilStatus() {
    const [value, setValue] = React.useState('');
    const [spouse, setSpouse] = React.useState('');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setSpouse(' ');
    };

   // const handleChange = (event) => {
       // event.preventDefault();

       // if (value === 'married') {
           // setSpouse(<FirebaseSpouseInfo />);
       // } else {
           // setSpouse('');
       // }
   // };

    return (
        <form>
            <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                <Typography>Civil Status:</Typography>
                <RadioGroup value={value} onChange={handleRadioChange}>
                    <FormControlLabel value="single" control={<Radio />} label="Single" />
                    <FormControlLabel value="married" control={<Radio />} label="Married" />
                </RadioGroup>
            </FormControl>
        </form>
    );
}

// removed onChange={handleChange} from <form> and <FormControlLabel>