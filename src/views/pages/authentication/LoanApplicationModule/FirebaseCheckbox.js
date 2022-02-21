import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
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
import AnimateButton from 'ui-component/extended/AnimateButton';
import useScriptRef from 'hooks/useScriptRef';

const FirebaseCheckbox = ({ ...others }) => {
    const [acceptTerms, setAcceptterms] = React.useState(false);
    const scriptedRef = useScriptRef();

    return (
        <Formik
            initialValues={{
                acceptTerms: false,
                submit: null
            }}
            validationSchema={Yup.object().shape({
                acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
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
                    <Grid container alignItems="center" justifyContent="space-between">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    required
                                    checked={acceptTerms}
                                    onChange={(event) => setAcceptterms(event.target.checked)}
                                    name="acceptTerms"
                                    color="primary"
                                />
                            }
                            label={<Typography variant="subtitle1">I hereby agree with Terms and Conditions</Typography>}
                        />
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
                    <Grid container>
                        <Box
                            sx={{
                                mx: 'auto',
                                mr: 5
                            }}
                            justifyItems="center"
                            alignItems="center"
                        >
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    // disabled={isSubmitting}
                                    disabled={!acceptTerms}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    component={Link}
                                    to="/pages/loanapplication/DigitalAsset"
                                >
                                    Continue
                                </Button>
                            </AnimateButton>
                        </Box>
                    </Grid>
                </form>
            )}
        </Formik>
    );
};

export default FirebaseCheckbox;
