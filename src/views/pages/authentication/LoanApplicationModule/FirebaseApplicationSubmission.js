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
import ListOfIDs from "./ListOfIDs";
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

//= ==========================|| FIREBASE - LOAN APPLICATION FORM - APPLICATION SUBMISSION ||===========================//

const FirebaseApplicationSubmission = ({ ...others }) => {
  const classes = useStyles();
  const scriptedRef = useScriptRef();

  const [pvalidid, setPvalidid] = React.useState("");
  const [svalidid, setSvalidid] = React.useState("");
  const [coe, setCoe] = React.useState("");
  const [tax, setTax] = React.useState("");
  const [tct, setTct] = React.useState("");
  const [lotplan, setLotplan] = React.useState("");
  const [taxdocs, setTaxdocs] = React.useState("");
  const [endorsement, setEndorsement] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [acceptTerms, setAcceptterms] = React.useState(false);

  const [bopen, setBOpen] = React.useState(false);
  const handleBOpen = () => setBOpen(true);
  const handleBClose = () => setBOpen(false);
  

  return (
    <>
      <Formik
        initialValues={{
          pvalidid: "",
          svalidid: "",
          coe: "",
          tax: "",
          tct: "",
          lotplan: "",
          taxdocs: "",
          endorsement: "",
          acceptTerms: false,
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          pvalidid: Yup.string().max(255).required(" "),
          svalidid: Yup.string().max(255).required(" "),
          coe: Yup.string().max(255).required(" "),
          tax: Yup.string().max(255).required(" "),
          tct: Yup.string().max(255).required(" "),
          lotplan: Yup.string().max(255).required(" "),
          taxdocs: Yup.string().max(255).required(" "),
          endorsement: Yup.string().max(255).required(" "),
          acceptTerms: Yup.bool().oneOf(
            [true],
            "Accept Terms & Conditions is required"
          ),
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
              error={Boolean(touched.pvalidid && errors.pvalidid)}
            >
              <Typography
                variant="h2"
                sx={{ fontSize: 14, fontWeight: "bold" }}
                color="black"
              >
                A. Preliminary Requirement
              </Typography>
              <Box sx={{ m: 0.5 }} />
              <Typography
                variant="overline text"
                htmlFor="validation-loaninput-field"
              >
                2 Valid Government-issued ID (with photo & signature):
              </Typography>
              <Typography variant="subtitle2">
                (2 primary OR 1 primary & 1 secondary)
              </Typography>
              <TextField
                required
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                style={{ marginTop: "3px", marginBottom: "2px" }}
                id="outlined-adornment-valid-id"
                margin="normal"
                name="pvalidid"
                value={pvalidid}
                type="file"
                onBlur={handleBlur}
                error={Boolean(touched.pvalidid && errors.pvalidid)}
                onChange={(e) => {
                  handleChange(e);
                  setPvalidid(e.target.value);
                }}
              />
            </FormControl>
            <FormControl
              fullWidth
              variant="outlined"
              error={Boolean(touched.svalidid && errors.svalidid)}
            >
              <TextField
                required
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                style={{ marginTop: "3px", marginBottom: "2px" }}
                id="outlined-adornment-valid-id"
                margin="normal"
                name="svalidid"
                value={svalidid}
                type="file"
                onBlur={handleBlur}
                error={Boolean(touched.svalidid && errors.svalidid)}
                onChange={(e) => {
                  handleChange(e);
                  setSvalidid(e.target.value);
                }}
              />
              <ListOfIDs />
            </FormControl>
            <Box sx={{ m: 3 }} />
            <Typography
              variant="h2"
              sx={{ fontSize: 14, fontWeight: "bold" }}
              color="black"
            >
              B. Income Documents
            </Typography>
            <Box sx={{ m: 0.5 }} />
            <FormControl
              fullWidth
              variant="outlined"
              error={Boolean(touched.coe && errors.coe)}
            >
              <Typography
                variant="overline text"
                htmlFor="validation-loaninput-field"
              >
                Certificate of Employment (with salary, position & length of
                service):
              </Typography>
              <TextField
                required
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                style={{ marginTop: "3px", marginBottom: "2px" }}
                id="outlined-adornment-employment-certificate"
                margin="normal"
                name="coe"
                value={coe}
                type="file"
                onBlur={handleBlur}
                error={Boolean(touched.coe && errors.coe)}
                onChange={(e) => {
                  handleChange(e);
                  setCoe(e.target.value);
                }}
              />
            </FormControl>
            <Box sx={{ m: 2 }} />
            <FormControl
              fullWidth
              variant="outlined"
              error={Boolean(touched.tax && errors.tax)}
            >
              <Typography
                variant="overline text"
                htmlFor="validation-loaninput-field"
              >
                Latest Income Tax Return (ITR) for the last 2 years:
              </Typography>
              <TextField
                required
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                style={{ marginTop: "3px", marginBottom: "2px" }}
                id="outlined-adornment-latest-tax"
                margin="normal"
                name="tax"
                value={tax}
                type="file"
                onBlur={handleBlur}
                error={Boolean(touched.tax && errors.tax)}
                onChange={(e) => {
                  handleChange(e);
                  setTax(e.target.value);
                }}
              />
            </FormControl>
            <Box sx={{ m: 3 }} />
            <Typography
              variant="h2"
              sx={{ fontSize: 14, fontWeight: "bold" }}
              color="black"
            >
              C. Collateral Documents
            </Typography>
            <Box sx={{ m: 0.5 }} />
            <FormControl
              fullWidth
              variant="outlined"
              error={Boolean(touched.tct && errors.tct)}
            >
              <Typography
                variant="overline text"
                htmlFor="validation-loaninput-field"
              >
                Clear copy of Owner&apos;s Duplicate Copy of TCT/CCT:
              </Typography>
              <TextField
                required
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                style={{ marginTop: "3px", marginBottom: "2px" }}
                id="outlined-adornment-tct"
                margin="normal"
                name="tct"
                value={tct}
                type="file"
                onBlur={handleBlur}
                error={Boolean(touched.tct && errors.tct)}
                onChange={(e) => {
                  handleChange(e);
                  setTct(e.target.value);
                }}
              />
            </FormControl>
            <Box sx={{ m: 2 }} />
            <FormControl
              fullWidth
              variant="outlined"
              error={Boolean(touched.lotplan && errors.lotplan)}
            >
              <Typography
                variant="overline text"
                htmlFor="validation-loaninput-field"
              >
                Lot Plan with Location/Vicinity Map certified by licensed
                Geodetic Engineer:
              </Typography>
              <TextField
                required
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                style={{ marginTop: "3px", marginBottom: "2px" }}
                id="outlined-adornment-latest-lot-plan"
                margin="normal"
                name="lotplan"
                value={lotplan}
                type="file"
                onBlur={handleBlur}
                error={Boolean(touched.lotplan && errors.lotplan)}
                onChange={(e) => {
                  handleChange(e);
                  setLotplan(e.target.value);
                }}
              />
            </FormControl>
            <Box sx={{ m: 2 }} />
            <FormControl
              fullWidth
              variant="outlined"
              error={Boolean(touched.taxdocs && errors.taxdocs)}
            >
              <Typography
                variant="overline text"
                htmlFor="validation-loaninput-field"
              >
                Photocopy of Tax declaration / Tax receipts / Tax clearance:
              </Typography>
              <TextField
                required
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                style={{ marginTop: "3px", marginBottom: "2px" }}
                id="outlined-adornment-latest-tax-documents"
                margin="normal"
                name="taxdocs"
                value={taxdocs}
                type="file"
                onBlur={handleBlur}
                error={Boolean(touched.taxdocs && errors.taxdocs)}
                onChange={(e) => {
                  handleChange(e);
                  setTaxdocs(e.target.value);
                }}
              />
            </FormControl>
            <Box sx={{ m: 2 }} />
            <FormControl
              fullWidth
              variant="outlined"
              error={Boolean(touched.endorsement && errors.endorsement)}
            >
              <Typography
                variant="overline text"
                htmlFor="validation-loaninput-field"
              >
                Endorsement Letter / Computation Sheet / Contract to Sell from
                developer stating the contract price (for accredited
                developer/project):
              </Typography>
              <TextField
                required
                inputProps={{
                  classes: { notchedOutline: classes.notchedOutline },
                }}
                style={{ marginTop: "3px", marginBottom: "2px" }}
                id="outlined-adornment-latest-endorsement-letter"
                margin="normal"
                name="endorsment"
                value={endorsement}
                type="file"
                onBlur={handleBlur}
                error={Boolean(touched.endorsement && errors.endorsement)}
                onChange={(e) => {
                  handleChange(e);
                  setEndorsement(e.target.value);
                }}
              />
            </FormControl>
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
                      onChange={(event) => {setAcceptterms(event.target.checked);handleBOpen()}}
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
                <Modal open={bopen} onClose={handleBClose}>
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
            <Box sx={{ m: 1 }} />
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
                  disableElevation
                  // disabled={isSubmitting}
                  disabled={
                    !(
                      pvalidid &&
                      svalidid &&
                      coe &&
                      tax &&
                      tct &&
                      lotplan &&
                      taxdocs &&
                      endorsement &&
                      acceptTerms
                    )
                  }
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                  onClick={handleOpen}
                >
                  Continue
                  <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                      <Box sx={{ m: 3 }} />
                      <Stack alignItems="center" justifyContent="center">
                        <Typography
                          align="center"
                          variant="h1"
                          color="#004d40"
                          sx={{ fontSize: 23.5, fontWeight: "bold" }}
                        >
                          Congratulations! Your loan application has been submitted
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

export default FirebaseApplicationSubmission;
