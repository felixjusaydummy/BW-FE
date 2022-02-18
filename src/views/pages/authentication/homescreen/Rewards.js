import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@material-ui/core/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery, Button } from '@material-ui/core';
import FirebaseReward from '../firebase-forms/FirebaseRewrd';
// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HomeIcon from '@mui/icons-material/Home';
import SavingsIcon from '@mui/icons-material/Savings';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PaymentsIcon from '@mui/icons-material/Payments';
import RedeemIcon from '@mui/icons-material/Redeem';

// assets

//= ===============================|| AUTH3 - REWARDS ||================================//

const Rewards = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item xs={12}>
                                        <Button variant="contained" href="homescreen" size="medium">
                                            <ArrowBackIosNewIcon />
                                        </Button>
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
                                                        <center>Rewards</center>
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FirebaseReward hompage={3} />
                                    </Grid>
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
                                        <Button sx={{ backgroundColor: 'white', color: 'black' }} variant="contained" href="#to be updated">
                                            <SavingsIcon />
                                        </Button>
                                        <Button sx={{ backgroundColor: 'white', color: 'black' }} variant="contained" href="#to be updated">
                                            <EqualizerIcon />
                                        </Button>
                                        <Button sx={{ backgroundColor: 'white', color: 'black' }} variant="contained" href="#to be updated">
                                            <PaymentsIcon />
                                        </Button>
                                        <Button sx={{ backgroundColor: 'white', color: 'black' }} variant="contained" href="#to be updated">
                                            <RedeemIcon />
                                        </Button>
                                    </Stack>
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

export default Rewards;
