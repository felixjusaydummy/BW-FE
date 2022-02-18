import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {
    Box,
    Button,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    OutlinedInput,
    Typography,
    Stack
} from '@material-ui/core';

// third party
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// import for the prompt dialogue
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

// assets
import BDO from 'ui-component/BDO';
import BPI from 'ui-component/BPI';
import PNB from 'ui-component/PNB';
import RCBC from 'ui-component/RCBC';
import UB from 'ui-component/UB';

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
    amountInput: {
        ...theme.typography.customInput
    }
}));

//= ===========================|| FIREBASE - WITHDRAWAL ||============================//

const FirebaseWithdrawal = (props, { ...others }) => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [withdraw, setWithdraw] = React.useState('');
    const [withdrawOpen, setWithdrawOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
    const handleWithdrawOpen = () => setWithdrawOpen(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Grid container>
                <Grid
                    item
                    sx={12}
                    container
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor="grey.50"
                    borderRadius="10px"
                    spacing="2"
                    style={{ marginBottom: '15px', padding: '20px' }}
                >
                    <Grid item xs={13}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="subtitle0" color="black">
                                Select Partner Banks:
                            </Typography>
                        </Box>
                    </Grid>
                    <Stack direction="column" alignItems="stretch" justifyContent="center" spacing={2}>
                        <Stack direction="row">
                            <AnimateButton>
                                <Button
                                    fullWidth
                                    color="primary"
                                    size="large"
                                    component={Link}
                                    to="/pages/withdrawal/chooseaccount"
                                    type="submit"
                                    variant="text"
                                >
                                    <BPI />
                                </Button>
                            </AnimateButton>
                            <AnimateButton>
                                <Button
                                    fullWidth
                                    color="primary"
                                    size="large"
                                    // component={Link}
                                    // to="/pages/withdrawal/chooseaccount"
                                    type="submit"
                                    variant="text"
                                >
                                    <RCBC />
                                </Button>
                            </AnimateButton>
                        </Stack>
                        <Stack direction="row">
                            <AnimateButton>
                                <Button
                                    fullWidth
                                    color="primary"
                                    size="large"
                                    // component={Link}
                                    // to="/pages/withdrawal/chooseaccount"
                                    type="submit"
                                    variant="text"
                                >
                                    <BDO />
                                </Button>
                            </AnimateButton>
                            <AnimateButton>
                                <Button
                                    fullWidth
                                    color="primary"
                                    size="large"
                                    // component={Link}
                                    // to="/pages/withdrawal/chooseaccount"
                                    type="submit"
                                    variant="text"
                                >
                                    <PNB />
                                </Button>
                            </AnimateButton>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};

export default FirebaseWithdrawal;
