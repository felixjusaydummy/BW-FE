import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@material-ui/core';

// third party
import * as Yup from 'yup';
import { Formik, useFormikContext } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Google from 'assets/images/icons/social-google.svg';
import FirebaseLogin from 'views/pages/authentication/firebase-forms/FirebaseLogin';

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

//= ===========================|| FIREBASE - ONE TIME PIN ||============================//

const FirebaseOneTimePin = (props, { ...others }) => {
    const classes = useStyles();

    const customization = useSelector((state) => state.customization);
    const scriptedRef = useScriptRef();
    const [checked, setChecked] = React.useState(true);

    const googleHandler = async () => {
        console.error('Login');
    };

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [otp, setOTP] = React.useState('');

    return (
        <>
            <Formik
                initialValues={{
                    otp: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    otp: Yup.number().max('999999').required('Required').typeError('OTP must contain numbers only.')
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
                        <FormControl fullWidth error={Boolean(touched.otp && errors.otp)}>
                            <OutlinedInput
                                id="otp"
                                name="otp"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    setOTP(e.target.value);
                                }}
                                value={otp}
                            />
                            {touched.otp && errors.otp && (
                                <FormHelperText error id="standard-weight-helper-text-otp">
                                    {' '}
                                    {errors.otp}{' '}
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
                                <Button color="primary" disableElevation fullWidth size="regular" type="submit" variant="outlined">
                                    Request new OTP?
                                </Button>
                            </AnimateButton>
                        </Box>
                        <Box
                            sx={{
                                mt: 2
                            }}
                        >
                            <AnimateButton>
                                <Button
                                    color="secondary"
                                    component={Link}
                                    disabled={!otp}
                                    fullWidth
                                    size="large"
                                    to="/accounts/linked-accounts"
                                    type="submit"
                                    variant="contained"
                                >
                                    <Typography color="white" sx={{ textDecoration: 'none' }} variant="h4">
                                        Verify
                                    </Typography>
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseOneTimePin;
