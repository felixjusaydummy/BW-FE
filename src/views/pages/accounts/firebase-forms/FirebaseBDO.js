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
    accountName: {
        ...theme.typography.customInput
    },
    accountNumber: {
        ...theme.typography.customInput
    }
}));

//= ===========================|| FIREBASE - ADD ACCOUNTS ||============================//

const FirebaseAddAccounts = (props, { ...others }) => {
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

    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    const [values, setValues] = React.useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const banks = () => [{ id: 'BDO', title: 'BDO Unibank, Inc.' }, { id: 'BPI' }, { id: 'PNB' }, { id: 'RCBC' }, { id: 'UnionBank' }];

    return (
        <>
            <Formik
                initialValues={{
                    accountName: '',
                    accountNumber: '',
                    bank: ''
                }}
                validationSchema={Yup.object().shape({
                    accountName: Yup.string().required('Required'),
                    accountNumber: Yup.number().integer().required('Required').typeError('Account Number must contain digits only.'),
                    bank: Yup.string().required('Required')
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
                    <form onSubmit={handleSubmit} {...others}>
                        <FormControl fullWidth error={Boolean(touched.accountName && errors.accountName)} disabled>
                            <InputLabel htmlFor="accountName">Account Name</InputLabel>
                            <OutlinedInput
                                id="accountName"
                                value={values.accountName}
                                name="accountName"
                                onChange={handleChange}
                                label="Account Name"
                            />
                            {touched.accountName && errors.accountName && (
                                <FormHelperText error id="standard-weight-helper-text-account-name">
                                    {' '}
                                    {errors.accountName}{' '}
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
                        <FormControl fullWidth error={Boolean(touched.accountNumber && errors.accountNumber)} disabled>
                            <InputLabel htmlFor="accountNumber">Account Number</InputLabel>
                            <OutlinedInput
                                id="accountNumber"
                                value={values.accountNumber}
                                name="accountNumber"
                                onChange={handleChange}
                                label="Account Number"
                            />
                            {touched.accountNumber && errors.accountNumber && (
                                <FormHelperText error id="standard-weight-helper-text-account-number">
                                    {' '}
                                    {errors.accountNumber}{' '}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    mt: 2
                                }}
                            />
                        </Grid>
                        <Box
                            sx={{
                                mt: 2
                            }}
                        >
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="outlined"
                                    color="secondary"
                                >
                                    <Typography variant="h4" color="black" sx={{ textDecoration: 'none' }}>
                                        Delete
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

export default FirebaseAddAccounts;
