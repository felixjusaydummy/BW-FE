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
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Google from 'assets/images/icons/social-google.svg';

import LinkIcon from '@mui/icons-material/Link';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import RedeemIcon from '@mui/icons-material/Redeem';

import Avatar from '@mui/material/Avatar';

import Accountlogo from 'ui-component/accountlogo';
import Bpilogo from 'ui-component/bpilogo';
import Bdologo from 'ui-component/bdologo';
import Elevenlogo from 'ui-component/elevenlogo';
import Ministoplogo from 'ui-component/ministoplogo';
import Familymartlogo from 'ui-component/familymartlogo';
import Aublogo from 'ui-component/aublogo';
import Landbanklogo from 'ui-component/landbanklogo';
import Pnblogo from 'ui-component/pnblogo';
import Ucpblogo from 'ui-component/ucpblogo';
import Moneygramlogo from 'ui-component/moneygramlogo';
import Payoneerlogo from 'ui-component/payoneerlogo';
import Westernunionlogo from 'ui-component/westernunionlogo';

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

//= ===========================|| FIREBASE - ACCOUNT ||============================//

const FirebaseCashin = (props, { ...others }) => {
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
    return (
        <>
            <Grid container>
                <Grid
                    item
                    sx={12}
                    container
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor="#076241"
                    borderRadius="10px"
                    spacing="2"
                    style={{ marginBottom: '15px', padding: '15px 10px' }}
                >
                    <Grid item xs={11}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="subtitle0" color="white">My Linked Accounts:</Typography>
                        </Box>
                    </Grid>
                    <Grid item sx={12} container alignItems="center" justifyContent="center" 
                        style={{ padding: '15px 10px' }} >
                        <Box m="auto">
                            <Stack direction="row" justifyContent="left" spacing={1}>
                                <Avatar sx={{ height: '50px', width: '50px', backgroundColor: 'white' }} variant="rounded">
                                    <Bpilogo />
                                </Avatar>
                                <Avatar sx={{ height: '50px', width: '50px', backgroundColor: 'white' }} variant="rounded">
                                    <Bdologo />
                                </Avatar>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item sx={12} container alignItems="center" justifyContent="center">
                        <Box m="auto">
                            <Button
                                sx={{ backgroundColor: 'white', color: 'black', width: '250px' }}
                                variant="contained"
                                href="account"
                                size="medium"
                            >
                                Manage Linked Accounts
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid
                    item
                    sx={12}
                    container
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor="#076241"
                    borderRadius="10px"
                    spacing="2"
                    style={{ marginBottom: '15px', padding: '15px 10px' }}
                >
                    <Grid item xs={11}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="subtitle0" color="white">Over the Counter:</Typography>
                        </Box>
                    </Grid>
                    <Grid item sx={12} container alignItems="center" justifyContent="center">
                        <Box m="auto">
                            <Stack direction="row" justifyContent="left" spacing={1}>
                                <Avatar sx={{ height: '50px', width: '50px', backgroundColor: 'white' }} variant="rounded">
                                    <Elevenlogo />
                                </Avatar>
                                <Avatar sx={{ height: '50px', width: '50px', backgroundColor: 'white' }} variant="rounded">
                                    <Ministoplogo />
                                </Avatar>
                                <Avatar sx={{ height: '50px', width: '50px', backgroundColor: 'white' }} variant="rounded">
                                    <Familymartlogo />
                                </Avatar>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid
                    item
                    sx={12}
                    container
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor="#076241"
                    borderRadius="10px"
                    spacing="2"
                    style={{ marginBottom: '15px', padding: '15px 10px' }}
                >
                    <Grid item xs={11}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="subtitle0" color="white">Online Banks:</Typography>
                        </Box>
                    </Grid>
                    <Grid item sx={12} container alignItems="center" justifyContent="center">
                        <Box m="auto">
                            <Stack direction="row" justifyContent="left" spacing={1}>
                                <Avatar sx={{ height: '50px', width: '50px', backgroundColor: 'white' }} variant="rounded">
                                    <Aublogo />
                                </Avatar>
                                <Avatar sx={{ height: '50px', width: '50px', backgroundColor: 'white' }} variant="rounded">
                                    <Landbanklogo />
                                </Avatar>
                                <Avatar sx={{ height: '50px', width: '50px', backgroundColor: 'white' }} variant="rounded">
                                    <Pnblogo />
                                </Avatar>
                                <Avatar sx={{ height: '50px', width: '50px', backgroundColor: 'white' }} variant="rounded">
                                    <Ucpblogo />
                                </Avatar>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid
                    item
                    sx={12}
                    container
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor="#076241"
                    borderRadius="10px"
                    spacing="2"
                    style={{ marginBottom: '15px', padding: '15px 10px' }}
                >
                    <Grid item xs={11}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="subtitle0" color="white">Remittance Center:</Typography>
                        </Box>
                    </Grid>
                    <Grid item sx={12} container alignItems="center" justifyContent="center">
                        <Box m="auto">
                            <Stack direction="row" justifyContent="left" spacing={1}>
                                <Avatar sx={{ height: '50px', width: '50px', backgroundColor: 'white' }} variant="rounded">
                                    <Moneygramlogo />
                                </Avatar>
                                <Avatar sx={{ height: '50px', width: '50px', backgroundColor: 'white' }} variant="rounded">
                                    <Payoneerlogo />
                                </Avatar>
                                <Avatar sx={{ height: '50px', width: '50px', backgroundColor: 'white' }} variant="rounded">
                                    <Westernunionlogo />
                                </Avatar>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default FirebaseCashin;
