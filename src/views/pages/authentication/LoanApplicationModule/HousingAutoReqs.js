import React from 'react';
import { Box, Link, Typography } from '@material-ui/core';

function HousingAutoReqs() {
    return (
        <>
            <Typography variant="subtitle1" color="white" sx={{ fontSize: 10.5, fontWeight: 'regular' }}>
                <Box sx={{ fontStyle: 'italic' }}>
                <Typography variant="subtitle1" color="white" sx={{ fontSize: 10.5, fontWeight: 'regular' }}>
                    <Link
                        sx={{ color: 'white', fontStyle: 'italic', fontSize: 10.5, fontWeight: 'regular' }}
                        href="https://www.bpihousingloans.com/pages?page=checklist-of-requirements"
                        target="_blank"
                        to="/url"
                    >
                        &nbsp;&nbsp;&nbsp;&nbsp;Housing Loan
                    </Link>
                </Typography>
                <Typography variant="subtitle1" color="white" sx={{ fontSize: 10.5, fontWeight: 'regular' }}>
                    <Link
                        sx={{ color: 'white', fontStyle: 'italic', fontSize: 10.5, fontWeight: 'regular' }}
                        href="https://www.bpiautoloans.com/pages?page=checklist-of-requirements"
                        target="_blank"
                        to="/url"
                    >
                        &nbsp;&nbsp;&nbsp;&nbsp;Car Loan
                    </Link>
                </Typography>
                </Box>
            </Typography>
        </>
    );
}

export default HousingAutoReqs;
