"use client"
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Button from '@mui/material/Button';
import { bgcolor } from '@mui/system';
import BoxCompo from '../homeComponents/boxCompo';
import { BorderBottom } from '@mui/icons-material';
import Brand from '../homeComponents/brand';
import GigWork from '../homeComponents/gigWork';
import BecomePartner from '../homeComponents/becomePartner';
import FrequentQuestions from '../homeComponents/frequentQuestion';
import pen from '../../../public/pen.png'

function Home2() {

    const theme = useTheme();
    const isXlScreen = useMediaQuery(theme.breakpoints.up('xl'));

    const imageWidth = isXlScreen ? 600 : 340;
    const imageHeight = isXlScreen ? 600 : 348;

    return (
        <>
            <Box sx={{
                backgroundImage: `url('/Vector1.svg'), url('/Vector2.svg')`,
                backgroundPosition: 'center, right',
                backgroundSize: 'cover, cover',
                backgroundRepeat: 'no-repeat, no-repeat',
                width: '100%',
                height: '100vh',
                position: 'relative',
                paddingTop: { xs: '15%', md: '5%' },
                overflow: 'hidden'


            }}
                className="max-md:hidden"
            >
                <Box sx={{
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', // Center along the horizontal axis
                    alignItems: 'center',
                    marginTop: '2%'
                }} >
                    <Typography sx={{ fontFamily: "Inter", fontWeight: '900', lineHeight: { sm: '55.36px', xl: '100px' }, fontSize: { xs: '30px', sm: '45px', xl: '80px' }, textAlign: 'center' }}>
                        Experience flawless custom <br /> designs, consistently delivered.
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Inter", fontWeight: '400', fontSize: { xs: '18px', xl: '36px' }, lineHeight: '42.36px', paddingTop: '1%'
                    }}>
                        With the world's #1 custom design marketplace
                    </Typography>
                    <Button
                        style={{ backgroundColor: '#FF35F7' }}
                        sx={{
                            // width: { sm: '200px',xl:'250px' },
                            // height: '35px',
                            color: 'white',
                            marginTop: '2%',
                            fontSize: { xl: '20px' },
                            padding: '10px'
                        }}>
                        Get Started Now
                    </Button>
                </Box>

                <Box sx={{
                    position: 'absolute',
                    left: '62%', // Horizontal centering
                    top: { xs: '38%', md: '42%', xl: '45%' },
                    transform: 'translateX(-50%)',
                    display: { xs: 'block', md: 'block' }
                }}>
                    <Image
                        src={pen}
                        width={imageWidth}
                        height={imageHeight}

                        alt='pen2'


                    />



                </Box>
            </Box>
            {/* mobile view */}
      
            <Box
                sx={{
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#300390',
                    marginTop: '14vh',
                    // minHeight: 'vh',  // Ensure the Box takes at least the full viewport height
                    textAlign: 'center', // Ensure text is centered
                }}
                className="block md:hidden"
            >
                <Typography
                    sx={{
                        fontFamily: "Inter",
                        fontWeight: '900',
                        lineHeight: { sm: '55.36px', xl: '120px' },
                        fontSize: { xs: '30px', sm: '45px', xl: '110px' },
                        textAlign: 'center',
                    }}
                >
                    Experience flawless custom <br /> designs, consistently delivered.
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "Inter",
                        fontWeight: '400',
                        fontSize: { xs: '18px', xl: '60px' },
                        lineHeight: '42.36px',
                        paddingTop: '1%',
                        textAlign: 'center',
                    }}
                >
                    With the world's #1 custom design marketplace
                </Typography>
                <Button
                    style={{ backgroundColor: '#FF35F7' }}
                    sx={{
                        color: 'white',
                        marginTop: '2%',
                        fontSize: { xl: '20px' },
                        padding: '10px',
                        textAlign: 'center',
                    }}
                >
                    Get Started Now
                </Button>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
            }}>
                <Typography sx={{
                    fontFamily: "Inter",
                    color: '#300390',
                    fontWeight: '700',
                    fontSize: '38px',
                    marginBottom: '3%',
                    overflow: 'hidden'
                }}>
                    Our Design Services
                </Typography>
                <Box sx={{
                    marginBottom: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexWrap: 'wrap'

                }}>
                    <BoxCompo image={'./service1.svg'} title={'Logo Design'} />
                    <BoxCompo image={'./service2.svg'} title={'Business Card Design'} />
                    <BoxCompo image={'./service3.svg'} title={'Flyer Design'} />
                    <BoxCompo image={'./service4.svg'} title={'Brochure Design'} />
                    <BoxCompo image={'./service5.svg'} title={'PostCard Design'} />
                </Box>

                <Typography sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    borderBottom: '2px solid #FF35F7',
                    marginTop: '2%',
                    overflow: 'hidden'
                }}>
                    See all Services <img className='ml-3' src='./arrow.png' />
                </Typography>

            </Box>
            <Brand />
            <GigWork />
            <BecomePartner />
            <FrequentQuestions />


        </>
    )
}

export default Home2