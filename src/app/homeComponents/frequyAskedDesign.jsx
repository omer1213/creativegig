
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
function FrequyAskedDesign({ question, answer }) {
    return (
        <>
            <Accordion>
                <AccordionSummary

                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ backgroundColor: '#F5F5F5' }}
                >
                    <Typography sx={{ fontFamily: "Inter", fontWeight: '400', fontSize: { xs: '18px', xl: '22px' }, lineHeight: '31.36px', color: '#300390' }}>
                        {question}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default FrequyAskedDesign