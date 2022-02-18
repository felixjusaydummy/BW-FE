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

//= ===========================|| FIREBASE - HISTORY ||============================//

const FirebaseHistory = (props, { ...others }) => {
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
                <Grid item xs={12}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Typography variant="subtitle3">
                            <center>-</center>
                        </Typography>
                    </Box>
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
                >
                    <Grid container>
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex'
                                }}
                            >
                                <Typography variant="subtitle3" color="#076241">
                                    <center>-</center>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item sx={12} container alignItems="center" justifyContent="center">
                        <Box m="auto">
                            <Button
                                sx={{ backgroundColor: 'white', color: 'black' }}
                                variant="contained"
                                href="#contained-buttons"
                                size="medium"
                            >
                                <LinkIcon />
                                This is history page
                            </Button>
                        </Box>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex'
                                }}
                            >
                                <Typography variant="subtitle3" color="#076241">
                                    <center>-</center>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Typography variant="subtitle3">
                            <center>-</center>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default FirebaseHistory;
