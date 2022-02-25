import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// material-ui
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  Stack,
  Typography,
  Avatar,
  useMediaQuery,
} from "@material-ui/core";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project imports
import useScriptRef from "hooks/useScriptRef";
import AnimateButton from "ui-component/extended/AnimateButton";

// assets
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import Google from "assets/images/icons/social-google.svg";
import { useTheme } from '@material-ui/core/styles';
import LinkIcon from "@mui/icons-material/Link";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import RedeemIcon from "@mui/icons-material/Redeem";
import Bpilogo from "ui-component/bpilogo";
import Bdologo from "ui-component/bdologo";
import HomeCreditLogo from "ui-component/homecreditlogo";
import CashaloLogo from "ui-component/cashalologo";
import FirebaseModalHL from "../LoanApplicationModule/FirebaseModalHL";

// style constant

const useStyles = makeStyles((theme) => ({
  redButton: {
    fontSize: "1rem",
    fontWeight: 500,
    backgroundColor: theme.palette.grey[50],
    border: "1px solid",
    borderColor: theme.palette.grey[100],
    color: theme.palette.grey[700],
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
  },
  signDivider: {
    flexGrow: 1,
  },
  signText: {
    cursor: "unset",
    margin: theme.spacing(2),
    padding: "5px 56px",
    borderColor: `${theme.palette.grey[100]} !important`,
    color: `${theme.palette.grey[900]}!important`,
    fontWeight: 500,
  },
  loginIcon: {
    marginRight: "16px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "8px",
    },
  },
  loginInput: {
    ...theme.typography.customInput,
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#b2dfdb",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};




//= ===========================|| FIREBASE - ACCOUNT ||============================//

const FirebaseLoanHistory = (props, { ...others }) => {
  const theme = useTheme();
  const classes = useStyles();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
  const customization = useSelector((state) => state.customization);
  const scriptedRef = useScriptRef();
  const [checked, setChecked] = React.useState(true);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
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
          backgroundColor="#076241"
          borderRadius="10px"
          spacing="2"
          style={{ marginBottom: '15px', padding: '15px' }}
        >
          <Grid item xs={11}>

          </Grid>
          <Grid
            item
            sx={12}
            container
            alignItems="center"
            justifyContent="center"
            style={{ marginTop: "-10px", padding: '15px' }}
          >
            <Box m="auto">
              <Stack alignItems="row" justifyContent="left" spacing={1}>
                <Avatar
                  sx={{
                    height: "50px",
                    width: "300px",
                    backgroundColor: "white",
                  }}
                  variant="rounded"
                >
                  <Button onClick={handleOpen}
                  //  href="/pages/loanapplication/employmentstatus"
                   sx={{ backgroundColor: 'white', color: 'black' }}
                   >
                  <Typography variant="body1" sx={{ fontSize: 12.5 }} variant="h4" color="#424242">
                Your Loan Application Status:
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 8 }} variant="h4" color="#424242">
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 8 }} variant="h4" color="#424242">
              23 Feb 2022 | 9:30 AM
              </Typography>

                  </Button>
                  <Modal open={open} onClose={handleClose}>
                          <Box sx={style}>
                            <Stack alignItems="center" justifyContent="center">
                          <Typography variant="h4">
                          Loan Application Updates
                          </Typography> 
                          <Box sx={{ m: 1 }} />
                          <FirebaseModalHL />
                      </Stack>
                  </Box>
                </Modal>
                </Avatar>
                  




                <Avatar
                  sx={{
                    height: "50px",
                    width: "300px",
                    backgroundColor: "white",
                  }}
                  variant="rounded"
                >
                  <Button onClick={handleOpen}
                   href="/pages/loanapplication/employmentstatus"
                   sx={{ backgroundColor: 'white', color: 'black' }}
                   >
                  <Typography variant="body1" sx={{ fontSize: 12.5 }} variant="h4" color="#424242">
                Your Loan Application Status:
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 8 }} variant="h4" color="#424242">
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 8 }} variant="h4" color="#424242">
              22 Feb 2022 | 1:00 PM
              </Typography>
                  </Button>
                </Avatar>
                <Avatar
                  sx={{
                    height: "50px",
                    width: "300px",
                    backgroundColor: "white",
                  }}
                  variant="rounded"
                >
                  <Button onClick={handleOpen}
                   href="/pages/loanapplication/employmentstatus"
                   sx={{ backgroundColor: 'white', color: 'black' }}
                   >
                  <Typography variant="body1" sx={{ fontSize: 12.5 }} variant="h4" color="#424242">
                Your Loan Application Status:
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 8 }} variant="h4" color="#424242">
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 8 }} variant="h4" color="#424242">
              20 Feb 2022 | 10:30 AM
              </Typography>
                  </Button>
                </Avatar>
                <Avatar
                  sx={{
                    height: "50px",
                    width: "300px",
                    backgroundColor: "white",
                  }}
                  variant="rounded"
                >
                  <Button onClick={handleOpen}
                   href="/pages/loanapplication/employmentstatus"
                   sx={{ backgroundColor: 'white', color: 'black' }}
                   >
                  <Typography variant="body1" sx={{ fontSize: 12.5 }} variant="h4" color="#424242">
                Your Loan Application Status:
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 8 }} variant="h4" color="#424242">
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 8 }} variant="h4" color="#424242">
              18 Feb 2022 | 8:30 AM
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

export default FirebaseLoanHistory;
