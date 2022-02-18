import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput } from '@material-ui/core';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

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

//= ==========================|| FIREBASE - FIND ACCOUNT ||===========================//

const FirebaseFindAccount = ({ ...others }) => {
    const classes = useStyles();
    const scriptedRef = useScriptRef();

    const [email, setEmail] = React.useState('');

    return (
        <>
            <Formik
                initialValues={{
                    username: ''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
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
                            <InputLabel htmlFor="outlined-adornment-email-findaccount">Email Address</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-findaccount"
                                type="email"
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
                                <FormHelperText error id="standard-weight-helper-text-email-findaccount">
                                    {' '}
                                    {errors.email}{' '}
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
                                <Button
                                    disableElevation
                                    // disabled={isSubmitting}
                                    disabled={!email}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    component={Link}
                                    to="/pages/changepassword/changepassword3"
                                >
                                    Search
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseFindAccount;
