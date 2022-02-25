import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import FirebaseCheckbox from './FirebaseCheckbox';

const card = (
    <>
        <CardContent>
            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold' }} color="teal" gutterBottom>
            Hi Anne!
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold' }} color="teal" gutterBottom>
            &nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            Congratulations, your Loan application in BPI has been approved!
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            In accordance with your application, the bank will grant you a sum of Php 640,000.00 to meet your expenses. 
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold' }} color="teal" gutterBottom>
            &nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            Loan Type: House Loan
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            Amount: Php 762,028
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            Interest rate: 8% per Annummount: Php 762,028
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 15, fontWeight: 'bold' }} color="teal" gutterBottom>
            &nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            Thank you.
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
            
        </>
    );
}

export default FirebaseModalTAC;
