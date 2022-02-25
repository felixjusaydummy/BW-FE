import React from "react";
import { Link } from "react-router-dom";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";

// material-ui
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
  Grid,
  InputLabel,
  Modal,
  OutlinedInput,
  Radio,
  RadioGroup,
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
//import HousingLoanCalculator from "./HousingLoanCalculator";
import FirebaseModalTAC from './FirebaseModalTAC';

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
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#e0f2f1',
    border: '1px solid #000',
    boxShadow: 24,
    p: 5,
    px: 4,
    pb: 3,
    minWidth: 500,
    alignItems: 'center',
    justifyContent: 'center'
};
//= ==========================|| FIREBASE - LOAN APPLICATION FORM ||===========================//

const FirebaseLoanApplicationForm = ({ ...others }) => {
  const classes = useStyles();
  const scriptedRef = useScriptRef();
  const [acceptTerms, setAcceptterms] = React.useState(false);
  const [assetytype, setAssettype] = React.useState("");
  const [cryptotype, setCryptotype] = React.useState("");
  const [nfttype, setNfttype] = React.useState("");
  const [digitalAdd, setDigitalAdd] = React.useState("");
  const [sellingprice, setSellingprice] = React.useState(0);
  const [unit, setUnit] = React.useState(0);
  const [conAmount, setConAmount] = React.useState("");
  const [loanamount, setLoanamount] = React.useState("");
  const [loanterm, setLoanterm] = React.useState("");
  const [grossmincome, setGrossmincome] = React.useState("");
  const isValid = conAmount > 1000000 || conAmount < 100000;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [bopen, setBOpen] = React.useState(false);
  const handleBOpen = () => setBOpen(true);
  const handleBClose = () => setBOpen(false);

  return (
    <>
      <Formik
        initialValues={{
          assetytype: "",
          digitalAdd: "",
          sellingprice: "",
          loanamount: "",
          loanterm: "",
          grossmincome: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          assetytype: Yup.string().max(255).required(" "),
          digitalAdd: Yup.string().max(255).required(" "),
          sellingprice: Yup.string().max(255).required(" "),
          unit: Yup.string().max(255).required(" "),
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
              error={Boolean(touched.assetytype && errors.assetytype)}
            >
              <TextField
                required
                select
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                style={{ marginTop: "3px", marginBottom: "2px" }}
                id="outlined-adornment-property-type"
                label="Digital Asset Type"
                margin="normal"
                name="assetytype"
                value={assetytype}
                onBlur={handleBlur}
                error={Boolean(touched.assetytype && errors.assetytype)}
                onChange={(e) => {
                 
                  handleChange(e);
                  setAssettype(e.target.value);
                }}
              >
                <MenuItem value="crypto">Cryptocurrency</MenuItem>
                <MenuItem value="nft">Non-fungible Token</MenuItem>
              </TextField>
            </FormControl>


            {assetytype === 'crypto' ? (
            <FormControl
              fullWidth
              variant="outlined"
              error={Boolean(touched.assetytype && errors.assetytype)}
            >
              <TextField
                required
                select
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                style={{ marginTop: "10px", marginBottom: "10px" }}
                id="outlined-adornment-property-type"
                label="Cryptocurrency Type"
                margin="normal"
                name="cryptotype"
                value={cryptotype}
                onBlur={handleBlur}
                error={Boolean(touched.cryptotype && errors.cryptotype)}
                onChange={(e) => {
                  handleChange(e);
                  setCryptotype(e.target.value);
                }}
              >
                <MenuItem value="btc">Bitcoin</MenuItem>
                <MenuItem value="eth">Ethereum</MenuItem>
                <MenuItem value="bnb">Binance Coin</MenuItem>
                <MenuItem value="ADA">Cardano</MenuItem>
                <MenuItem value="SOL">Solana</MenuItem>
                <MenuItem value="XRP">XRP </MenuItem>
              </TextField>
            </FormControl>
            ) : null }

            {assetytype === 'nft' ? (
            <FormControl
              fullWidth
              variant="outlined"
              error={Boolean(touched.assetytype && errors.assetytype)}
            >
              <TextField
                required
                select
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                style={{ marginTop: "10px", marginBottom: "10px" }}
                id="outlined-adornment-property-type"
                label="Non-fungible Token Type"
                margin="normal"
                name="nfttype"
                value={nfttype}
                onBlur={handleBlur}
                error={Boolean(touched.nfttype && errors.nfttype)}
                onChange={(e) => {
                  handleChange(e);
                  setNfttype(e.target.value);
                }}
              >
                <MenuItem value="axs">Axie</MenuItem>
                <MenuItem value="MANA">Decentraland</MenuItem>
                <MenuItem value="SAND">The Sandbox</MenuItem>
                <MenuItem value="OMI">ECOMI</MenuItem>
                <MenuItem value="WAX">WAXP</MenuItem>
                <MenuItem value="ILV">Illuvium</MenuItem>
              </TextField>
            </FormControl>
            ) : null }

          <FormControl
              variant="outlined"
              fullWidth
              error={Boolean(touched.digitalAdd && errors.digitalAdd)}
              className={classes.loanInput}
              
            >
              <TextField
              
                required
                style={{ marginTop: "3px", marginBottom: "2px" }}
                id="outlined-adornment-digitalAdd"
                label="Digital ID"
                margin="normal"
                name="digitalAdd"
                value={digitalAdd}
                onBlur={handleBlur}
                error={Boolean(touched.digitalAdd && errors.digitalAdd)}
                onChange={(e) => {
                  handleChange(e);
                  setDigitalAdd(e.target.value);
                }}
              />
              <FormHelperText id="standard-weight-helper-text-cnumber-register">
                Enter your Digital Asset Public Key
              </FormHelperText>
            </FormControl>
            <FormControl
              variant="outlined"
              fullWidth
              error={Boolean(touched.sellingprice && errors.sellingprice)}
              className={classes.loanInput}
              style={{ marginTop: "-5px", marginBottom: "2px" }}
            >
              <CurrencyTextField
                required
                variant="outlined"
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                
                fullWidth
                label="Unit"
                margin="normal"
                name="unit"
                type="text"
                textAlign="left"
                value={unit}
                currencySymbol=""
                error={Boolean(touched.unit && errors.unit)}
                className={classes.loanInput}
                onChange={(event, unit) => {
                  setUnit(unit)
                  setConAmount(sellingprice*unit)
                  setLoanamount(conAmount*.8)
                }
              }
              />
            </FormControl>


            <FormControl
              variant="outlined"
              fullWidth
              error={Boolean(touched.sellingprice && errors.sellingprice)}
              className={classes.loanInput}
              style={{ marginTop: "-5px", marginBottom: "2px" }}
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
                // helperText={isValid && "Enter amount from ₱100,000 to ₱1,000,000"}
                className={classes.loanInput}
                onChange={(event, sellingprice) => {
                  setSellingprice(sellingprice)
                  // setLoanamount(sellingprice*unit)
                  // //setLoanamount(sellingprice)
                  setConAmount(sellingprice*unit)
                  setLoanamount(conAmount*.8)
                }
              }
              />
            </FormControl>
            <FormControl
              fullWidth
              style={{ marginTop: "-5px", marginBottom: "2px" }}
              error={Boolean(touched.loanamount && errors.loanamount)}
              className={classes.loanInput}
              autoComplete="off"
            >
              <CurrencyTextField
                variant="outlined"
                required
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                fullWidth
                label="Converted Amount in Peso"
                margin="normal"
                name="conAmount"
                type="text"
                textAlign="left"
                value={conAmount}
                currencySymbol=""
                error={Boolean(touched.conAmount && errors.conAmount) || isValid}
                helperText={isValid && "Enter amount from ₱100,000 to ₱500,000"}
                className={classes.loanInput}
                onChange={(event, conAmount) => {
                  setConAmount(conAmount)
                  
                  
                }
              }
                disabled
              />
              {/* <FormHelperText id="standard-weight-helper-text-loan-amount">
                Enter amount from ₱100,000 to ₱1,000,000
              </FormHelperText> */}

            </FormControl>
            <FormControl
              fullWidth
              style={{ marginTop: "-5px", marginBottom: "2px" }}
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
                label="Loanable Amount"
                margin="normal"
                name="loanamount"
                type="text"
                textAlign="left"
                value={loanamount}
                currencySymbol=""
                error={Boolean(touched.loanamount && errors.loanamount)}
                className={classes.loanInput}
              
                onChange={(event, loanamount) => {
                  setLoanamount(loanamount)
                  
                }}
                disabled
              />
              {/* <FormHelperText id="standard-weight-helper-text-loan-amount">
                Enter amount from ₱100,000 to ₱1,000,000
              </FormHelperText> */}

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
                <MenuItem value="five">6 months</MenuItem>
                <MenuItem value="ten">9 months</MenuItem>
                <MenuItem value="fifteen">1 year</MenuItem>
                <MenuItem value="fifteen">2 years</MenuItem>
                <MenuItem value="fifteen">3 years</MenuItem>
              </TextField>
            </Stack>
            <Grid container>
              <Box sx={{ m: 1 }} />
            </Grid>
            
            <Stack alignItems="center" justifyContent="center">
              <Typography sx={{ fontSize: 12.5 }} variant="h4" color="#424242">
                IMPORTANT: By submitting this Loan Application Form, you are
                agreeing to the Terms and Conditions and Privacy Policy as set
                by BPI.
              </Typography>
              <Box sx={{ m: 1 }} />
              <Grid container alignItems="center" style={{ marginTop: "-10px", marginBottom: "-20px" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      required
                      checked={acceptTerms}
                      onChange={(event) => {setAcceptterms(event.target.checked);handleOpen()}}
                      name="acceptTerms"
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
                      I agree with Terms and Conditions of this as set by BPI.
                    </Typography>
                  }
                  
                />
                <Modal open={open} onClose={handleClose}>
                          <Box sx={style}>
                            <Stack alignItems="center" justifyContent="center">
                          <Typography variant="h4">
                          Terms & Conditions
                          </Typography>
                          <Box sx={{ m: 1 }} />
                          <FirebaseModalTAC />
                      </Stack>

                  </Box>
                </Modal>
              </Grid>
            </Stack>
                

            <Grid container>
              <Box sx={{ m: 1 }} />
            </Grid>
            <Box sx={{ m: 1 }} />

            
            {/* <HousingLoanCalculator /> */}
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
                  style={{ marginTop: "-20px", marginBottom: "6px" }}
                  disableElevation
                  disabled={
                    !(
                      assetytype &&
                      digitalAdd &&
                      conAmount &&
                      unit &&
                      sellingprice &&
                      loanamount &&
                      loanterm &&
                      acceptTerms
                    )
                  }
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                  onClick={handleBOpen}
                >
                  Continue
                  <Modal open={bopen} onClose={handleBClose}>
                    <Box sx={style}>
                      <Box sx={{ m: 3 }} />
                      <Stack alignItems="center" justifyContent="center">
                        <Typography
                          align="center"
                          variant="h1"
                          color="#004d40"
                          sx={{ fontSize: 23.5, fontWeight: "bold" }}
                        >
                          Congratulations! Your loan application has submitted
                          successfully!
                        </Typography>
                        <Box sx={{ m: 0.5 }} />
                        <Typography
                          align="center"
                          variant="h4"
                          sx={{ fontSize: 14 }}
                        >
                          Your application will be processed for the next 1-3
                          business days. Kindly take note of the reference
                          number indicated below.
                        </Typography>
                        <Box sx={{ m: 1.5 }} />
                        <Typography
                          align="center"
                          variant="h4"
                          sx={{ fontSize: 17 }}
                        >
                          Reference number: #20220109
                        </Typography>
                        <Box sx={{ m: 1.7 }} />
                        <Button
                          halfWidth
                          color="secondary"
                          variant="contained"
                          href="/pages/homescreen/homescreen"
                        >
                          Back to home
                        </Button>
                      </Stack>
                    </Box>
                  </Modal>
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
