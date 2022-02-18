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
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import { IconCreditCard, IconFloatRight, IconGift } from '@tabler/icons';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Google from 'assets/images/icons/social-google.svg';

// style constant -- EDIT
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

const icons = {
    IconCreditCard,
    IconFloatRight,
    IconGift
};

//= ===========================|| FIREBASE - ACCOUNTS ||============================//

const FirebaseAccounts = (props, { ...others }) => {
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

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box
                        sx={{
                            mt: 2
                        }}
                    >
                        <AnimateButton>
                            <Button
                                fullWidth
                                color="primary"
                                component={Link}
                                size="large"
                                startIcon={<IconCreditCard />}
                                to="/accounts/linked-accounts"
                                type="submit"
                                variant="contained"
                            >
                                <Typography variant="h4" color="white" sx={{ textDecoration: 'none' }}>
                                    My Linked Accounts
                                </Typography>
                            </Button>
                        </AnimateButton>
                    </Box>
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box
                        sx={{
                            mt: 2
                        }}
                    >
                        <AnimateButton>
                            <Button fullWidth color="primary" size="large" startIcon={<IconFloatRight />} type="submit" variant="contained">
                                <Typography variant="h4" color="white" sx={{ textDecoration: 'none' }}>
                                    My Linked IDs
                                </Typography>
                            </Button>
                        </AnimateButton>
                    </Box>
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box
                        sx={{
                            mt: 2
                        }}
                    >
                        <AnimateButton>
                            <Button fullWidth color="primary" size="large" startIcon={<IconGift />} type="submit" variant="contained">
                                <Typography variant="h4" color="white" sx={{ textDecoration: 'none' }}>
                                    My Linked Rewards
                                </Typography>
                            </Button>
                        </AnimateButton>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default FirebaseAccounts;
