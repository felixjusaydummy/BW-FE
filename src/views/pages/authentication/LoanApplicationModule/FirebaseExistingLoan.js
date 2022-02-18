import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CurrencyTextField from '@unicef/material-ui-currency-textfield/dist/CurrencyTextField';
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

//= ==========================|| FIREBASE - LOAN APPLICATION FORM - EXISTING LOAN ||===========================//

const FirebaseExistingLoan = ({ ...others }) => {
    const classes = useStyles();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const customization = useSelector((state) => state.customization);
    const [showPassword, setShowPassword] = React.useState(false);
    const [checked, setChecked] = React.useState(true);
    const now = new Date();
    const defaultDate = new Date(now.getFullYear() - 21, now.getMonth(), now.getDate());

    const [loantype, setLoantype] = React.useState('');
    const [bankname, setBankname] = React.useState('');
    const [monthly, setMonthly] = React.useState('');
    const [outbalance, setOutbalance] = React.useState('');
    const [availmentdate, setAvailmentdate] = React.useState('');

    const [strength, setStrength] = React.useState(0);
    const [level, setLevel] = React.useState('');

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };

    const Input = makeStyles('input')({
        display: 'none'
    });

    useEffect(() => {
        changePassword('123456');
    }, []);

    return (
        <>
            <Grid container justifyContent="flex-start">
                <Grid item>
                    <Box sx={{ m: 2 }} />
                    <Typography variant="h5" fontSize="0.8rem">Do you have any existing credit/loan with us or another bank?</Typography>
                    <Typography fontStyle='italic' fontSize="0.75rem">&nbsp;&nbsp;If any: please fill out this form.</Typography>
                    <Typography fontStyle='italic' fontSize="0.75rem">&nbsp;&nbsp;If none: please skip.</Typography>
                </Grid>
            </Grid>
            <Formik
                initialValues={{
                    loantype: '',
                    bankname: '',
                    monthly: '',
                    outbalance: '',
                    availmentdate: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    loantype: Yup.string().max(255).required(' '),
                    bankname: Yup.string().max(255).required(' '),
                    monthly: Yup.string().max(255).required(' '),
                    outbalance: Yup.date().required(),
                    availmentdate: Yup.string().max(255).required(' ')
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
                        <FormControl
                            fullWidth
                            variant="outlined"
                            className={classes.loanInput}
                        >
                            <TextField
                                fullWidth
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                label="Type of Credit/Loan"
                                margin="normal"
                                name="loantype"
                                type="text"
                                value={loantype}
                                onChange={(e) => {
                                    handleChange(e);
                                    setLoantype(e.target.value);
                                }}
                            />
                            <TextField
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                fullWidth
                                label="Name of Bank"
                                margin="normal"
                                name="bankname"
                                value={bankname}
                                type="text"
                                className={classes.loanInput}
                                onChange={(e) => {
                                    handleChange(e);
                                    setBankname(e.target.value);
                                }}
                            />
                            <CurrencyTextField
                                variant="outlined"
                                fullWidth
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                label="Monthly Amortization"
                                margin="normal"
                                name="monthly"
                                currencySymbol=""
                                textAlign="left"
                                type="text"
                                value={monthly}
                                className={classes.loanInput}
                                onChange={(event, monthly) => setMonthly(monthly)}
                            />
                            <CurrencyTextField
                                fullWidth
                                variant="outlined"
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                label="Outstanding Balance"
                                margin="normal"
                                name="outbalance"
                                value={outbalance}
                                currencySymbol=""
                                textAlign="left"
                                type="text"
                                className={classes.loanInput}
                                onChange={(event, outbalance) => setOutbalance(outbalance)}
                            />
                        </FormControl>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                                <DatePicker
                                    fullWidth
                                    minDate={new Date('1900-01-01')}
                                    // ensure if future dates need to be included
                                    maxDate={new Date(now.getFullYear() - 21, now.getMonth(), now.getDate())}
                                    label="Date of Availment"
                                    openTo="year"
                                    views={['year', 'month', 'day']}
                                    value={availmentdate}
                                    onChange={(e) => {
                                        setAvailmentdate(e);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>
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
                                    to="/pages/loanapplication/applicationsubmission"
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

export default FirebaseExistingLoan;
