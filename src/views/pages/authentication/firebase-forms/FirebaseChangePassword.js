import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebase'
import { useTimer } from 'use-timer';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography,
    TextField,
    Divider
} from '@material-ui/core';

// import for the prompt dialogue
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
    loginInput: {
        ...theme.typography.customInput
    }
}));

//= ==========================|| FIREBASE - CHANGE PASSWORD ||===========================//

const FirebaseChangePassword = ({ ...others }) => {
    const classes = useStyles();
    const scriptedRef = useScriptRef();
    const [showPassword, setShowPassword] = React.useState(false);

    const [strength, setStrength] = React.useState(0);
    const [level, setLevel] = React.useState('');

    const [newpass, setNewPass] = React.useState('');
    const [confirmpass, setConfirmPass] = React.useState('');
    const [otp, setOTP] = React.useState('');
    const { time, start } = useTimer({
        autostart: true,
        initialTime: 5,
        endTime: 0,
        timerType: 'DECREMENTAL'
    });

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

    const [open, setOpen] = React.useState(false);
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
                setOpen(true);
                start()
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                console.log("SMS not sent")
                console.log(error)
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
                setOpen(true);
                start()
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                console.log("SMS not sent")
                console.log(error)
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
            window.open('/dashboard/default')
            window.close('/pages/login/login3')
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            alert("Invalid OTP")
        });
    }

    const handleCloseDialogue = () => {
        setOpen(false);
    }

    return (
        <>
            <Formik
                initialValues={{
                    newpass: '',
                    confirmpass: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    newpass: Yup.string().max(255).required(' '),
                    confirmpass: Yup.string().max(255).required(' ')
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
                        <FormControl required fullWidth error={Boolean(touched.newpass && errors.newpass)} className={classes.loginInput}>
                            <InputLabel htmlFor="outlined-adornment-password-newpass">New Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-newpass"
                                type={showPassword ? 'text' : 'password'}
                                value={values.newpass}
                                name="newpass"
                                label="newpass"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    changePassword(e.target.value);
                                }}
                                inputProps={{
                                    classes: {
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                            />
                            {touched.newpass && errors.newpass && (
                                <FormHelperText error id="standard-weight-helper-text-newpass-changepassword">
                                    {' '}
                                    {errors.newpass}{' '}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl
                            required
                            fullWidth
                            error={Boolean(touched.confirmpass && errors.confirmpass)}
                            className={classes.loginInput}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-confirmpass">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-confirmpass"
                                type={showPassword ? 'text' : 'password'}
                                value={values.confirmpass}
                                name="confirmpass"
                                label="confirmpass"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    changePassword(e.target.value);
                                }}
                                inputProps={{
                                    classes: {
                                        notchedOutline: classes.notchedOutline
                                    }
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
                            />
                            {touched.newpass && errors.newpass && (
                                <FormHelperText error id="standard-weight-helper-text-newpass-changepassword">
                                    {' '}
                                    {errors.newpass}{' '}
                                </FormHelperText>
                            )}
                            {values.newpass !== values.confirmpass && (
                                <FormControl fullWidth>
                                    <Box
                                        sx={{
                                            mb: '0.5'
                                        }}
                                    >
                                        <Grid item>
                                            <Typography color="red" variant="subtitle1" fontSize="0.75rem">
                                                Passwords doesn&apos;t match.
                                            </Typography>
                                        </Grid>
                                    </Box>
                                </FormControl>
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
                            <div id="recaptcha-container"></div>
                            <div id="error-message"></div>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    // disabled={isSubmitting}
                                    disabled={!(values.newpass && values.confirmpass && values.newpass === values.confirmpass)}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleSendOTP}
                                >
                                    Submit
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>

            <div>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={open}
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
                                onClick={handleCloseDialogue}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
};

export default FirebaseChangePassword;
