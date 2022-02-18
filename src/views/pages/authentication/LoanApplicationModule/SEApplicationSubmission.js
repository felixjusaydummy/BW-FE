import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import {
  Box,
  Divider,
  Fade,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

// project imports
import AuthWrapper1 from "../AuthWrapper1";
import AuthCardWrapper from "../AuthCardWrapper";
import Logo from "ui-component/Logo";
import ArrowBackIosNewIcon from "@material-ui/icons/ArrowBackIosNew";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SavingsIcon from "@material-ui/icons/Savings";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import PaymentsIcon from "@material-ui/icons/Payments";
import RedeemIcon from "@material-ui/icons/Redeem";
import FirebaseSEApplicationSubmission from "./FirebaseSEApplicationSubmission";

//= ==========================|| LOAN APPLICATION FORM - APPLICATION SUBMISSION ||===========================//

const SEApplicationSubmission = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));

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
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "calc(100vh - 68px)" }}
          >
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid
                  container
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <IconButton
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      size: "large",
                    }}
                    variant="contained"
                    href="/pages/loanapplication/loanpurpose"
                    size="medium"
                  >
                    <ArrowBackIosNewIcon />
                  </IconButton>
                  <Box sx={{ mx: "auto", width: 100 }} />
                  <IconButton
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      size: "large",
                    }}
                    style={{ float: "right" }}
                    variant="contained"
                    href="#"
                    size="medium"
                    alignItems="center"
                    id="fade-button"
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
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
                  <Grid container>
                    <Box sx={{ m: 1 }} />
                  </Grid>
                  <Grid item sx={{ mb: 3 }}>
                    <RouterLink to="#">
                      <Logo />
                    </RouterLink>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction={matchDownSM ? "column-reverse" : "row"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          spacing={1}
                        >
                          <Typography
                            color={theme.palette.secondary.main}
                            gutterBottom
                            variant={matchDownSM ? "h4" : "h3"}
                            fontSize="20px"
                          >
                            Housing Loan Application Form
                          </Typography>
                          <Typography
                            variant="h3"
                            fontStyle="bold"
                            fontSize="16px"
                            textAlign={matchDownSM ? "center" : ""}
                          >
                            Submission of Supporting Documents
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <FirebaseSEApplicationSubmission />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
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
                    <Stack direction="row" justifyContent="center" spacing={3}>
                      <IconButton
                        sx={{ backgroundColor: "white", color: "black" }}
                        variant="contained"
                        href="homescreen"
                      >
                        <HomeIcon />
                      </IconButton>
                      <IconButton
                        sx={{ backgroundColor: "white", color: "black" }}
                        variant="contained"
                        href="#to be updated"
                      >
                        <SavingsIcon />
                      </IconButton>
                      <IconButton
                        sx={{ backgroundColor: "white", color: "black" }}
                        variant="contained"
                        href="#to be updated"
                      >
                        <EqualizerIcon />
                      </IconButton>
                      <IconButton
                        sx={{ backgroundColor: "white", color: "black" }}
                        variant="contained"
                        href="/pages/homescreen/Loan"
                      >
                        <PaymentsIcon />
                      </IconButton>
                      <IconButton
                        sx={{ backgroundColor: "white", color: "black" }}
                        variant="contained"
                        href="#to be updated"
                      >
                        <RedeemIcon />
                      </IconButton>
                    </Stack>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default SEApplicationSubmission;
