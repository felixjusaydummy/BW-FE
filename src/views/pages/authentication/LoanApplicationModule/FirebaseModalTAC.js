import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import FirebaseCheckbox from './FirebaseCheckbox';

const card = (
    <>
        <CardContent>
            <Typography variant="subtitle1" sx={{ fontSize: 15, fontWeight: 'bold' }} color="teal" gutterBottom>
                I (We) confirm that:
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;1. All the statements, information and supporting documents provided by me (us) are true, correct and accurate;
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;2. Where the information or data provided was collected by me (us) from third party sources, the relevant consent
                has been secured by me (us) from the relevant parties to ehom such information relates.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;3. Any material misinterpretations or falsity or omission herein will be construed as an act of defraud the Bank
                and may be a ground for denial of my (our) application or, if already granted, the cancellation or termination
                thereof, without prejudice to such civil and/or criminal liability that the Bank may pursue against me (us).
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;4. It is the sole prerogative of the Bank to grant or deny my (our) application and should the same be denied, the Bank
                has no obligation to provide me (us) the reason for such decision.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;5. All information and documents obtained by the Bank in connection with my (our) application shall remain the property of
                the Bank.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;6. The Bank may impose such terms, conditions and requirements as it may deem necessary or proper relative to my (our)
                availment of any of the Bank's products, services, facilities and channels.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;7. I (We) shall notify the Bank of any material change affecting the information and
                documents provided by me (us).
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;8. I (we) may receive updates, notices and announcements on my (our) application and/or any of the Bank's products, services,
                facilities and channels via SMS/text, email or fax transmission or such other means of communication deemed appropriate by the
                Bank.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;9. Where applicable, the Bank may enroll my (our) approved application with any credit protection provider, or guarantee program
                of any institution, whether public or private, at the Bank's sole option.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;10. 1 (we) have read and understood BPl's Terms and Conditions governing Products, Services, Facilities and Channels found at
                bpiexpressonline and expressly agree, where applicable, to the term and conditions thereof.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;11. The foregoing shall apply to all products, services, facilities and channels of the Bank that I (we) may avail of.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            You will keep information relating or pertaining to me (us) including, but not limited to, any information on my (our) accounts, transactions,
            deposit accounts, credit relationships, and/or credit facilities (the "Information"') confidential except that for purposes of the transaction
            herein contemplated and in connection with BPI Family Savings Bank's (BFSB) (i) implementation, administration, facilitation and enhancements of
            its products, services, facilities and channels, (i) pursuit of its marketing, promotional, communication, commercial and research objectives, (i
            regular conduct of business, and/or (ili) compliance with the requirements of applicable laws and/or government regulators or supervisory bodies,
            I (we) consent to BFSB's, its directors, officers, employees, advisers, auditors, agents and representatives (collectively, the "Bank'):
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            a) collection, use, storage, consolidation and processing (collectively, "process" or 'processing") of Information;
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            b) outsourcing of the processing of Information to service providers, whether within or outside the Philippines;
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            c) verification or validation of Information from an and all sources and in any reasonable manner, including but not limited to:
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            (i) the Bureau of Internal Revenue (BIR) to establish the authenticity of my (our) income tax return ("TR') and the accompanying financial
            statements which I (we) submitted to the Bank; and (in) courts or government or administrative agencies or arbitral tribunals on the status
            of any case or proceeding to which I am (we are) a party.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            (ii) disclosure and sharing of Information to:
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            i. BFSB's parent, subsidiaries, affiliates and related interests (the "BPI Group of Companies");
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            ii. credit information or investigation companies, credit bureaus (including, but not limited to, the Credit Information Corporation (CIC)
            pursuant to Republic Act No. 9510 and its implementing rules and regulations), financial institutions, consumer reporting or reference
            agencies, credit protection provider or guarantee institutions, brokers, insurers, underwriters;
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            iii. any judicial, governmental, supervisory, regulatory or equivalent body of the Philippines or other jurisdictions; such person or
            entity as required by the laws or regulations of any country with jurisdiction over the affairs or business of the Bank or any member of the
            BPI Group of Companies; stock exchange on which the shares or other securities of the Bank or any member of the BPI Group of Companies are
            listed pursuant to its rules;
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            iv. any potential transferee or assignee of the Bank's rights and/or obligations under the relevant contracts or agreements;
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            v. service providers engaged by the Bank or by any member of the BPI Group of Companies, marketing, promotional, network, loyalty program and
            joint venture partners and other relevant external parties, whether based within or outside the Philippines ( collectively, the "Relevant 
            Parties" ); and,
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            vi. such other persons or entities that [the Bank] or any member of the BPI Group of Companies, may deem necessary or appropriate to facilitate
            the above-stated purposes or those that may relate to or arise therefrom, as and when required by the circumstances.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            &nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12.5, fontWeight: 'regular' }} color="black" gutterBottom>
            The foregoing constitutes my (our) express consent under the applicable confidentiality and data privacy laws of the Philippines and other
            jurisdiction and agree to hold the Bank, each member of the BI Group of Companies and the Relevant Parties, free and harmless from any and all
            liabilities, claims, damages and suits of whatever kind and nature, that may arise in connection with the implementation and compliance with the
            authorization conferred by me (us) hereunder.
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
                {/* <FirebaseCheckbox /> */}
            </Grid>
        </>
    );
}

export default FirebaseModalTAC;
