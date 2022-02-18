import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import moment from "moment";
import api from "../../../../api/api-url";

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

// import for the prompt dialogue
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

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
    loginInput: {
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

const FirebaseRegister = ({ ...others }) => {
    const classes = useStyles();
    const scriptedRef = useScriptRef();
    const [showPassword, setShowPassword] = React.useState(false);
    const [checked, setChecked] = React.useState(true);
    const now = new Date();

    const [fname, setFname] = React.useState('');
    const [mname, setMname] = React.useState('');
    const [lname, setLname] = React.useState('');
    const [sname, setSname] = React.useState('');
    const [birthdate, setBirthdate] = React.useState('');
    const [cnumber, setCnumber] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [idtype, setIdType] = React.useState('');
    const [idnumber, setIdNumber] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [frontid, setFrontId] = React.useState('');
    const [backid, setBackId] = React.useState('');

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

    const handleOutput = () => {
        console.log("first name", fname)
        console.log("middle name", mname)
        console.log("last name", lname)
        console.log("suffix name", sname)
        console.log("email", email)
        console.log("pwd", password)
        console.log("bday", moment(birthdate).format("YYYYMMDD"))
        console.log("address", address+ " " +city)
        console.log("cnumber", "+639"+cnumber)
        console.log("idtype", idtype)
        console.log("idnumber", idnumber)
        console.log("frontid", frontid)
        console.log("backid", backid)
    }

    //= ===========================|| start of REST API functions ||============================//

    const [successOpen, setSuccessOpen] = React.useState(false);
    const [errorOpen, setErrorOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const signingUp = async () => {
        handleOutput();
        await api.post("/register", {
            firstname: fname,
            middlename: mname,
            lastname: lname,
            suffixname: sname,
            birthday: moment(birthdate).format("YYYY/MM/DD"),
            address: address+ " " +city,
            contactNo: "+639"+cnumber,
            idtype: idtype,
            idnumber: idnumber,
            // frontid: frontid,
            // backid: backid,
            email: email,
            username: email,
            password: password
        }).then(function (response) {
            console.log("Registration was successful ", response.data)
            setSuccessOpen(true)
        }).catch(function (error){
            console.log("Error ", error)
            setErrorOpen(true)
        });
    }

    const handleCloseSuccessDialogue = () => {
        setSuccessOpen(false);
        window.close('/pages/register/register3')
        window.open('/pages/login/login3')
    }

    const handleCloseErrorDialogue = () => {
        setErrorOpen(false);
    }

    //= ===========================|| end of REST API functions ||============================//


    return (
        <>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Typography color="#9e9e9e" variant="subtitle1" fontSize="0.75rem">
                        Leave field(s) as blank if NA.
                    </Typography>
                </Grid>
            </Grid>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    fname: '',
                    lname: '',
                    mname: '',
                    birthdate: '',
                    cnumber: '',
                    address: '',
                    city: '',
                    idtype: '',
                    idnumber: '',
                    frontid: '',
                    backid: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required(' '),
                    password: Yup.string().max(255).required(' '),
                    fname: Yup.string().max(255).required(' '),
                    lname: Yup.string().max(255).required(' '),
                    birthdate: Yup.date().required(),
                    cnumber: Yup.string().max(255).required(' '),
                    address: Yup.string().max(255).required(' '),
                    city: Yup.string().max(255).required(' '),
                    idtype: Yup.string().max(255).required(' '),
                    idnumber: Yup.string().max(255).required(' '),
                    frontid: Yup.string().max(255).required(' '),
                    backid: Yup.string().max(255).required(' ')
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
                                required
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                fullWidth
                                label="First Name"
                                margin="normal"
                                name="fname"
                                type="text"
                                value={fname}
                                className={classes.loginInput}
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
                                value={mname}
                                type="text"
                                className={classes.loginInput}
                            />
                            <TextField
                                required
                                direction="row"
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                label="Last Name"
                                margin="normal"
                                name="lname"
                                type="text"
                                value={lname}
                                className={classes.loginInput}
                                error={Boolean(touched.lname && errors.lname)}
                                onBlur={handleBlur}
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
                                name="sname"
                                value={sname}
                                type="text"
                                className={classes.loginInput}
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
                                    renderInput={(params) => <TextField required {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>
                        <FormControl
                            fullWidth
                            variant="outlined"
                            error={Boolean(touched.address && errors.address)}
                            className={classes.loginInput}
                        >
                            <TextField
                                required
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                fullWidth
                                label="Address"
                                margin="normal"
                                name="address"
                                type="text"
                                value={address}
                                className={classes.loginInput}
                                error={Boolean(touched.address && errors.address)}
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    setAddress(e.target.value);
                                }}
                            />
                            <FormHelperText id="standard-weight-helper-text-address-register">
                                e.g. House no. or Unit no. Street Name, Brgy.
                            </FormHelperText>
                        </FormControl>
                        <Stack spacing={3}>
                            <TextField
                                required
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
                                onBlur={handleBlur}
                                error={Boolean(touched.city && errors.city)}
                                onChange={(e) => {
                                    handleChange(e);
                                    setCity(e.target.value);
                                }}
                            >
                                <MenuItem value="Caloocan City">Caloocan</MenuItem>
                                <MenuItem value="Manila">Manila</MenuItem>
                                <MenuItem value="Mandaluyong City">Mandaluyong</MenuItem>
                            </TextField>
                        </Stack>
                        <Stack spacing={3}>
                            <TextField
                                required
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
                                className={classes.loginInput}
                                error={Boolean(touched.cnumber && errors.cnumber)}
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
                                e.g. (+639123456789) supports PH numbers only.
                            </FormHelperText>
                        </Stack>
                        <Stack spacing={1}>
                            <TextField
                                required
                                select
                                inputProps={{
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                style={{ marginTop: '3px', marginBottom: '2px' }}
                                id="outlined-adornment-idtype-register"
                                label="Identification Type"
                                margin="normal"
                                name="idtype"
                                value={idtype}
                                onBlur={handleBlur}
                                error={Boolean(touched.idtype && errors.idtype)}
                                onChange={(e) => {
                                    handleChange(e);
                                    setIdType(e.target.value);
                                }}
                            >
                                <MenuItem value="Passport">Passport</MenuItem>
                                <MenuItem value="Driver's license">Driver&apos;s License</MenuItem>
                                <MenuItem value="Company ID">Company ID</MenuItem>
                            </TextField>
                        </Stack>
                        <FormControl
                            variant="outlined"
                            fullWidth
                            error={Boolean(touched.idnumber && errors.idnumber)}
                            className={classes.loginInput}
                        >
                            <TextField
                                required
                                inputProps={{
                                    maxLength: 11,
                                    minLength: 11,
                                    classes: { notchedOutline: classes.notchedOutline }
                                }}
                                fullWidth
                                id="outlined-adornment-idnumber-register"
                                label="Identification Number"
                                margin="normal"
                                name="idnumber"
                                type="text"
                                value={idnumber}
                                className={classes.loginInput}
                                error={Boolean(touched.idnumber && errors.idnumber)}
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    setIdNumber(e.target.value);
                                }}
                            />
                        </FormControl>
                        <Box sx={{ ...commonStyles, borderRadius: '16px', borderColor: 'grey.400' }}>
                            <input
                                required
                                id="frontid"
                                accept="image/*"
                                type="file"
                                value={frontid}
                                error={Boolean(touched.frontid && errors.frontid)}
                                onChange={(e) => {
                                    handleChange(e);
                                    setFrontId(e.target.value);
                                }}
                            />
                            <FormHelperText id="standard-weight-helper-text-frontid-register">
                                Upload the front part of the ID.
                            </FormHelperText>
                            <input
                                required
                                id="backid"
                                accept="image/*"
                                type="file"
                                value={backid}
                                error={Boolean(touched.backid && errors.backid)}
                                onChange={(e) => {
                                    handleChange(e);
                                    setBackId(e.target.value);
                                }}
                            />
                            <FormHelperText id="standard-weight-helper-text-backid-register">
                                Upload the back part of the ID.
                            </FormHelperText>
                        </Box>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} className={classes.loginInput}>
                            <InputLabel required htmlFor="outlined-adornment-email-register">
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
                        <FormControl fullWidth error={Boolean(touched.password && errors.password)} className={classes.loginInput}>
                            <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-register"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                name="password"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    setPassword(e.target.value);
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                inputProps={{
                                    classes: {
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-register">
                                    {' '}
                                    {errors.password}{' '}
                                </FormHelperText>
                            )}
                        </FormControl>
                        {strength !== 0 && (
                            <FormControl fullWidth>
                                <Box
                                    sx={{
                                        mb: 2
                                    }}
                                >
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Box
                                                backgroundColor={level.color}
                                                sx={{
                                                    width: 85,
                                                    height: 8,
                                                    borderRadius: '7px'
                                                }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" fontSize="0.75rem">
                                                {level.label}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </FormControl>
                        )}
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked}
                                            onChange={(event) => setChecked(event.target.checked)}
                                            name="checked"
                                            color="primary"
                                        />
                                    }
                                    label={
                                        <Typography variant="subtitle1">
                                            Agree with &nbsp;
                                            <Typography variant="subtitle1" component={Link} to="#">
                                                Terms & Condition.
                                            </Typography>
                                        </Typography>
                                    }
                                />
                            </Grid>
                        </Grid>
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
                                    disabled={
                                        !(
                                            fname &&
                                            lname &&
                                            birthdate &&
                                            address &&
                                            city &&
                                            cnumber &&
                                            idnumber &&
                                            idtype &&
                                            email &&
                                            password &&
                                            frontid &&
                                            backid
                                        )
                                    }
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    onClick={signingUp}
                                >
                                    Sign up
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        
            {/* code for success dialog */}
            {/* code for registration dialog */}
            <div>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={successOpen}
                >
                    <DialogTitle>
                        <Typography variant="h3" align="center" style={{ marginTop: '15px' }}>Registration was successful!</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography variant="body1" align="center">You will now be redirected to log in page.</Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            size="medium"
                            type="submit"
                            color="secondary"
                            onClick={handleCloseSuccessDialogue}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
                                    
            {/* code for error dialog */}
            <div>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={errorOpen}
                >
                    <DialogTitle>
                        <Typography variant="h3" align="center" style={{ marginTop: '15px' }}>Registration would not go through!</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography variant="body1" align="center">This Email address/Phone number is already exist.</Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            size="medium"
                            type="submit"
                            color="secondary"
                            onClick={handleCloseErrorDialogue}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

        </>
    );
};

export default FirebaseRegister;
