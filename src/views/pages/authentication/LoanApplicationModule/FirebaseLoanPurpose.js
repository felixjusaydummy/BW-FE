import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
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
    Modal,
    Stack,
    Typography,
    Avatar,
    useMediaQuery
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Cottage from '@material-ui/icons/Cottage';
import Commute from '@material-ui/icons/Commute';
import HousingAutoReqs from './HousingAutoReqs';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

// project imports
import useScriptRef from 'hooks/useScriptRef';

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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#e0f2f1',
    border: '1px solid #000',
    boxShadow: 24,
    p: 5,
    px: 4,
    pb: 3,
    minWidth: 500,
    alignItems: 'center',
    justifyContent: 'center'
};

//= ===========================|| FIREBASE - LOAN PURPOSE ||============================//

const FirebaseLoanPurpose = (props, { ...others }) => {
    const theme = useTheme();
    const classes = useStyles();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    const customization = useSelector((state) => state.customization);
    const scriptedRef = useScriptRef();
    const [checked, setChecked] = React.useState(true);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    style={{ marginBottom: "20px" }}
                >
                    <Grid item xs={11} 
                        style={{ marginRight: "-10px", marginTop: "13px" }}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="subtitle0" color="white">Please select one:</Typography>
                        </Box>
                    </Grid>
                    <Grid item sx={12} container alignItems="center" justifyContent="center">
                        <Box m="auto">
                            <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={2.5}>
                                <Typography sx={{ fontWeight: 'bold' }} color="white">
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography>
                                <Button href="/pages/loanapplication/personalinformation" sx={{ backgroundColor: 'white', color: 'black' }}>
                                    <Cottage />
                                </Button>
                                <Typography sx={{ fontWeight: 'bold' }} color="white">
                                    Housing Loan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography>
                            </Stack>
                            <Box
                                sx={{
                                    mb: 2
                                }}
                            />
                            <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={2.5}>
                                <Typography sx={{ fontWeight: 'bold' }} color="white">
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography>
                                <Button href="/pages/loanapplication/collateral" sx={{ backgroundColor: 'white', color: 'black' }}
                                    style={{ marginBottom: "15px" }} >
                                    <Commute />
                                </Button>
                                <Typography sx={{ fontWeight: 'bold' }} color="white">
                                    Car Loan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={2.5}>
                                <Typography sx={{ fontWeight: 'bold' }} color="white">
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography>
                                <Button href="/pages/loanapplication/collateral" sx={{ backgroundColor: 'white', color: 'black' }}
                                    style={{ marginBottom: "15px" }} >
                                    <LocalAtmIcon/>
                                </Button>
                                <Typography sx={{ fontWeight: 'bold' }} color="white">
                                    Cash Loan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography>
                            </Stack>
                        </Box>
                        
                    </Grid>
                    <Stack direction="column">
                        <Typography style={{ padding: "15px, 15px" }} color="white" fontSize="0.65rem" variant="h6">Check the Pre-processing requirements for:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                        <HousingAutoReqs />
                    </Stack>
                    <Grid item sx={12} container style={{ marginBottom: "13px" }} >
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default FirebaseLoanPurpose;
