import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

function BoxCompo({ image, title }) {
    return (
        <Box
            sx={{
                border: '1px solid #858585',
                width: '150px',
                height: 'auto',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                marginLeft: '15px',
                marginBottom:'5%',
                boxShadow:'5'
            }}
        >
            <Image width={60} height={60} src={image} alt='services'/>
            <Typography fontSize="small" marginTop='10px'>{title}</Typography>
        </Box>
    );
}

export default BoxCompo;
