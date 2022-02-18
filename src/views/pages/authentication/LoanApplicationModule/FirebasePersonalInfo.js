import React from 'react';
import { Link } from 'react-router-dom';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    FormHelperText,
    Grid,
    InputLabel,
    OutlinedInput,
    Radio,
    RadioGroup,
    TextField,
    Typography,
    MenuItem,
    Stack
} from '@material-ui/core';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import HousingLoanCalculator from './HousingLoanCalculator';
import FirebaseCivilStatus from './FirebaseCivilStatus';

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

//= ==========================|| FIREBASE - LOAN APPLICATION FORM - PERSONAL INFORMATION ||===========================//

const FirebasePersonalInfo = ({ ...others }) => {
    const classes = useStyles();
    const scriptedRef = useScriptRef();

    const [citizenship, setCitizenship] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [civilstatus, setCivilStatus] = React.useState('');
    const [stay, setStay] = React.useState('');
    const [residence, setResidence] = React.useState('');

    return (
        <>
            <Formik
                initialValues={{
                    citizenship: '',
                    address: '',
                    civilstatus: '',
                    stay: '',
                    residence: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    citizenship: Yup.string().max(255).required(' '),
                    address: Yup.string().max(255).required(' '),
                    civilstatus: Yup.string().max(255).required(' '),
                    stay: Yup.string().max(255).required(' '),
                    residence: Yup.string().max(255).required(' ')
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
                        <Box sx={{ mb: 2 }} />
                        <FormControl fullWidth variant="outlined" error={Boolean(touched.citizenship && errors.citizenship)}>
                            <TextField
                                required
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                style={{ marginTop: '3px', marginBottom: '2px' }}
                                id="outlined-adornment-property-type"
                                label="Citizenship"
                                margin="normal"
                                name="citizenship"
                                value={citizenship}
                                onBlur={handleBlur}
                                error={Boolean(touched.citizenship && errors.citizenship)}
                                onChange={(e) => {
                                    handleChange(e);
                                    setCitizenship(e.target.value);
                                }}
                            />
                        </FormControl>
                        <FormControl
                            variant="outlined"
                            fullWidth
                            error={Boolean(touched.civilstatus && errors.civilstatus)}
                            className={classes.loanInput}
                        >
                            <FirebaseCivilStatus value={civilstatus} error={Boolean(touched.civilstatus && errors.civilstatus)} />
                        </FormControl>
                        <FormControl
                            variant="outlined"
                            fullWidth
                            error={Boolean(touched.address && errors.address)}
                            className={classes.loanInput}
                        >
                            <TextField
                                required
                                style={{ marginTop: '3px', marginBottom: '2px' }}
                                id="outlined-adornment-address"
                                label="Address"
                                margin="normal"
                                name="address"
                                value={address}
                                onBlur={handleBlur}
                                error={Boolean(touched.address && errors.address)}
                                onChange={(e) => {
                                    handleChange(e);
                                    setAddress(e.target.value);
                                }}
                            />
                            <FormHelperText id="standard-weight-helper-text-cnumber-register">
                                e.g. House no. or Unit no. Street Name, Brgy.
                            </FormHelperText>
                        </FormControl>
                        <Stack spacing={5}>
                            <TextField
                                required
                                select
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                style={{ marginTop: '3px', marginBottom: '2px' }}
                                id="outlined-adornment-length-of-stay"
                                label="Length of Stay"
                                margin="normal"
                                name="stay"
                                value={stay}
                                onBlur={handleBlur}
                                error={Boolean(touched.stay && errors.stay)}
                                onChange={(e) => {
                                    handleChange(e);
                                    setStay(e.target.value);
                                }}
                            >
                                <MenuItem value="residency1">Less than 6 months</MenuItem>
                                <MenuItem value="residency2">6 months to less than 2 years</MenuItem>
                                <MenuItem value="residency3">2 to 5 years</MenuItem>
                                <MenuItem value="residency4">5 years or more</MenuItem>
                            </TextField>
                        </Stack>
                        <Box sx={{ mb: 2 }} />
                        <Stack spacing={5}>
                            <TextField
                                required
                                select
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                style={{ marginTop: '3px', marginBottom: '2px' }}
                                id="outlined-adornment-type-of-residence"
                                label="Type of Residence"
                                margin="normal"
                                name="residence"
                                value={residence}
                                onBlur={handleBlur}
                                error={Boolean(touched.residence && errors.residence)}
                                onChange={(e) => {
                                    handleChange(e);
                                    setResidence(e.target.value);
                                }}
                            >
                                <MenuItem value="free">Used Free or Living with Parents/Relatives</MenuItem>
                                <MenuItem value="Owned1">Owned (Fully Paid)</MenuItem>
                                <MenuItem value="Rent">Renting</MenuItem>
                                <MenuItem value="Owned2">Owned (Amortizing a Housing Loan)</MenuItem>
                            </TextField>
                        </Stack>
                        <Grid container>
                            <Box sx={{ m: 1 }} />
                        </Grid>
                        <Box sx={{ m: 1 }} />
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
                                mt: 4
                            }}
                        >
                            <AnimateButton>
                                <Button
                                    style={{ marginTop: "-20px" }}
                                    disableElevation
                                    disabled={!(citizenship && address && stay && residence)}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    component={Link}
                                    to="/pages/loanapplication/coborrowerinformation"
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

export default FirebasePersonalInfo;
