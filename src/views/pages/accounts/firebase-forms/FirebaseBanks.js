import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// material-ui
import { makeStyles } from '@material-ui/styles';
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
    OutlinedInput,
    Stack,
    TextField,
    Typography,
    useMediaQuery
} from '@material-ui/core';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import BDO from 'ui-component/BDO';
import BPI from 'ui-component/BPI';
import PNB from 'ui-component/PNB';
import RCBC from 'ui-component/RCBC';
import UB from 'ui-component/UB';

import { IconPlus } from '@tabler/icons';

// style constant
const useStyles = makeStyles((theme) => ({
    redButton: {
        fontSize: '1rem',
        fontWeight: 500,
        backgroundColor: theme.palette.grey[50],
        border: '1px solid',
        borderColor: theme.palette.grey[100],
        color: theme.palette.grey[700],
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.875rem'
        }
    },
    signDivider: {
        flexGrow: 1
    },
    signText: {
        cursor: 'unset',
        margin: theme.spacing(2),
        padding: '5px 56px',
        borderColor: `${theme.palette.grey[100]} !important`,
        color: `${theme.palette.grey[900]}!important`,
        fontWeight: 500
    },
    loginIcon: {
        marginRight: '16px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '8px'
        }
    },
    loginInput: {
        ...theme.typography.customInput
    }
}));

const icons = {
    IconPlus
};

//= ==========================|| FIREBASE - BANKS ||===========================//

const FirebaseBanks = ({ ...others }) => {
    const classes = useStyles();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const customization = useSelector((state) => state.customization);
    const [showPassword, setShowPassword] = React.useState(false);
    const [checked, setChecked] = React.useState(true);

    const [strength, setStrength] = React.useState(0);
    const [level, setLevel] = React.useState('');

    const googleHandler = async () => {
        console.error('Register');
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('123456');
    }, []);

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box
                        sx={{
                            mt: 2
                        }}
                    >
                        <Stack direction="row" justifyContent="center" spacing={2}>
                            <AnimateButton>
                                <Button
                                    fullWidth
                                    color="primary"
                                    component={Link}
                                    size="large"
                                    to="/accounts/bank"
                                    type="submit"
                                    variant="text"
                                >
                                    <BDO />
                                </Button>
                            </AnimateButton>
                            <AnimateButton>
                                <Button
                                    fullWidth
                                    color="primary"
                                    component={Link}
                                    size="large"
                                    to="/accounts/bank"
                                    type="submit"
                                    variant="text"
                                >
                                    <BPI />
                                </Button>
                            </AnimateButton>
                            <AnimateButton>
                                <Button
                                    fullWidth
                                    color="primary"
                                    component={Link}
                                    size="large"
                                    to="/accounts/bank"
                                    type="submit"
                                    variant="text"
                                >
                                    <PNB />
                                </Button>
                            </AnimateButton>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box
                        sx={{
                            mt: 2
                        }}
                    >
                        <Stack direction="row" justifyContent="center" spacing={2}>
                            <AnimateButton>
                                <Button
                                    fullWidth
                                    color="primary"
                                    component={Link}
                                    size="large"
                                    to="/accounts/bank"
                                    type="submit"
                                    variant="text"
                                >
                                    <RCBC />
                                </Button>
                            </AnimateButton>
                            <AnimateButton>
                                <Button
                                    fullWidth
                                    color="primary"
                                    component={Link}
                                    size="large"
                                    to="/accounts/bank"
                                    type="submit"
                                    variant="text"
                                >
                                    <UB />
                                </Button>
                            </AnimateButton>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            mt: 2
                        }}
                    >
                        <Divider />
                    </Box>
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box
                        sx={{
                            mt: 2
                        }}
                    >
                        <AnimateButton>
                            <Button
                                fullWidth
                                color="primary"
                                component={Link}
                                size="large"
                                type="submit"
                                startIcon={<IconPlus />}
                                to="/accounts/add"
                                variant="contained"
                            >
                                <Typography variant="h4" color="white" sx={{ textDecoration: 'none' }}>
                                    Add Bank Account
                                </Typography>
                            </Button>
                        </AnimateButton>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default FirebaseBanks;
