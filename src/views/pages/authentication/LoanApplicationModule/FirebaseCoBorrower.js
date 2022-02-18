import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    useMediaQuery,
    MenuItem,
    Select,
    Stack
} from '@material-ui/core';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// style constant
const useStyles = makeStyles((theme) => ({
    redButton: {
        fontSize: '1rem',
        fontWeight: 500,
        backgroundColor: theme.palette.grey[50],
        border: '1px solid',
        borderColor: theme.palette.grey[100],
        color: theme.palette.grey[700],
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.875rem'
        }
    },
    signDivider: {
        flexGrow: 1
    },
    signText: {
        cursor: 'unset',
        margin: theme.spacing(2),
        padding: '5px 56px',
        borderColor: `${theme.palette.grey[100]} !important`,
        color: `${theme.palette.grey[900]}!important`,
        fontWeight: 500
    },
    loginIcon: {
        marginRight: '16px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '8px'
        }
    },
    loanInput: {
        ...theme.typography.customInput
    }
}));

const commonStyles = {
    padding: '14px 16px',
    bgcolor: 'grey.50',
    border: '1px solid',
    width: '100%',
    height: '7rem',
    marginBottom: '.5rem'
};

//= ==========================|| FIREBASE - CO-BORROWER INFORMATION ||===========================//

const FirebaseCoBorrower = ({ ...others }) => {
    const classes = useStyles();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const customization = useSelector((state) => state.customization);
    const [checked, setChecked] = React.useState(true);
    const now = new Date();
    const defaultDate = new Date(now.getFullYear() - 21, now.getMonth(), now.getDate());

    const [fname, setFname] = React.useState('');
    const [mname, setMname] = React.useState('');
    const [lname, setLname] = React.useState('');
    const [sname, setSname] = React.useState('');
    const [birthdate, setBirthdate] = React.useState('');
    const [cnumber, setCnumber] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [email, setEmail] = React.useState('');

    const Input = makeStyles('input')({
        display: 'none'
    });

    return (
        <>
            <Grid container justifyContent="flex-start">
                <Grid item>
                    <Typography color="red" variant="subtitle1" fontSize="0.8rem">
                        KINDLY READ THIS CAREFULLY:
                    </Typography>
                    <Typography variant="subtitle1" fontStyle='italic' fontWeight='bold' fontSize="0.7rem">
                        IF MARRIED:
                    </Typography>
                    <Typography variant="subtitle1" fontStyle='italic' fontWeight='regular' fontSize="0.7rem">
                    &nbsp;&nbsp;&nbsp;Please fill out this form with your spouse information.
                    </Typography>
                    <Typography variant="subtitle1" fontStyle='italic' fontWeight='bold' fontSize="0.7rem">
                        IF SINGLE:
                    </Typography>
                    <Typography variant="subtitle1" fontStyle='italic' fontWeight='regular' fontSize="0.7rem">
                    &nbsp;&nbsp;&nbsp;If you have a co-borrower, please fill out this form with his/her &nbsp;&nbsp;information. If none, please skip filling out.
                    </Typography>
                </Grid>
            </Grid>
            <Formik
                initialValues={{
                    email: '',
                    fname: '',
                    lname: '',
                    birthdate: '',
                    cnumber: '',
                    address: '',
                    city: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required(' '),
                    fname: Yup.string().max(255).required(' '),
                    lname: Yup.string().max(255).required(' '),
                    birthdate: Yup.date().required(),
                    cnumber: Yup.string().max(255).required(' '),
                    address: Yup.string().max(255).required(' '),
                    city: Yup.string().max(255).required(' '),
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <FormControl fullWidth variant="outlined" className={classes.loginInput}>
                            <TextField
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                fullWidth
                                label="First Name"
                                margin="normal"
                                name="fname"
                                type="text"
                                value={fname}
                                className={classes.loanInput}
                                onChange={(e) => {
                                    handleChange(e);
                                    setFname(e.target.value);
                                }}
                            />
                            <TextField
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                fullWidth
                                label="Middle Name (Optional)"
                                margin="normal"
                                name="mname"
                                type="text"
                                value={mname}
                                className={classes.loanInput}
                                onChange={(e) => {
                                    handleChange(e);
                                    setMname(e.target.value);
                                }}
                            />
                            <TextField
                                direction="row"
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                label="Last Name"
                                margin="normal"
                                name="lname"
                                type="text"
                                value={lname}
                                className={classes.loanInput}
                                onChange={(e) => {
                                    handleChange(e);
                                    setLname(e.target.value);
                                }}
                            />
                            <TextField
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                label="Suffix (Optional)"
                                margin="normal"
                                name="suffixname"
                                type="text"
                                value={sname}
                                className={classes.loanInput}
                                onChange={(e) => {
                                    handleChange(e);
                                    setSname(e.target.value);
                                }}
                            />
                        </FormControl>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                                <DatePicker
                                    fullWidth
                                    minDate={new Date('1900-01-01')}
                                    maxDate={new Date(now.getFullYear() - 21, now.getMonth(), now.getDate())}
                                    label="Birthdate"
                                    openTo="year"
                                    views={['year', 'month', 'day']}
                                    value={birthdate}
                                    onChange={(e) => {
                                        setBirthdate(e);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>
                        <FormControl
                            fullWidth
                            variant="outlined"
                            error={Boolean(touched.address && errors.address)}
                            
                        >
                            <TextField
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                fullWidth
                                label="Address"
                                margin="normal"
                                name="address"
                                type="text"
                                value={address}
                                className={classes.loanInput}
                                onChange={(e) => {
                                        handleChange(e);
                                        setAddress(e.target.value);
                                    }}
                            />
                            <FormHelperText id="standard-weight-helper-text-cnumber-register">
                                e.g. House no. or Unit no. Street Name, Brgy.
                            </FormHelperText>
                        </FormControl>
                        <Stack spacing={3}>
                            <TextField
                                select
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                style={{ marginTop: '3px', marginBottom: '2px' }}
                                id="outlined-adornment-city-register"
                                label="City"
                                margin="normal"
                                name="city"
                                value={city}
                                onChange={(e) => {
                                        handleChange(e);
                                        setCity(e.target.value);
                                    }}
                            >
                                <MenuItem value="CaloocanC">Caloocan City</MenuItem>
                                <MenuItem value="MandaluyongC">Mandaluyong City</MenuItem>
                            </TextField>
                        </Stack>
                        <Stack spacing={3}>
                            <TextField
                                style={{ marginTop: '15px' }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" style={{ marginTop: '20px', marginRight: '1px' }}>
                                            +639
                                        </InputAdornment>
                                    ),
                                    maxLength: 10
                                }}
                                id="outlined-adornment-cnumber-register"
                                label="Contact Number"
                                margin="normal"
                                name="cnumber"
                                type="text"
                                value={cnumber}
                                className={classes.loanInput}
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                    setCnumber(e.target.value);
                                }}
                                onInput={(e) => {
                                    e.target.value = Math.max(0, parseInt(e.target.value, 10)).toString().slice(0, 9);
                                }}
                            />
                            <FormHelperText
                                id="standard-weight-helper-text-cnumber-register"
                                style={{ marginTop: '1px', marginBottom: '1px', padding: '5px 15px' }}
                            >
                                e.g. (09123456789) supports PH numbers only.
                            </FormHelperText>
                        </Stack>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="outlined-adornment-email-register">
                                Email Address
                            </InputLabel>
                            <OutlinedInput
                                required
                                id="outlined-adornment-email-register"
                                type="email"
                                value={email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    setEmail(e.target.value);
                                }}
                                inputProps={{
                                    classes: {
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text-email-register">
                                    {' '}
                                    {errors.email}{' '}
                                </FormHelperText>
                            )}
                        </FormControl>
                        {errors.submit && (
                            <Box
                                sx={{
                                    mt: 3
                                }}
                            >
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}
                        <Box
                            sx={{
                                mt: 2
                            }}
                        >
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    // disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    component={Link}
                                    to="/pages/loanapplication/employmentinformation"
                                >
                                    Continue
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseCoBorrower;
