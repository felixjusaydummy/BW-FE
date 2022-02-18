import React from 'react';
import { Box, Link, Typography } from '@material-ui/core';

function CarLoanCalculator() {
    return (
        <>
            <Typography variant="subtitle1" sx={{ fontSize: 12.5, fontWeight: 'regular' }}>
                <Box sx={{ fontStyle: 'italic' }}>
                    Need a Loan Calculator? Click &nbsp;
                    <Link
                        sx={{ fontStyle: 'italic', fontSize: 12.5, fontWeight: 'regular' }}
                        href="https://cal.bpiautoloans.com/loan-calculator/bpi"
                        target="_blank"
                        to="/url"
                    >
                        here
                    </Link>
                    .
                </Box>
            </Typography>
        </>
    );
}

export default CarLoanCalculator;
