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

//= ==========================|| FIREBASE - REGISTER ||===========================//

const FirebaseSpouseInfo = ({ ...others }) => {
    const classes = useStyles();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const customization = useSelector((state) => state.customization);
    const [showPassword, setShowPassword] = React.useState(false);
    const [checked, setChecked] = React.useState(true);
    const now = new Date();
    const defaultDate = new Date(now.getFullYear() - 21, now.getMonth(), now.getDate());

    const [fname, setFname] = React.useState('');
    const [lname, setLname] = React.useState('');
    const [birthdate, setBirthdate] = React.useState('');
    const [cnumber, setCnumber] = React.useState('');
    const [citizenship, setCitizenship] = React.useState('');

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
                    <Typography color="#424242" variant="subtitle2" fontSize="0.8rem">
                        Please enter spouse&apos;s information:
                    </Typography>
                </Grid>
            </Grid>
            <Formik
                initialValues={{
                    fname: '',
                    lname: '',
                    citizenship: '',
                    birthdate: '',
                    cnumber: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    fname: Yup.string().max(255).required(' '),
                    lname: Yup.string().max(255).required(' '),
                    citizenship: Yup.string().max(255).required(' '),
                    birthdate: Yup.date().required(),
                    cnumber: Yup.string().max(255).required(' ')
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
                            error={Boolean(touched.cnumber && errors.cnumber)}
                            className={classes.loanInput}
                        >
                            <TextField
                                required
                                fullWidth
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                label="First Name"
                                margin="normal"
                                name="fname"
                                type="text"
                                value={fname}
                                className={classes.loanInput}
                                error={Boolean(touched.fname && errors.fname)}
                                onBlur={handleBlur}
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
                                className={classes.loanInput}
                            />
                            <TextField
                                required
                                fullWidth
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                label="Last Name"
                                margin="normal"
                                name="lname"
                                type="text"
                                value={lname}
                                className={classes.loanInput}
                                error={Boolean(touched.lname && errors.lname)}
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    setLname(e.target.value);
                                }}
                            />
                            <TextField
                                fullWidth
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                label="Suffix (Optional)"
                                margin="normal"
                                name="suffixname"
                                type="text"
                                className={classes.loanInput}
                            />
                            <TextField
                                fullWidth
                                required
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                label="Citizenship"
                                margin="normal"
                                name="citizenship"
                                type="text"
                                value={citizenship}
                                className={classes.loanInput}
                                error={Boolean(touched.citizenship && errors.citizenship)}
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    setCitizenship(e.target.value);
                                }}
                            />
                        </FormControl>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                                <DatePicker
                                    fullWidth
                                    required
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
                            error={Boolean(touched.cnumber && errors.cnumber)}
                            className={classes.loanInput}
                        >
                            <TextField
                                required
                                inputProps={{
                                    maxLength: 11,
                                    minLength: 11,
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                id="outlined-adornment-cnumber-register"
                                label="Contact Number"
                                margin="normal"
                                name="cnumber"
                                type="text"
                                value={cnumber}
                                className={classes.loanInput}
                                error={Boolean(touched.cnumber && errors.cnumber)}
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                    setCnumber(e.target.value);
                                }}
                            />
                            <FormHelperText id="standard-weight-helper-text-cnumber-register">
                                e.g. (09123456789) supports PH numbers only.
                            </FormHelperText>
                        </FormControl>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseSpouseInfo;
