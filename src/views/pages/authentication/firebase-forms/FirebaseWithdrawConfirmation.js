import React from 'react';
import { Link } from 'react-router-dom';
import moment from "moment";
import { v4 as uuid } from 'uuid';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {
    Box,
    Button,
    Divider,
    FormControl,
    Grid,
    Typography,
    InputAdornment,
    IconButton,
    InputLabel,
    OutlinedInput
} from '@material-ui/core';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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

const FirebaseWithdrawConfirmation = (props, { ...others }) => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = React.useState(false);
    const [show, setShow] = React.useState(false);
    // current date when withdrawal is successful
    const currentDate = moment().format("DD-MM-YYYY hh:mm:ss")
    // generate reference id
    const generateReferenceNumber = Math.floor(100000000000 + Math.random() * 900000000000);
    const referenceCode = require("crypto");
    // 40 letter string
    const generatedReferenceCode = referenceCode.randomBytes(20).toString('hex');

    const [showGeneratedReferenceCode, setShowGeneratedReferenceCode] = React.useState(false);
    const handleClickShowCode = () => {
        setShowGeneratedReferenceCode(!showGeneratedReferenceCode);
    };

    const handleMouseDownCode = (event) => {
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
                    backgroundColor="grey.50"
                    borderRadius="10px"
                    spacing="2"
                    style={{ marginBottom: '15px', padding: '20px' }}
                >
                    <Grid container alignItems="center" justifyContent="center" item xs={13}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="h4" color="black">
                                BPI Withdrawal is successful!
                            </Typography>
                        </Box>
                    </Grid>      
                    <Grid container alignItems="center" justifyContent="center" item xs={13} style={{ marginTop: "-5px" }}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="body" color="black" fontSize="12px" >
                                Reference Code
                            </Typography>
                            <FormControl fullWidth className={classes.loginInput}>
                                <OutlinedInput
                                    id="reference-code" 
                                    readOnly="true"
                                    type={showGeneratedReferenceCode ? 'text' : 'password'}
                                    value={generatedReferenceCode}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle generatedReferenceCode visibility"
                                                onClick={handleClickShowCode}
                                                onMouseDown={handleMouseDownCode}
                                                edge="end"
                                            >
                                                {showGeneratedReferenceCode ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Reference Code"
                                    inputProps={{
                                        classes: {
                                            notchedOutline: classes.notchedOutline
                                        }
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" item xs={13} >
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="body2" color="red" fontSize="12px" >
                                Please save the reference code and do not diclose or share with anyone. 
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>  
                    <Grid container alignItems="center" justifyContent="center" item xs={13} style={{ marginTop: "15px" }}>
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="h4" color="black" value={generatedReferenceCode}>
                                Withdrawal Details:
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" item xs={13} >
                        <Box
                            sx={{
                                mb: 2
                            }}
                        >
                            <Typography variant="body2" color="black" >
                                Amount: PHP 1000
                            </Typography>
                            <Typography variant="body2" color="black" >
                                Date and Time: {currentDate}
                            </Typography>
                            <Typography variant="body2" color="black" >
                                Reference number: {generateReferenceNumber}
                            </Typography>
                        </Box>
                    </Grid>
                    <div id="recaptcha-container"></div>
                    <AnimateButton>
                        <Button
                            style={{ marginTop: "5px", marginBottom: "-5px" }}
                            fullWidth
                            size="medium"
                            type="submit"
                            variant="contained"
                            color="secondary"
                            component={Link}
                            to="/pages/homescreen/homescreen"
                        >
                            OK
                        </Button>
                    </AnimateButton>
                </Grid>
            </Grid>
        </>
    );
};

export default FirebaseWithdrawConfirmation;
