import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@material-ui/core/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery, Button, Modal, Box, Menu, MenuItem, Fade, IconButton } from '@material-ui/core';
// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthFooter from 'ui-component/cards/AuthFooter';
import FirebaseWithdrawConfirmation from '../firebase-forms/FirebaseWithdrawConfirmation';

// assets

//= ===============================|| AUTH3 - Withdrawal Confirmation ||================================//
// style constant
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    // bgcolor: 'background.paper',
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

const WithdrawConfirmation = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open1 = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl(null);
    };

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                            style={{ marginTop: "20px" }}
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography
                                                        color={theme.palette.secondary.main}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                    >
                                                        <center>Withdrawal Confirmation</center>
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{ marginBottom: "-10px" }}>
                                        <FirebaseWithdrawConfirmation withdrawal={3} />
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default WithdrawConfirmation;
