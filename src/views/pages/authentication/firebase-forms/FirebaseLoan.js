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

import LinkIcon from "@mui/icons-material/Link";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import RedeemIcon from "@mui/icons-material/Redeem";
import Bpilogo from "ui-component/bpilogo";
import Bdologo from "ui-component/bdologo";
import FirebaseModalTAC from "../LoanApplicationModule/FirebaseModalTAC";

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

const FirebaseLoan = (props, { ...others }) => {
  const classes = useStyles();

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
            <Box
              sx={{
                mb: 2,
              }}
            >
              <Typography variant="subtitle0" color="white">Please select a bank:</Typography>
            </Box>
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
                    width: "150px",
                    backgroundColor: "white",
                  }}
                  variant="rounded"
                >
                  <Button onClick={handleOpen}>
                    <Bpilogo />
                    <Modal open={open} onClose={handleClose}>
                      <Box sx={style}>
                        <Stack alignItems="center" justifyContent="center">
                          <Typography variant="h4">
                            Terms and Conditions
                          </Typography>
                          <Box sx={{ m: 1 }} />
                          <FirebaseModalTAC />
                        </Stack>
                      </Box>
                    </Modal>
                  </Button>
                </Avatar>
                <Avatar
                  sx={{
                    height: "50px",
                    width: "150px",
                    backgroundColor: "white",
                  }}
                  variant="rounded"
                >
                  <Bdologo />
                </Avatar>
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            sx={12}
            container
            alignItems="center"
            justifyContent="center"
          >
            <Box m="auto">
              <Button
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  width: "250px",
                }}
                variant="contained"
                href="account"
                size="medium"
              >
                Manage Linked Accounts
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FirebaseLoan;
