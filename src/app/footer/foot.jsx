import { Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'



function Foot() {
    const Categories = ["Logo and Identity", "UI/UX Design", "Digital Marketing", "Print Design", "Product and Packeging", "Out Door and Signage", "Art and Illustration"];
    const needDesign = ['Logo Design', 'Graphic Design', 'Brichure Design', 'T-Shirt Design', 'Poster Design', 'Web Page Design', 'Business Page Design'];
    const company = ['About Us', 'How It Works', 'Connect Us', 'Become Our Partner', 'Help/FAQ', 'Blog']
    return (
        <footer className=''>
            <Box sx={{ backgroundColor: '#F6F6F6', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'center', lg: 'space-between' }, alignItems: { xs: 'center', lg: 'start' }, padding: '5%' }}>
                <Box sx={{ width: '302px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Image src={'/footerLogo.svg'} width={180} height={91} />
                    <Typography sx={{ color: '#303030', fontFamily: "Inter", fontWeight: '400', fontSize: '16px', lineHeight: '24.36px', textAlign: 'center' }}>
                        We are a team of talented and passionate professionals who are dedicated to
                        delivering exceptional creative solutions. From captivating graphic designs to stunning illustrations,
                        our agency is here to bring your ideas to life.
                    </Typography>
                </Box>
                <Box>
                    <Typography mb={1} sx={{ color: '#300390', fontFamily: "Inter", fontWeight: '700', fontSize: '18px', lineHeight: '21.36px' }}>
                        Categories
                    </Typography>
                    <Box sx={{ color: '#303030', fontFamily: "Inter", fontWeight: '400', fontSize: '14px', lineHeight: '31.36px' }}>

                        {Categories.map((category, index) => (
                            <Typography mb={.5} key={index} sx={{ cursor: 'pointer', '&:hover': { color: '#300390' }, display: { xs: 'none', md: 'block' } }}>{category}</Typography>
                        ))}


                    </Box>
                </Box>
                <Box>
                    <Typography mb={1} sx={{ color: '#300390', fontFamily: "Inter", fontWeight: '700', fontSize: '18px', lineHeight: '21.36px' }}>
                        I need a design
                    </Typography>
                    <Box sx={{ color: '#303030', fontFamily: "Inter", fontWeight: '400', fontSize: '14px', lineHeight: '31.36px' }}>
                        {needDesign.map((design, index) => (
                            <Typography mb={.5} key={index} sx={{ cursor: 'pointer', '&:hover': { color: '#300390' }, display: { xs: 'none', md: 'block' } }}>{design}</Typography>
                        ))}

                    </Box>

                </Box>
                <Box>
                    <Typography mb={1} sx={{ color: '#300390', fontFamily: "Inter", fontWeight: '700', fontSize: '18px', lineHeight: '21.36px' }}>
                        Our Company
                    </Typography>
                    <Box sx={{ color: '#303030', fontFamily: "Inter", fontWeight: '400', fontSize: '14px', lineHeight: '31.36px' }}>
                        {company.map((company, index) => (
                            <Typography mb={.5} key={index} sx={{ cursor: 'pointer', '&:hover': { color: '#300390' }, display: { xs: 'none', md: 'block' } }}>{company}</Typography>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' } }}>
                    <Image src={'/insta.png'} width={48} height={48} style={{ marginBottom: '8px', marginRight: '5%' }} />
                    <Image src={'/face.png'} width={48} height={48} style={{ marginBottom: '8px', marginRight: '5%' }} />
                    <Image src={'/twitter.png'} width={48} height={48} />
                </Box>
            </Box>
            <Box sx={{ backgroundColor: '#300390' }}>
                <Typography color={'#FFFFFF'} sx={{ fontFamily: "Inter", fontWeight: '400', fontSize: '14px', lineHeight: '14.36px', textAlign: 'center',padding:'12px' }}>
                    Copyright © 2023 All rights are reserved Creative Gig. Trademarks and brands are the property of their respective owners.
                </Typography>
            </Box>
        </footer>
    )
}

export default Foot