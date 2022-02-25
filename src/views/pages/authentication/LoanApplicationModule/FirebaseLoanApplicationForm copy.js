import React from "react";
import { Link } from "react-router-dom";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";

// material-ui
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Stack,
} from "@material-ui/core";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project imports
import useScriptRef from "hooks/useScriptRef";
import AnimateButton from "ui-component/extended/AnimateButton";
import HousingLoanCalculator from "./HousingLoanCalculator";

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
  loanInput: {
    ...theme.typography.customInput,
  },
}));

//= ==========================|| FIREBASE - LOAN APPLICATION FORM ||===========================//

const FirebaseLoanApplicationForm = ({ ...others }) => {
  const classes = useStyles();
  const scriptedRef = useScriptRef();

  const [propertytype, setPropertytype] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [sellingprice, setSellingprice] = React.useState("");
  const [loanamount, setLoanamount] = React.useState("");
  const [loanterm, setLoanterm] = React.useState("");
  const [grossmincome, setGrossmincome] = React.useState("");

  return (
    <>
      <Formik
        initialValues={{
          propertytype: "",
          address: "",
          sellingprice: "",
          loanamount: "",
          loanterm: "",
          grossmincome: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          propertytype: Yup.string().max(255).required(" "),
          address: Yup.string().max(255).required(" "),
          sellingprice: Yup.string().max(255).required(" "),
          loanamount: Yup.string().max(255).required(" "),
          loanterm: Yup.string().max(255).required(" "),
          grossmincome: Yup.string().max(255).required(" "),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <Box sx={{ m: 2 }} />
            <FormControl
              fullWidth
              variant="outlined"
              error={Boolean(touched.propertytype && errors.propertytype)}
            >
              <TextField
                required
                select
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                style={{ marginTop: "3px", marginBottom: "2px" }}
                id="outlined-adornment-property-type"
                label="Property Type"
                margin="normal"
                name="propertytype"
                value={propertytype}
                onBlur={handleBlur}
                error={Boolean(touched.propertytype && errors.propertytype)}
                onChange={(e) => {
                  handleChange(e);
                  setPropertytype(e.target.value);
                }}
              >
                <MenuItem value="houseandlot">House and Lot</MenuItem>
                <MenuItem value="condo">Condominium</MenuItem>
                <MenuItem value="townhouse">Townhouse</MenuItem>
                <MenuItem value="lot">Vacant Lot</MenuItem>
                <MenuItem value="lot">Digital Asset</MenuItem>
              </TextField>
            </FormControl>
            <FormControl
              variant="outlined"
              fullWidth
              error={Boolean(touched.sellingprice && errors.sellingprice)}
              className={classes.loanInput}
            >
              <CurrencyTextField
                required
                variant="outlined"
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                fullWidth
                label="Selling Price"
                margin="normal"
                name="sellingprice"
                type="text"
                textAlign="left"
                value={sellingprice}
                currencySymbol=""
                error={Boolean(touched.sellingprice && errors.sellingprice)}
                className={classes.loanInput}
                onChange={(event, sellingprice) =>
                  setSellingprice(sellingprice)
                }
              />
            </FormControl>
            <FormControl
              variant="outlined"
              fullWidth
              error={Boolean(touched.address && errors.address)}
              className={classes.loanInput}
            >
              <TextField
                required
                style={{ marginTop: "3px", marginBottom: "2px" }}
                id="outlined-adornment-address"
                label="Address"
                margin="normal"
                name="address"
                value={address}
                onBlur={handleBlur}
                error={Boolean(touched.address && errors.address)}
                onChange={(e) => {
                  handleChange(e);
                  setAddress(e.target.value);
                }}
              />
              <FormHelperText id="standard-weight-helper-text-cnumber-register">
                e.g. House no. or Unit no. Street Name, Brgy.
              </FormHelperText>
            </FormControl>
            <FormControl
              fullWidth
              error={Boolean(touched.loanamount && errors.loanamount)}
              className={classes.loanInput}
            >
              <CurrencyTextField
                variant="outlined"
                required
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                fullWidth
                label="Enter desired loan amount"
                margin="normal"
                name="loanamount"
                type="text"
                textAlign="left"
                value={loanamount}
                currencySymbol=""
                error={Boolean(touched.loanamount && errors.loanamount)}
                className={classes.loanInput}
                onChange={(event, loanamount) => setLoanamount(loanamount)}
              />
              <FormHelperText id="standard-weight-helper-text-loan-amount">
                Enter amount from ₱100,000 to ₱1,000,000
              </FormHelperText>
            </FormControl>
            <Stack spacing={5}>
              <TextField
                required
                select
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                style={{ marginTop: "3px", marginBottom: "2px" }}
                id="outlined-adornment-loan-term"
                label="Term"
                margin="normal"
                name="loanterm"
                value={loanterm}
                onBlur={handleBlur}
                error={Boolean(touched.loanterm && errors.loanterm)}
                onChange={(e) => {
                  handleChange(e);
                  setLoanterm(e.target.value);
                }}
              >
                <MenuItem value="five">5 years</MenuItem>
                <MenuItem value="ten">10 years</MenuItem>
                <MenuItem value="fifteen">15 years</MenuItem>
                <MenuItem value="twenty">20 years</MenuItem>
                <MenuItem value="twentyfive">25 years</MenuItem>
              </TextField>
            </Stack>
            <Grid container>
              <Box sx={{ m: 1 }} />
            </Grid>
            <Box sx={{ m: 1 }} />
            <HousingLoanCalculator />
            {errors.submit && (
              <Box
                sx={{
                  mt: 3,
                }}
              >
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Box
              sx={{
                mt: 4,
              }}
            >
              <AnimateButton>
                <Button
                  style={{ marginTop: "-20px" }}
                  disableElevation
                  disabled={
                    !(
                      propertytype &&
                      address &&
                      sellingprice &&
                      loanamount &&
                      loanterm
                    )
                  }
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to="/pages/loanapplication/personalinformation"
                >
                  Continue
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseLoanApplicationForm;
