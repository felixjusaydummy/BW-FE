import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@material-ui/core/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery, Button, Menu, MenuItem, Fade, Box, IconButton } from '@material-ui/core';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthFooter from 'ui-component/cards/AuthFooter';
import logo from '../../../../assets/images/logo-transparent.png';
import bpilogo from '../../../../assets/images/bpilogo.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FirebaseCollateral from './FirebaseCollateral';

// assets
import MenuIcon from '@mui/icons-material/Menu';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

//= ===============================|| LOAN - Collateral ||================================//

const Collateral = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
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
                                        <IconButton
                                            sx={{ backgroundColor: 'white', color: 'black', size: 'large' }}
                                            variant="contained"
                                            href="/pages/loanapplication/loanpurpose"
                                            size="medium"
                                        >
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
                                            aria-expanded={open ? 'true' : undefined}
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
                                            open={open}
                                            onClose={handleClose}
                                            TransitionComponent={Fade}
                                        >
                                            <MenuItem onClick={handleClose} href="account">
                                                Profile
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                                        </Menu>
                                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                                            <Grid item sx={{ mb: 3 }}>
                                                <Link to="#">
                                                    <img src={logo} alt="Berry" width="50" />
                                                </Link>
                                            </Grid>
                                            <Grid item sx={{ mb: 2 }}>
                                                <Link to="#">
                                                    <img src={bpilogo} alt="Berry" width="50" />
                                                </Link>
                                            </Grid>
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
                                                        <Typography
                                                            color={theme.palette.secondary.main}
                                                            gutterBottom
                                                            variant={matchDownSM ? 'h4' : 'h3'}
                                                            fontSize="20px"
                                                        >
                                                            Loan Application Form
                                                        </Typography>
                                                        <Typography
                                                            variant="h3"
                                                            fontStyle="bold"
                                                            fontSize="16px"
                                                            textAlign={matchDownSM ? 'center' : ''}
                                                        >
                                                            Property Declaration 

                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <FirebaseCollateral homepage={3} />
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
                                            href="/pages/withdrawal/withdraw"
                                        >
                                            <AccountBalanceWalletIcon />
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

export default Collateral;
