import React from 'react';
import { Box, Button, Link, Modal, Stack, Typography } from '@material-ui/core';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    length: 400,
    height: 500,
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'auto'
};

function ListOfIDs() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Typography variant="subtitle2" sx={{ fontStyle: 'italic', fontSize: 11.5, fontWeight: 'regular' }}>
                **Here are the &nbsp;
                <Link sx={{ fontStyle: 'italic', fontSize: 11.5, fontWeight: 'regular' }} onClick={handleOpen}>
                    list of acceptable IDs
                </Link>
                <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                        <Stack alignItems="left" justifyContent="left" spacing={1}>
                            <Typography color="#004d40" gutterBottom variant="h4">
                                List of Acceptable IDs
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                1. Passport
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                2. Driver&apos;s License
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                3. Professional Regulatory Commission (PRC) ID
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                4. Postal ID
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                5. Voter&apos;s ID
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                6. Taxpayer Identification Number (TIN) ID
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                7. Government Service Insurance Sysytem (GSIS) e-Card
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                8. Social Security System (SSS) card
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                9. Senior Citizen card
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                10. Overseas Filipino Worker (OFW) ID
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                11. Overseas Workers Welfare Administration (OWWA) ID
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                12. Government office and Government-owned and Controlled Corporation (GOCC) ID (e.g., Armed Forces of the
                                Philippines (AFP), Home Development Mutual Fund (HDMF) IDs)
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                13. ID issued by the National Council on Disability Affairs
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                14. Integrated Bar of the Philippines (IBP) ID
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                15. Company IDs issued by private entities or institutions registered with or supervised or regulated either
                                by the Banko Sentral ng Pilipinas (BSP), Securities and Exchange Commission (SEC) or Insurance Commission
                                (IC)
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                16. PhilHealth Health Insurance Card ng Bayan
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                17. National Bureau of Investigation (NBI) Clearance
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                18. Police Clearance
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                19. Barangay Certification
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                20. Seaman&apos;s Book
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                21. Alien Certificate of Registration / Immigrant Certificate of Registration (not applicable for Housing
                                Loan)
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                22. Department of Social Welfare and Development (DSWD) Certification
                            </Typography>
                            <Typography color="black" gutterBottom variant="subtitle1" sx={{ fontSize: 11.5 }}>
                                23. Professional ID cards issued by Maritime Industry Authority (MARINA)
                            </Typography>
                        </Stack>
                        <Box sx={{ mt: 2 }} />
                        <Stack alignItems="center" justifyContent="center">
                            <Button size="large" variant="contained" color="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Stack>
                    </Box>
                </Modal>
                .
            </Typography>
        </>
    );
}

export default ListOfIDs;
