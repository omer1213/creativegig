import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function GigWork() {
    return (
        <>
            <Typography sx={{ color: '#300390', fontFamily: 'Inter', fontWeight: '700', fontSize: '40px', textAlign: 'center', lineHeight: '54px', marginBottom: '2%',padding:"15px" }}>
                How does Creative Gig work?
            </Typography>
            <Box width={'100%'} my={'3%'} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, padding:'15px' }}>
                <Box sx={{
                    width: { xs: '100%', md: '40%' }, marginLeft: { sm: '0%',md:'5%' ,xl: '17%' }, marginTop: { xs: '5%', md: '0%' }, display: 'flex',
                    flexDirection: 'column', // Stack on xs devices
                    justifyContent: 'center', // Center horizontally
                    alignItems: { xs: 'center', md: 'start' },
                }}>
                    <Image src={'/work.jpg'} width={508} height={413} alt='WorkImage' />
                </Box>
                <Box sx={{ color: 'white', width: { xs: '100%', md: '60%' }, marginRight: { sm: '5%', xl: '14%' }, marginLeft: '1%', paddingRight: '4%' }}>
                    <Typography sx={{ color: '#300390', fontFamily: 'Inter', fontWeight: '700', fontSize: '24px', lineHeight: '29px', marginTop: '1%' }}>
                        Tell us your vision
                    </Typography>
                    <Typography sx={{ color: '#303030', fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '20px', marginTop: '2%' }}>
                        Share your design requirements and specifications, and let us bring your ideas to life.
                        Our graphic design server empowers you to
                        communicate your needs clearly and effectively.
                    </Typography>
                    <Typography sx={{ color: '#300390', fontFamily: 'Inter', fontWeight: '700', fontSize: '24px', lineHeight: '29px', marginTop: '1%' }}>
                        Unleash the creativity
                    </Typography>
                    <Typography sx={{ color: '#303030', fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '20px', marginTop: '2%' }}>
                        Our talented pool of creatives eagerly awaits your design project.
                        They'll craft unique and captivating designs tailored specifically to your requirements.
                        Sit back and watch as a multitude of creative possibilities unfold.
                    </Typography>
                    <Typography sx={{ color: '#300390', fontFamily: 'Inter', fontWeight: '700', fontSize: '24px', lineHeight: '29px', marginTop: '1%' }}>
                        Your perfect pick
                    </Typography>
                    <Typography sx={{ color: '#303030', fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '20px', marginTop: '2%' }}>
                        With an array of impressive designs at your fingertips, you have the power to choose your favorite.
                        Explore the submitted designs, compare them side by side, and select the one that resonates with your vision.
                        Enjoy the satisfaction of finding the perfect custom design, every time.
                    </Typography>
                    <Typography sx={{ color: '#303030', fontFamily: 'Inter', fontWeight: '400', fontSize: '18px', lineHeight: '20px', marginTop: '4%', display: 'flex', borderBottom: '1px solid #FF35F7', width: '230px', justifyContent: 'center', alignItems: 'center' }}>
                        Place your first order now <a href='#'> <img className='ml-3' src='./arrow.png' /> </a>
                    </Typography>

                </Box >
            </Box >
        </>
    )
}

export default GigWork