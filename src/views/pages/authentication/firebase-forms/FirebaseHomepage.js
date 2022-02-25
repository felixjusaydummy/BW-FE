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
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    Modal,
    Card
} from '@material-ui/core';

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scroll-menu';

import HorizontalScroller from 'react-horizontal-scroll-container';

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

import DeleteIcon from '@mui/icons-material/Delete';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import RedeemRoundedIcon from '@mui/icons-material/RedeemRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import MoneyRoundedIcon from '@mui/icons-material/MoneyRounded';
import MemoryIcon from '@mui/icons-material/Memory';
import CircleIcon from '@mui/icons-material/Circle';
import { yellow, red, orange, common } from '@material-ui/core/colors';

import Ccchip from 'ui-component/ccchip';
import Ccmaster from 'ui-component/ccmaster';
import Accountlogo from 'ui-component/accountlogo';
import Withdrawlogo from 'ui-component/withdrawlogo';
import Transferlogo from 'ui-component/transferlogo';
import Logosmall from 'ui-component/logosmall';
import DigitalID from 'ui-component/digital-id';
import DigitalWallet from 'ui-component/digital-wallet';
import LoanApp from 'ui-component/loan-app';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    loginInput: {
        ...theme.typography.customInput
    }
}));

//= ===========================|| FIREBASE - HOMEPAGE ||============================//

const FirebaseHomepage = (props, { ...others }) => {
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
                    backgroundColor="#000000"
                    borderRadius="10px"
                    spacing="2"
                    style={{ marginTop: "15px", marginBottom: '15px', padding: '10px' }}
                >
                    <Grid item xs={11}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography sx={{ color: 'white', fontSize: '20px' }}>
                                <bold>BLOCKWALLET</bold>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={10} backgroundColor="#000" spacing={0.5}>
                        <Ccchip />
                    </Grid>
                    <Grid item xs={10}>
                        <Box
                            sx={{
                                mb: 1,
                                width: '100%',
                                p: 1
                            }}
                        >
                            <Typography sx={{ color: 'white', fontSize: '23px', letterSpacing: 7 }}>
                                <center>**** **** 5678</center>
                            </Typography>
                        </Box>
                    </Grid>
                    <Stack direction="row" justifyContent="center" spacing={11}>
                        <Stack alignItems="row" justifyContent="center" spacing={1}>
                            <Grid container>
                                <Box
                                    sx={{
                                        mb: 0,
                                        width: '100%',
                                        p: 0
                                    }}
                                >
                                    <Typography sx={{ color: 'white' }}>VALID THRU</Typography>
                                </Box>
                            </Grid>
                            <Grid container>
                                <Box
                                    sx={{
                                        mb: 0,
                                        width: '100%',
                                        p: 0.001
                                    }}
                                >
                                    <Typography sx={{ color: 'white', fontSize: '18px' }}>
                                        <center>06/25</center>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Stack>
                        <Stack alignItems="row" justifyContent="center" spacing={0.5}>
                            <Grid container>
                                <Box
                                    sx={{
                                        mb: 0,
                                        width: '100%',
                                        p: 1
                                    }}
                                >
                                    <Typography sx={{ color: 'white' }}>
                                        <center>cvv</center>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid container>
                                <Box
                                    sx={{
                                        mb: 0,
                                        width: '100%',
                                        p: 0.001
                                    }}
                                >
                                    <Typography sx={{ color: 'white', fontSize: '18px' }}>
                                        <center>* * *</center>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Stack>
                        <Stack direction="column" justifyContent="center" spacing={0.5}>
                            <Grid container>
                                <Box
                                    sx={{
                                        mb: 0,
                                        width: '100%',
                                        p: 0,
                                        alignContent: 'center'
                                    }}
                                >
                                    <center>
                                        <Logosmall />
                                    </center>
                                </Box>
                            </Grid>
                            <Grid container>
                                <Box
                                    sx={{
                                        mb: 0,
                                        width: '100%',
                                        p: 0
                                    }}
                                >
                                    <Typography color="white">
                                        <center>blockchain</center>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <Grid
                sx={{
                    border: 2,
                    borderRadius: 2,
                    borderColor: '#076241',
                    backgroundColor: '#076241'
                }}
                style={{ marginBottom: '15px', padding: '10px' }}
            >
                <Grid item alignItems="center" justifyContent="center" backgroundColor="#076241" borderRadius="10px" paddingLeft="15px">
                    <Grid item xs={13}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="subtitle0" color="white">
                                Available Balance:
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={11.5}>
                        <Box
                            sx={{
                                mb: 1,
                                width: '100%',
                                p: 1
                            }}
                        >
                            <Typography sx={{ color: 'white', fontSize: '25px' }}>
                                <center>PHP 1,582.88</center>
                            </Typography>
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
                    style={{ marginBottom: '15px', padding: '10px' }}
                >
                    <Grid item xs={11}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="subtitle0" color="white">Features:</Typography>
                        </Box>
                    </Grid>
                    <Grid>
                        <Box
                            sx={{
                                mb: 2,
                                p: 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                alignContent: 'center'
                            }}
                        >
                            <center>
                                
                    <Grid item xs={11.5}>
                        <Box
                            sx={{
                                mb: 2,
                                width: '100%',
                                p: 2
                            }}
                        >
                            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                                <Stack direction="column" alignItems="center" justifyContent="center" spacing={1}>
                                    <Button
                                        variant="Outlined"
                                        type="submit"
                                        component={Link}
                                        to="/pages/homescreen"
                                    >
                                        <Stack direction="column" alignItems="center" justifyContent="center" spacing={1}>
                                            <DigitalWallet />
                                        </Stack>
                                    </Button>
                                    <Typography color="white">Wallet
                                    </Typography>
                                </Stack>
                                <Stack direction="column" alignItems="center" justifyContent="center" spacing={1}>
                                    <Button
                                        variant="Outlined"
                                        type="submit"
                                        component={Link}
                                        to="/pages/homescreen/loanhomepage"
                                    >
                                        <Stack alignItems="row" justifyContent="center" spacing={1}>
                                            <LoanApp />
                                        </Stack>
                                    </Button>
                                    <Typography color="white">
                                        <center>Loan</center>
                                        <center>&nbsp;&nbsp;&nbsp;</center>
                                    <Typography color="white">Loan
                                    </Typography>
                                </Stack>
                                
                                <Stack direction="column" alignItems="center" justifyContent="center" spacing={1}>
                                    <Button
                                        variant="Outlined"
                                        type="submit"
                                        component={Link}
                                        to="/pages/homescreen"
                                    >
                                        <Stack alignItems="row" justifyContent="center" spacing={1}>
                                            <DigitalID />
                                        </Stack>
                                    </Button>
                                    <Typography color="white">IDs
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                            </center>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default FirebaseHomepage;
