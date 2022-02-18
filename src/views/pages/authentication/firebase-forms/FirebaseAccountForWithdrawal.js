import React from 'react';
import firebase from './firebase'
import { useTimer } from 'use-timer';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {
    Box,
    Button,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    OutlinedInput,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    Stack,
    TextField
} from '@material-ui/core';

// third party
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// import for the prompt dialogue
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

// assets
import BDO from 'ui-component/BDO';
import BPI from 'ui-component/BPI';
import PNB from 'ui-component/PNB';
import RCBC from 'ui-component/RCBC';
import UB from 'ui-component/UB';

// style constant
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

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
    amountInput: {
        ...theme.typography.customInput
    }
}));

//= ===========================|| FIREBASE - ACCOUNT FOR WITHDRAWAL ||============================//

const FirebaseAccountForWithdrawal = (props, { ...others }) => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [otp, setOTP] = React.useState('');
    const { time, start } = useTimer({
        autostart: true,
        initialTime: 5,
        endTime: 0,
        timerType: 'DECREMENTAL'
    });
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
            window.open('/pages/withdrawal/confirmation')
            window.close('/pages/withdrawal/chooseaccount')
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

    return (
        <>
            <Grid container>
                <Grid
                    item
                    sx={12}
                    container
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor="grey.50"
                    borderRadius="10px"
                    spacing="2"
                    style={{ marginBottom: '15px', padding: '20px' }}
                >
                    <Stack direction="column" alignItems="center" justifyContent="center" spacing={0.5}>
                        <BPI />
                    </Stack>
                    <Grid container alignItems="center" justifyContent="center" item xs={11} style={{ marginTop: "10px", marginBottom: "-15px" }}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="body2" color="black" fontSize="12px">
                                Enter Amount:
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" item xs={11}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Formik
                                initialValues={{
                                    withdraw: 'PHP'
                                }}
                            >
                                {({ handleBlur, handleChange, handleSubmit }) => (
                                    <form noValidate onSubmit={handleSubmit} {...others}>
                                        <FormControl size="small" className={classes.amountInput}>
                                            <InputLabel htmlFor="outlined-adornment-withdraw-amount">PHP</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-withdraw-amount"
                                                type="withdraw"
                                                name="withdraw"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                label="PHP"
                                                helperText="Value must be between P2000 to P10000"
                                                inputProps={{
                                                    classes: {
                                                        notchedOutline: classes.notchedOutline
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                    </form>
                                )}
                            </Formik>
                        </Box>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" item xs={11} style={{ marginTop: "-20px", marginBottom: "-20px" }}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="body2" color="#c5c6d0" fontSize="12px">
                                Maximum of PHP 100,000.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "10px", marginBottom: "20px" }}>
                        <Divider />
                    </Grid>
                    <Grid item xs={13}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="subtitle0" color="black">
                                My Accounts:
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={11}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <FormControl fullWidth alignItems="flex-start" justifyContent="flex-start" style={{ marginLeft: "10px", marginBottom: "10px" }}>
                                <RadioGroup
                                    aria-label="gender"
                                    defaultValue="female"
                                    name="radio-buttons-group-accounts-bpi"
                                >
                                    <FormControlLabel value="savings1" control={<Radio />} label="XXXXXX01234" />
                                    <FormControlLabel value="savings2" control={<Radio />} label="XXXXXX01235" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" item xs={11}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="body2" color="#c5c6d0" fontSize="12px">
                                Please check the amount before you proceed.
                            </Typography>
                            <div id="recaptcha-container"></div>
                            <AnimateButton>
                                <Button
                                    style={{ marginTop: "15px", marginBottom: "-5px" }}
                                    fullWidth
                                    disableElevation
                                    size="medium"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleSendOTP}
                                >
                                    Next
                                </Button>
                            </AnimateButton>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

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

export default FirebaseAccountForWithdrawal;
