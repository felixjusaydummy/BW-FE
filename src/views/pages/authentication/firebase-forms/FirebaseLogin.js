import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebase'
import { useTimer } from 'use-timer';
import api from "../../../../api/api-url";

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    TextField,
    Grid,
    Divider
} from '@material-ui/core';

// import for the prompt dialogue
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { IconAlignCenter } from '@tabler/icons';

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

//= ===========================|| FIREBASE - LOGIN ||============================//

const FirebaseLogin = (props, { ...others }) => {
    const classes = useStyles();
    const scriptedRef = useScriptRef();
    const [checked, setChecked] = React.useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOTP] = React.useState('');
    const { time, start } = useTimer({
        autostart: true,
        initialTime: 5,
        endTime: 0,
        timerType: 'DECREMENTAL'
    });

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //= ===========================|| start of REST API functions ||============================//

    const [loginOpen, setLoginOpen] = React.useState(false);

    const signingIn = async () => {
        await api.post("/login", {
            username: email,
            password: password
        }).then(function (response) {
            // code to get the phone number once logged in
            // const saveTokenInLocalStorage = (tokenDetails) => {
            //     localStorage.setItem('userDetails', JSON.stringify(tokenDetails))
            // }
            // saveTokenInLocalStorage(response.data.token)

            // const headers = {
            //     "Content-Type": "application/json",
            //     "Authorization": response.data.token
            // }
            // const getPhoneNumber = async () => {
            //     console.log("headers", headers)
            //     const checkOutput = await api.get("/account", {
            //         headers: headers
            //     }).then(function (response) {
            //         // save response to be able to get the phone number of the account
            //         console.log("Phone number ", response.data)
            //     }).catch(function (error){
            //         console.log("Error ", error)
            //         alert("Error encountered when getting account details.")
            //     });
            // }

            // call the async function to get the phone number
            // getPhoneNumber();

            // call otp feature once phone number 
            handleSendOTP();
        }).catch(function (error){
            console.log("Error ", error)  
            setLoginOpen(true);
        });
    }

    const handleCloseLoginDialogue = () => {
        setLoginOpen(false);
    }

    //= ===========================|| end of REST API functions ||============================//

    //= ===========================|| start of OTP functions ||============================//

    const [otpOpen, setOtpOpen] = React.useState(false);
    const [invalidOtpOpen, setInvalidOtpOpen] = React.useState(false);
    const [errorOtpOpen, setErrorOtpOpen] = React.useState(false);
    const [blockedOtpOpen, setBlockedOtpOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const configureCaptcha = () => {
        window.applicationVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'data-size': 'invisible',
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                console.log("Recaptcha verified")
            }
        }); 
    }

    const renderCaptcha = () => {
        window.applicationVerifier.render().then((widgetId) => {
            window.recaptchaWidgetId = widgetId;
        });
    }
    
    const handleSendOTP = () => {
        configureCaptcha()
        const phoneNumber = "+639204109389" // 639566102562 639204109389
        console.log(phoneNumber)
        const appVerifier = window.applicationVerifier;
        console.log(appVerifier)
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log(confirmationResult)
                console.log("OTP has been sent")
                setOtpOpen(true);
                start()
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                setErrorOtpOpen(true);
                console.log(error)
                // renderCaptcha()
                window.grecaptcha.reset(window.recaptchaWidgetId);
            });
    }

    const handleResendOTP = (e) => {
        e.preventDefault()
        renderCaptcha()
        const phoneNumber = "+639204109389" // 639566102562 639204109389
        console.log(phoneNumber)
        const appVerifier = window.applicationVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log(confirmationResult)
                console.log("OTP has been sent")
                setOtpOpen(true);
                start()
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                setBlockedOtpOpen(true);
                console.log(error)
                // renderCaptcha()
                window.grecaptcha.reset(window.recaptchaWidgetId);
            });
    }

    const handleVerifyOTP = (e) =>{
        e.preventDefault()
        const code = otp
        console.log(code)
        window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(JSON.stringify(user))
            console.log("User is verified")
            window.open('/pages/homescreen/homescreen')
            window.close('/pages/login/login3')
            window.close('/')
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            setInvalidOtpOpen(true);
            console.log(error)
        });
    }

    const handleCloseOtpDialogue = () => {
        setOtpOpen(false);
    }

    const handleCloseInvalidOtpDialogue = () => {
        setInvalidOtpOpen(false);
    }

    const handleCloseErrorOtpDialogue = () => {
        setErrorOtpOpen(false);
    }

    const handleCloseBlockedOtpDialogue = () => {
        setBlockedOtpOpen(false);
    }

    //= ===========================|| end of OTP functions ||============================//

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required(' '),
                    password: Yup.string().max(255).required(' ')
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
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} className={classes.loginInput}>
                            <InputLabel htmlFor="outlined-adornment-email-login">Email Address</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-login"
                                type="email"
                                label="Email Address"
                                name="email"
                                value={email}
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
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {' '}
                                    {errors.email}{' '}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl fullWidth error={Boolean(touched.password && errors.password)} className={classes.loginInput}>
                            <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-login"
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
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                    {' '}
                                    {errors.password}{' '}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={(event) => setChecked(event.target.checked)}
                                        name="checked"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Typography
                                variant="subtitle1"
                                component={Link}
                                to="/pages/findaccount/findaccount3"
                                color="secondary"
                                sx={{ textDecoration: 'none' }}
                            >
                                Forgot Password?
                            </Typography> 
                        </Stack>
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
                            <div id="recaptcha-container"></div>
                            <AnimateButton>
                                <Button
                                    // disableElevation
                                    // disabled={isSubmitting}
                                    disabled={!(email && password)}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    onClick={signingIn}
                                >
                                    Sign in
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>

            {/* code for login dialog */}
            <div>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={loginOpen}
                >
                    <DialogTitle>
                        <Typography variant="h3" align="center" style={{ marginTop: '15px' }}>Error while loggin in</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography variant="body1" align="center">This Email address/Password is incorrect.</Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            size="medium"
                            type="submit"
                            color="secondary"
                            onClick={handleCloseLoginDialogue}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

            {/* code for otp dialog */}
            <div>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={otpOpen}
                >
                    <DialogTitle>
                        <Typography variant="h3" align="center" style={{ marginTop: '15px' }}>OTP Verification</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography variant="body1" align="center">Enter the OTP sent to your registered phone number.</Typography>
                        </DialogContentText>
                            <Box
                                noValidate
                                component="form"
                                sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                m: 'auto',
                                width: 'fit-content',
                                }}
                            >
                                <FormControl sx={{ mt: 2, minWidth: 80, minHeight: 80, marginBottom: '-10px' }}>
                                <InputLabel htmlFor="max-width"></InputLabel>
                                    <TextField
                                        required
                                        inputProps={{
                                            maxLength: 6,
                                            minLength: 6,
                                            classes: { notchedOutline: classes.notchedOutline }
                                        }}
                                        style={{ marginTop: '3px', marginBottom: '1px' }}
                                        id="otp"
                                        margin="normal"
                                        name="otp"
                                        value={otp}
                                        onChange={(e) => {
                                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                            setOTP(e.target.value);
                                        }}
                                    />
                                </FormControl>
                                <AnimateButton>
                                    <Button
                                        fullWidth
                                        disableElevation
                                        // disabled={isSubmitting}
                                        disabled={otp.length < 6}
                                        size="medium"
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleVerifyOTP}
                                    >
                                        Submit
                                    </Button>
                                </AnimateButton>
                                <Grid item xs={12} style={{ marginTop: '15px' }}>
                                    <Divider />
                                </Grid>
                                <Typography variant="caption" fontSize="12px" align="center" style={{ marginTop: '15px', marginBottom: '15px' }}>
                                    Didn&apos;t receive any code?
                                    <Button
                                    disableElevation
                                    disabled={time > 0}
                                    size="small"
                                    type="submit"
                                    color="secondary"
                                    onClick={handleResendOTP}
                                >
                                    Resend
                                </Button>
                                </Typography>
                                <Button
                                    size="medium"
                                    type="submit"
                                    color="secondary"
                                    onClick={handleCloseOtpDialogue}
                                >
                                    Cancel
                                </Button>
                            </Box>
                    </DialogContent>
                </Dialog>
            </div>
        
            {/* code for otp invalid dialog */}
            <div>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={invalidOtpOpen}
                >
                    <DialogTitle>
                        <Typography variant="h3" align="center" style={{ marginTop: '15px' }}>OTP is invalid</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography variant="body1" align="center">Please input the correct OTP code.</Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            size="medium"
                            type="submit"
                            color="secondary"
                            onClick={handleCloseInvalidOtpDialogue}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

            {/* code for otp error dialog */}
            <div>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={errorOtpOpen}
                >
                    <DialogTitle>
                        <Typography variant="h3" align="center" style={{ marginTop: '15px' }}>Error while OTP is being sent</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography variant="body1" align="center">Try again later.</Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            size="medium"
                            type="submit"
                            color="secondary"
                            onClick={handleCloseErrorOtpDialogue}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        
            {/* code for otp blocked dialog */}
            <div>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={blockedOtpOpen}
                >
                    <DialogTitle>
                        <Typography variant="h3" align="center" style={{ marginTop: '15px' }}>Your account has been blocked</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography variant="body1" align="center">Multiple sign-in attempts has been detected on your account. To secure your account, we have disabled it for the meantime.</Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            size="medium"
                            type="submit"
                            color="secondary"
                            onClick={handleCloseBlockedOtpDialogue}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
};

export default FirebaseLogin;

