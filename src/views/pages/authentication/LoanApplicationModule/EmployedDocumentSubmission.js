import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, styled } from '@material-ui/styles';
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputLabel,
    OutlinedInput,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Typography,
    useMediaQuery,
    MenuItem
} from '@material-ui/core';
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import * as Yup from 'yup';
import { Formik } from 'formik';
import useScriptRef from 'hooks/useScriptRef';
import { useTheme } from '@material-ui/core/styles';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Logo from 'ui-component/Logo';
import ArrowBackIosNewIcon from '@material-ui/icons/ArrowBackIosNew';
import HomeIcon from '@material-ui/icons/Home';
import SavingsIcon from '@material-ui/icons/Savings';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PaymentsIcon from '@material-ui/icons/Payments';
import RedeemIcon from '@material-ui/icons/Redeem';
import ListOfIDs from './ListOfIDs';

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
    loanInputValues: {
        ...theme.typography.customInput
    }
}));

const EmployedDocumentSubmission = ({ ...others }) => {
    const theme = useTheme();
    const classes = useStyles();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [value, setValue] = React.useState(100);

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item xs={12}>
                                        <Button variant="contained" href="/pages/loanapplication/loanapplicationform" size="medium">
                                            <ArrowBackIosNewIcon />
                                        </Button>
                                    </Grid>
                                    <Grid item sx={{ mb: 3 }}>
                                        <RouterLink to="#">
                                            <Logo />
                                        </RouterLink>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography
                                                        color={theme.palette.secondary.main}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                    >
                                                        Loan Application Form
                                                    </Typography>
                                                    <Typography
                                                        variant="h3"
                                                        fontStyle="bold"
                                                        fontSize="16px"
                                                        textAlign={matchDownSM ? 'center' : ''}
                                                    >
                                                        Submission of Supporting Documents
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Formik
                                            initialValues={{
                                                photo: '',
                                                document: '',
                                                submit: null
                                            }}
                                            validationSchema={Yup.object().shape({
                                                document: Yup.string().required('This is a required field.')
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
                                            {({ errors, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                                                <form onSubmit={handleSubmit} {...others}>
                                                    <FormControl
                                                        fullWidth
                                                        error={Boolean(touched.document && errors.document)}
                                                        className={classes.loanInputValues}
                                                    >
                                                        <Grid container spacing={matchDownSM ? 0 : 3}>
                                                            <Grid item xs={14} sm={16}>
                                                                <Typography variant="overline text" htmlFor="validation-loaninput-field">
                                                                    Valid Government-issued ID (with photo and signature):
                                                                </Typography>
                                                                {touched.document && errors.document && (
                                                                    <FormHelperText error id="standard-weight-helper-text-loan">
                                                                        {' '}
                                                                        {errors.document}{' '}
                                                                    </FormHelperText>
                                                                )}
                                                                <ListOfIDs />
                                                            </Grid>
                                                        </Grid>
                                                    </FormControl>
                                                    <FormControl
                                                        fullWidth
                                                        error={Boolean(touched.document && errors.document)}
                                                        className={classes.loanInputValues}
                                                    >
                                                        <Grid container spacing={matchDownSM ? 0 : 1}>
                                                            <Grid item xs={14} sm={16}>
                                                                <Typography variant="overline text" htmlFor="validation-loaninput-field">
                                                                    Recent 3 Month Payslips or latest ITR BIR Form 2316:
                                                                </Typography>
                                                                <OutlinedInput
                                                                    fullWidth
                                                                    id="validation-loaninput-field"
                                                                    margin="normal"
                                                                    name="document1"
                                                                    multiple
                                                                    type="file"
                                                                    value={values.document}
                                                                    onChange={handleChange}
                                                                    className={classes.loanInputValues}
                                                                />
                                                                {touched.document && errors.document && (
                                                                    <FormHelperText error id="standard-weight-helper-text-loan">
                                                                        {' '}
                                                                        {errors.document}{' '}
                                                                    </FormHelperText>
                                                                )}
                                                            </Grid>
                                                        </Grid>
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
                                                    <Box sx={{ mt: 2 }}>
                                                        <AnimateButton>
                                                            <Button
                                                                disableElevation
                                                                disabled={isSubmitting}
                                                                fullWidth
                                                                size="large"
                                                                type="submit"
                                                                variant="contained"
                                                                color="secondary"
                                                            >
                                                                Submit Application
                                                            </Button>
                                                        </AnimateButton>
                                                    </Box>
                                                </form>
                                            )}
                                        </Formik>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid
                                        item
                                        sx={12}
                                        container
                                        alignItems="center"
                                        justifyContent="center"
                                        backgroundColor="#ffffff"
                                        borderRadius="10px"
                                        spacing="2"
                                    >
                                        <Stack direction="row" justifyContent="center" spacing={1}>
                                            <Button sx={{ backgroundColor: 'white', color: 'black' }} variant="contained" href="homescreen">
                                                <HomeIcon />
                                            </Button>
                                            <Button
                                                sx={{ backgroundColor: 'white', color: 'black' }}
                                                variant="contained"
                                                href="#to be updated"
                                            >
                                                <SavingsIcon />
                                            </Button>
                                            <Button
                                                sx={{ backgroundColor: 'white', color: 'black' }}
                                                variant="contained"
                                                href="#to be updated"
                                            >
                                                <EqualizerIcon />
                                            </Button>
                                            <Button
                                                sx={{ backgroundColor: 'white', color: 'black' }}
                                                variant="contained"
                                                href="/pages/loanapplication/"
                                            >
                                                <PaymentsIcon />
                                            </Button>
                                            <Button
                                                sx={{ backgroundColor: 'white', color: 'black' }}
                                                variant="contained"
                                                href="#to be updated"
                                            >
                                                <RedeemIcon />
                                            </Button>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default EmployedDocumentSubmission;
