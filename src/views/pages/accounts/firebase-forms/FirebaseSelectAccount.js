import React, { Component } from 'react';
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
    FormLabel,
    formLabelClasses,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Radio,
    RadioGroup,
    Select,
    Stack,
    TextField,
    Typography,
    useMediaQuery
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

// third party
import * as Yup from 'yup';
import { Formik, Form, useField, useFormikContext } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import BPI from 'ui-component/BPI';

import Google from 'assets/images/icons/social-google.svg';

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
    username: {
        ...theme.typography.customInput
    },
    accountNumber: {
        ...theme.typography.customInput
    }
}));

//= ===========================|| FIREBASE - ADD ACCOUNTS ||============================//

const FirebaseSelectAccount = (props, { ...others }) => {
    const classes = useStyles();

    const customization = useSelector((state) => state.customization);
    const scriptedRef = useScriptRef();
    const [checked, setChecked] = React.useState(true);

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    const [account, selectAccount] = React.useState('');

    return (
        <>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    submit: null
                }}
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
                        <FormControl component="fieldset" fullWidth error={Boolean(touched.account && errors.account)}>
                            <RadioGroup
                                aria-label="account"
                                name="radio-buttons-group"
                                onChange={(e) => {
                                    handleChange(e);
                                    selectAccount(e.target.value);
                                }}
                                value={account}
                            >
                                <FormControlLabel value="account1" control={<Radio />} label="XXXXXX01234" />
                                <FormControlLabel value="account2" control={<Radio />} label="XXXXXX01235" />
                            </RadioGroup>
                            {touched.account && errors.account && (
                                <FormHelperText error id="standard-weight-helper-text-account">
                                    {' '}
                                    {errors.account}{' '}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    mt: 2
                                }}
                            >
                                <Divider />
                            </Box>
                        </Grid>
                        <Box
                            sx={{
                                mt: 2
                            }}
                        >
                            <AnimateButton>
                                <Button
                                    color="secondary"
                                    component={Link}
                                    disabled={!account}
                                    fullWidth
                                    size="large"
                                    to="/accounts/add/verification"
                                    type="submit"
                                    variant="contained"
                                >
                                    <Typography color="white" sx={{ textDecoration: 'none' }} variant="h4">
                                        Continue
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

export default FirebaseSelectAccount;
