import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@material-ui/core/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@material-ui/core';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import FirebaseAddAccount from '../firebase-forms/FirebaseAddAccount';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';

// assets
import BPI from 'ui-component/BPI';

//= ===============================|| ACCOUNTS - ADD BANK ACCOUNTS ||================================//

const AddAccount = () => {
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
                                    <Grid item sx={{ mb: 3 }}>
                                        <BPI />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Typography align="center" variant="body">
                                                Good day!
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Typography align="justify" variant="body">
                                                By entering your BPI Online Banking account username and password on this BPI Authentication
                                                page and clicking Accept, you hereby authorize BPI to link your BPI Online Banking account
                                                to BLOCWALLET, subject to Terms and Conditions linked below.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Typography align="justify" variant="body">
                                                When deemed necessary by BPI, it may require additional verification, such as, but not
                                                limited to, sending a One-Time Pin via SMS to your BPI-registered mobile number prior to
                                                effecting your BPI Online Banking account transaction/s in accordance with Terms and
                                                Conditions.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Typography align="justify" variant="body">
                                                BPI will not share any of your account information (including personal data) with any
                                                thIrd-party except in accordance with Terms and Conditions.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FirebaseAddAccount />
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

export default AddAccount;
