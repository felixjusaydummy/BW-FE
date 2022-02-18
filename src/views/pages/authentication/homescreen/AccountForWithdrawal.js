import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@material-ui/core/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery, Button, Modal, Box, Menu, MenuItem, Fade, IconButton } from '@material-ui/core';
// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthFooter from 'ui-component/cards/AuthFooter';
import FirebaseAccountForWithdrawal from '../firebase-forms/FirebaseAccountForWithdrawal';

import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

// assets

//= ===============================|| AUTH3 - Withdrawal ||================================//
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

const AccountForWithdrawal = () => {
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
                                        <IconButton variant="contained" href="withdraw" size="medium">
                                            <ArrowBackIosNewIcon />
                                        </IconButton>
                                        <IconButton
                                            sx={{ backgroundColor: 'white', color: 'black', size: 'large' }}
                                            style={{ float: 'right' }}
                                            variant="contained"
                                            href="#"
                                            size="medium"
                                            alignItems="center"
                                            id="fade-button"
                                            aria-controls="fade-menu"
                                            aria-haspopup="true"
                                            aria-expanded={open1 ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Menu
                                            id="fade-menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'fade-button'
                                            }}
                                            anchorEl={anchorEl}
                                            open={open1}
                                            onClose={handleClose1}
                                            TransitionComponent={Fade}
                                        >
                                            <MenuItem onClick={handleClose1} href="account">
                                                Profile
                                            </MenuItem>
                                            <MenuItem onClick={handleClose1}>My account</MenuItem>
                                            <MenuItem onClick={handleClose1}>Logout</MenuItem>
                                        </Menu>
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
                                                        <center>Cardless Withdrawal</center>
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FirebaseAccountForWithdrawal withdrawal={3} />
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    sx={12}
                                    container
                                    alignItems="center"
                                    justifyContent="center"
                                    backgroundColor="black"
                                    spacing="2"
                                >
                                    <Stack direction="row" justifyContent="center" spacing={3}>
                                        <IconButton sx={{ backgroundColor: 'black', color: 'white' }} variant="contained" href="/pages/homescreen/homescreen">
                                            <HomeIcon />
                                        </IconButton>
                                        <IconButton sx={{ backgroundColor: 'black', color: 'white' }} variant="contained" href="/pages/homescreen/profile">
                                            <AccountCircleIcon />
                                        </IconButton>
                                        <IconButton 
                                            sx={{ backgroundColor: 'black', 
                                            color: 'white' }} 
                                            variant="contained" 
                                            href="/pages/homescreen/account"
                                        >
                                            <ManageAccountsIcon />
                                        </IconButton>
                                        <IconButton
                                            sx={{ backgroundColor: 'black', color: 'white' }}
                                            variant="contained"
                                            href="/pages/homescreen/loan"
                                        >
                                            <AccountBalanceIcon />
                                        </IconButton>
                                        <IconButton
                                            sx={{ backgroundColor: 'black', color: 'white' }}
                                            variant="contained"
                                            href="/pages/homescreen/cashin"
                                        >
                                            <LocalAtmIcon />
                                        </IconButton>
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

export default AccountForWithdrawal;
