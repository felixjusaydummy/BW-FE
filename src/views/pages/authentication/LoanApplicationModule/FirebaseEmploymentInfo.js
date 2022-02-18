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

//= ==========================|| FIREBASE - LOAN APPLICATION FORM - EMPLOYMENT INFORMATION ||===========================//

const FirebaseEmploymentInfo = ({ ...others }) => {
    const classes = useStyles();
    const scriptedRef = useScriptRef();

    const [company, setCompany] = React.useState('');
    const [caddress, setCaddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [telephone, setTelephone] = React.useState('');
    const [position, setPosition] = React.useState('');
    const [tenure, setTenure] = React.useState('');
    const [grossmincome, setGrossmincome] = React.useState('');
    const [typeincome, setTypeincome] = React.useState('');
    const [otherincome, setOtherincome] = React.useState('');

    return (
        <>
            <Formik
                initialValues={{
                    company: '',
                    caddress: '',
                    city: '',
                    telephone: '',
                    position: '',
                    tenure: '',
                    grossmincome: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    company: Yup.string().max(255).required(' '),
                    caddress: Yup.string().max(255).required(' '),
                    city: Yup.string().max(255).required(' '),
                    telephone: Yup.string().max(255).required(' '),
                    tenure: Yup.string().max(255).required(' '),
                    position: Yup.string().max(255).required(' '),
                    grossmincome: Yup.string().max(255).required(' ')
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
                        <Box sx={{ m: 2 }} />
                        <FormControl fullWidth variant="outlined" error={Boolean(touched.company && errors.company)}>
                            <TextField
                                required
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                style={{ marginTop: '3px', marginBottom: '2px' }}
                                id="outlined-adornment-property-type"
                                label="Company Name"
                                margin="normal"
                                name="company"
                                value={company}
                                onBlur={handleBlur}
                                error={Boolean(touched.company && errors.company)}
                                onChange={(e) => {
                                    handleChange(e);
                                    setCompany(e.target.value);
                                }}
                            />
                        </FormControl>
                        <Box sx={{ m: 1 }} />
                        <FormControl fullWidth variant="outlined" error={Boolean(touched.caddress && errors.caddress)}>
                            <TextField
                                required
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                style={{ marginTop: '3px', marginBottom: '2px' }}
                                id="outlined-adornment-property-type"
                                label="Company Address"
                                margin="normal"
                                name="caddress"
                                value={caddress}
                                onBlur={handleBlur}
                                error={Boolean(touched.caddress && errors.caddress)}
                                onChange={(e) => {
                                    handleChange(e);
                                    setCaddress(e.target.value);
                                }}
                            />
                            <FormHelperText id="standard-weight-helper-text-cnumber-register">
                                e.g. House no. or Unit no. Street Name, Brgy.
                            </FormHelperText>
                        </FormControl>
                        <Box sx={{ m: 0.5 }} />
                        <FormControl fullWidth variant="outlined" error={Boolean(touched.city && errors.city)}>
                            <TextField
                                required
                                select
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                style={{ marginTop: '3px', marginBottom: '2px' }}
                                id="outlined-adornment-length-of-stay"
                                label="City"
                                margin="normal"
                                name="city"
                                value={city}
                                onBlur={handleBlur}
                                error={Boolean(touched.city && errors.city)}
                                onChange={(e) => {
                                    handleChange(e);
                                    setCity(e.target.value);
                                }}
                            >
                                <MenuItem value="mandaluyong">Mandaluyong City</MenuItem>
                                <MenuItem value="manila">Manila City</MenuItem>
                                <MenuItem value="pasig">Pasig City</MenuItem>
                                <MenuItem value="pasay">Pasay City</MenuItem>
                                <MenuItem value="quezon">Quezon City</MenuItem>
                                <MenuItem value="taguig">Taguig City</MenuItem>
                            </TextField>
                        </FormControl>
                        <FormControl
                            fullWidth
                            variant="outlined"
                            error={Boolean(touched.telephone && errors.telephone)}
                            className={classes.loanInput}
                        >
                            <TextField
                                required
                                inputProps={{
                                    maxLength: 9,
                                    minLength: 9,
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                id="outlined-adornment-cnumber-register"
                                label="Company Telephone Number"
                                margin="normal"
                                name="telephone"
                                type="text"
                                value={telephone}
                                className={classes.loanInput}
                                error={Boolean(touched.telephone && errors.telephone)}
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                    setTelephone(e.target.value);
                                }}
                            />
                            <FormHelperText id="standard-weight-helper-text-telephone">
                                New telephone number format e.g. (81235678).
                            </FormHelperText>
                        </FormControl>
                        <FormControl fullWidth variant="outlined" error={Boolean(touched.tenure && errors.tenure)}>
                            <TextField
                                required
                                select
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                style={{ marginTop: '3px', marginBottom: '2px' }}
                                id="outlined-adornment-length-of-stay"
                                label="Tenure in Company"
                                margin="normal"
                                name="tenure"
                                value={tenure}
                                onBlur={handleBlur}
                                error={Boolean(touched.tenure && errors.tenure)}
                                onChange={(e) => {
                                    handleChange(e);
                                    setTenure(e.target.value);
                                }}
                            >
                                <MenuItem value="tenure1">Less than 6 months</MenuItem>
                                <MenuItem value="tenure2">6 months to less than 2 years</MenuItem>
                                <MenuItem value="tenure3">2 to 5 years</MenuItem>
                                <MenuItem value="tenure4">5 years or more</MenuItem>
                            </TextField>
                        </FormControl>
                        <Box sx={{ m: 1 }} />
                        <FormControl fullWidth variant="outlined" error={Boolean(touched.position && errors.position)}>
                            <TextField
                                required
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                style={{ marginTop: '3px', marginBottom: '2px' }}
                                id="outlined-adornment-property-type"
                                label="Position"
                                margin="normal"
                                name="position"
                                value={position}
                                onBlur={handleBlur}
                                error={Boolean(touched.position && errors.position)}
                                onChange={(e) => {
                                    handleChange(e);
                                    setPosition(e.target.value);
                                }}
                            />
                        </FormControl>
                        <Box sx={{ mb: 1 }} />
                        <Stack spacing={5}>
                            <TextField
                                required
                                select
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                style={{ marginTop: '3px', marginBottom: '2px' }}
                                id="outlined-adornment-loan-income"
                                label="Gross Monthly Income"
                                margin="normal"
                                name="grossmincome"
                                value={grossmincome}
                                onBlur={handleBlur}
                                error={Boolean(touched.grossmincome && errors.grossmincome)}
                                onChange={(e) => {
                                    handleChange(e);
                                    setGrossmincome(e.target.value);
                                }}
                            >
                                <MenuItem value="range1">₱40,000 - P45,000</MenuItem>
                                <MenuItem value="range2">₱45,001 - ₱50,000</MenuItem>
                                <MenuItem value="range3">₱50,001 - ₱55,000</MenuItem>
                                <MenuItem value="range4">₱55,001 - ₱60,000</MenuItem>
                                <MenuItem value="range5">₱60,001 - up</MenuItem>
                            </TextField>
                        </Stack>
                        <Box sx={{ m: 2 }} />
                        <Typography>Other source of income (if any):</Typography>
                        <FormControl fullWidth variant="outlined">
                            <TextField
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                style={{ marginTop: '3px', marginBottom: '2px' }}
                                id="outlined-adornment-property-type"
                                label="Type of Income"
                                margin="normal"
                                name="typeincome"
                                value={typeincome}
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    setTypeincome(e.target.value);
                                }}
                            />
                        </FormControl>
                        <Box sx={{ m: 1.5 }} />
                        <FormControl fullWidth variant="outlined">
                            <CurrencyTextField
                                variant="outlined"
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                style={{ marginTop: '3px', marginBottom: '2px' }}
                                id="outlined-adornment-property-type"
                                label="Amount"
                                currencySymbol=""
                                textAlign="left"
                                margin="normal"
                                name="otherincome"
                                value={otherincome}
                                onBlur={handleBlur}
                                onChange={(event, otherincome) => setOtherincome(otherincome)}
                            />
                        </FormControl>
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
                                    // disabled={isSubmitting}
                                    disabled={!(company && caddress && telephone && position && tenure && grossmincome)}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    component={Link}
                                    to="/pages/loanapplication/existingloan"
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

export default FirebaseEmploymentInfo;
