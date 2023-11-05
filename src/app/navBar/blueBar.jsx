import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function BlueBar() {
    return (
        <Box
            bgcolor={'blue'}
            sx={{
                height: 'auto', // Set a specific height

            }}

        >
            <Typography>
                Become our partner and get up to 90% discount
            </Typography>
        </Box>
    );
}

export default BlueBar;
