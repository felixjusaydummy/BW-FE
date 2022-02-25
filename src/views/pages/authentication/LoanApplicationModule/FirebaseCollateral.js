import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Box, Button, Grid, Stack, Typography, Avatar, useMediaQuery } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import FirebaseModalDigitalAssetTAC from './FirebaseModalDigitalAssetTAC';
import FirebaseModalTAC from './FirebaseModalTAC';

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

const FirebaseOccupation = (props, { ...others }) => {
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
                     style={{ marginBottom: '15px', padding: '15px' }}
                >
                    <Grid item xs={11} 
                        style={{ marginRight: "-10px", marginTop: "10px" }}>
                        <Box
                            sx={{
                                mb: 3
                            }}
                        >
                            <Typography sx={{ fontSize: '14px' }} variant="subtitle0" color="white">
                                Please choose:
                            </Typography>
                        </Box>
                        
                    </Grid>
                    <Grid item 
                    sx={12} 
                    container 
                    alignItems="center" 
                    justifyContent="center" 
                    style={{ marginTop: "-20px", marginBottom: "13px" }}>
                        
                        <Box m="auto">
                            <Stack alignItems="row" justifyContent="left" spacing={1}>
                                <Avatar sx={{ height: '30px', width: '200px', backgroundColor: 'white' }} variant="rounded">
                                    <Button
                                        href="/pages/loanapplication/loanpurpose"
                                        onClick={handleOpen}
                                        sx={{ backgroundColor: 'white', color: 'black' }}
                                    >
                                        <Typography variant="subtitle1" sx={{ fontSize: 15, fontWeight: 'bold' }}>
                                            House & Lot
                                        </Typography>
                                    </Button>
                                </Avatar>
                                <Box
                                    sx={{
                                        mb: 1
                                    }}
                                />
                                
                                <Avatar sx={{ height: '30px', width: '200px', backgroundColor: 'white' }} variant="rounded">
                                    <Button
                                        href="/pages/loanapplication/loanpurpose"
                                        onClick={handleOpen}
                                        sx={{ backgroundColor: 'white', color: 'black' }}
                                    >
                                        <Typography variant="subtitle1" sx={{ fontSize: 15, fontWeight: 'bold' }}>
                                            Lot
                                        </Typography>
                                    </Button>
                                </Avatar>
                                <Box
                                    sx={{
                                        mb: 1
                                    }}
                                />
                                <Avatar sx={{ height: '30px', width: '200px', backgroundColor: 'white' }} variant="rounded">
                                    <Button
                                        href="/pages/loanapplication/loanpurpose"
                                        onClick={handleOpen}
                                        sx={{ backgroundColor: 'white', color: 'black' }}
                                    >
                                        <Typography variant="subtitle1" sx={{ fontSize: 15, fontWeight: 'bold' }}>
                                            Automobile
                                        </Typography>
                                    </Button>
                                </Avatar>
                                <Box
                                    sx={{
                                        mb: 1
                                    }}
                                />
                                <Avatar sx={{ height: '30px', width: '200px', backgroundColor: 'white' }} variant="rounded">
                                    <Button
                                        href="/pages/loanapplication/loanpurpose"
                                        onClick={handleOpen}
                                        sx={{ backgroundColor: 'white', color: 'black' }}
                                    >
                                        <Typography variant="subtitle1" sx={{ fontSize: 15, fontWeight: 'bold' }}>
                                            Bank Account
                                        </Typography>
                                        
                                </Button>
                            </Avatar>
                                <Box
                                    sx={{
                                        mb: 1
                                    }}
                                />
                                
                                
                                <Avatar sx={{ height: '30px', width: '200px', backgroundColor: 'white' }} variant="rounded">
                                    <Button
                                        href="/pages/loanapplication/digitalasset"
                                        onClick={handleOpen}
                                        sx={{ backgroundColor: 'white', color: 'black' }}
                                    >
                                        <Typography variant="subtitle1" sx={{ fontSize: 15, fontWeight: 'bold' }}>
                                            Digital Asset
                                        </Typography>
                                    </Button>
                                </Avatar>
                            </Stack>
                        </Box>
                    </Grid>

                </Grid>
            </Grid>
        </>
    );
};

export default FirebaseOccupation;
