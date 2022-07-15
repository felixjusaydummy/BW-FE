import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@material-ui/core/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery, Button, Box } from '@material-ui/core';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import FirebaseLogin from '../firebase-forms/FirebaseLogin';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';

//icons
import Borrower from 'ui-component/borrowerType';
import Lender from 'ui-component/lenderType';

//= ===============================|| AUTH3 - LOGIN ||================================//

const Cancel = (e) =>{
    window.close('/pages/register/type')
    window.open('/pages/login/login3')
}

const RegType = () => {
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
                                        <RouterLink to="#">
                                            <Logo />
                                        </RouterLink>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : ''}>
                                                        Choose the type of account you want to open:
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
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
                                                        component={RouterLink}
                                                        to="/pages/register/register3"
                                                    >
                                                        <Stack direction="column" alignItems="center" justifyContent="center" spacing={1}>
                                                            <Borrower />
                                                        </Stack>
                                                    </Button>
                                                    <Typography color="black">Borrower
                                                    </Typography>
                                                </Stack>
                                                <Stack direction="column" alignItems="center" justifyContent="center" spacing={1}>
                                                    <Button
                                                        variant="Outlined"
                                                        type="submit"
                                                        component={RouterLink}
                                                        to="/pages/register/register3"
                                                    >
                                                        <Stack direction="column" alignItems="center" justifyContent="center" spacing={1}>
                                                            <Lender />
                                                        </Stack>
                                                    </Button>
                                                    <Typography color="black">Lender
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                        </Box>
                                        <Button
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                            color="secondary"
                                            onClick={Cancel}
                                        >
                                            Cancel
                                        </Button>
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

export default RegType;
