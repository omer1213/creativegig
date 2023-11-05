import * as React from 'react';
import { Box, Typography } from '@mui/material';
import FrequyAskedDesign from './frequyAskedDesign';

export default function FrequentQuestions() {
    const question1 = [
        {
            quest: 'How does the design process work?',
            answ: 'Our design process is simple and efficient. First, you provide us with your design requirements and specifications. Our talented creatives then submit their designs based on your brief. Finally, you have the opportunity to review and choose your favorite design from the options presented to you. '
        },
        {
            quest: 'Can I provide feedback and make revisions to the designs?',
            answ: 'Answer will soon available stay tuned! '
        },
        {
            quest: 'How long does it take to receive the design submissions?',
            answ: 'Answer will soon available stay tuned! '
        },
        {
            quest: 'What if I dont like any of the submitted designs?',
            answ: 'Answer will soon available stay tuned! '
        },
        {
            quest: 'Are the designs I receive exclusive to me?',
            answ: 'Answer will soon available stay tuned! '
        },
        {
            quest: 'What if I need further assistance or have additional questions?',
            answ: 'Answer will soon available stay tuned! '
        }

    ];
    return (
        <Box className='md:mx-64 ' sx={{ marginBottom: { xs: '10%', md: '6%' } }}>
            <Typography sx={{
                fontFamily: "Inter",
                color: '#300390',
                fontWeight: '700',
                fontSize: '40px',
                marginBottom: '6%',
                lineHeight: '48px',
                textAlign: 'center'

            }} >
                Frequently asked questions
            </Typography>
            {question1.map((item, index) => (
                <FrequyAskedDesign
                    key={index}
                    question={item.quest} // Pass the question prop
                    answer={item.answ}  // Pass the answer prop
                />
            ))}


        </Box>
    );
}