import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import FirebaseCheckbox from './FirebaseCheckbox';

const card = (
    <>
        <CardContent>
            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold' }} color="teal" gutterBottom>
            As a digital assets owner, the blockwallet app first evaluates the assets you have to propose the loan amount  which you are qualified. The loan amount will be computed based from your asset selling price.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold' }} color="teal" gutterBottom>
            Therefore, we only offer Cash Loan to digital assets owner. To qualify for the loan application, please see below steps:
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;1. Fill out the loan application form.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;2.Declare digital Assets.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;3. Agree to transfer the assets which will then be locked as part 
            &nbsp;&nbsp;&nbsp; of collateral.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;4. Loan application will be verified.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;5. Assets will be locked.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;6. Loan amount shall reflect on to your blockwallet account.
            </Typography>
            
            
        </CardContent>
    </>
);

function FirebaseModalTAC() {
    return (
        <>
            <Grid container alignItems="center" justifyItems="center">
                <Box sx={{ minWidth: 375 }}>
                    <Card variant="outlined" style={{ maxHeight: 300, overflow: 'auto' }}>
                        {card}
                    </Card>
                </Box>
            </Grid>
            <Grid container alignItems="center" justifyItems="center">
                <FirebaseCheckbox />
            </Grid>
        </>
    );
}

export default FirebaseModalTAC;
