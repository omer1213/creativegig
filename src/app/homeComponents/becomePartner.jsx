import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function BecomePartner() {
    const buttonStyle = {
        backgroundColor: '#FF35F7',
        color: '#300390',
    };
    return (
        <>

            <Box className='mb-10 m-4  md:p-4 md:pb-1 sm:mx-0 md:mx-32 lg:mx-55 ' bgcolor={'#673DE6'} sx={{
                border: '1px solid #673DE6', borderRadius: '9px', display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '3%'
            }}>
                <Box sx={{ width: '70%', textAlign: { xs: 'center', md: 'start' } }}>
                    <Typography sx={{
                        fontFamily: "Inter",
                        color: '#FF35F7',
                        fontWeight: '700',
                        fontSize: '35px',
                        marginTop: { xs: '2%', md: '0%' },
                        marginBottom: { xs: '6%', md: '3%' },
                        lineHeight: '30px',
                        overflow: 'hidden'
                    }}>
                        Count Us As Your Extended Team
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Inter",
                        color: '#FFFFFF',
                        fontWeight: '400',
                        fontSize: '16px',
                        marginBottom: '3%',
                        lineHeight: '20px',

                    }}>
                        We will be happy to be your extended team, working with your internal team to make your
                        online presence as effective and engaging as possible.
                    </Typography>
                </Box>
                <Box className='md:pl-8 md:ml-4' sx={{ width: '40%' }}>
                    <Button style={buttonStyle} className='  xl:p-3' sx={{ borderRadius: '100px', marginTop: { xs: '6%', md: '0%' }, marginBottom: { xs: '5%', md: '0%' }, }}>
                        Become Our Partner
                    </Button>
                </Box>

            </Box >

        </>
    )
}

export default BecomePartner