import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

function Brand() {
    return (
        <>
            <Box sx={{
                height: 'auto',
                backgroundColor: '#FCF8F8',
                marginBottom: '3%'
            }}>
                <Typography py={3} sx={{ color: '#300390', fontFamily: 'Inter', fontWeight: '700', fontSize: '38px', textAlign: 'center' }}>
                    Build a brand your customers love
                </Typography>

                <Box sx={{

                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    {/* box 1 */}
                    <Box sx={{
                        width: '308px',
                        height: '384px',
                        border: '1px solid white',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        // justifyContent:'space-around',
                        alignItems: 'center',
                        marginRight: '1%',
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                        paddingTop: '3%',
                        paddingRight: '3%',
                        paddingLeft: '3%',
                        marginBottom: '4%'
                    }}>
                        <Image src={'/brand1.svg'} width={100} height={100} />
                        <Typography sx={{ color: '#300390', fontFamily: 'Inter', fontWeight: '700', fontSize: '24px', textAlign: 'center', lineHeight: '29px', paddingTop: '5%' }}>
                            100% Money <br /> back guarantee
                        </Typography>
                        <Typography sx={{ color: '#300390', fontFamily: 'Inter', fontWeight: '400', fontSize: '16px', textAlign: 'center', lineHeight: '24.24px', paddingTop: '5%' }}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                        </Typography>
                    </Box>
                    {/* box 2 */}
                    <Box sx={{
                        width: '308px',
                        height: '384px',
                        border: '1px solid white',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        // justifyContent:'space-around',
                        alignItems: 'center',
                        marginRight: '1%',
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                        paddingTop: '3%',
                        paddingRight: '3%',
                        paddingLeft: '3%',
                        marginBottom: '4%'
                    }}>
                        <Image src={'/brand2.svg'} width={100} height={100} />
                        <Typography sx={{ color: '#300390', fontFamily: 'Inter', fontWeight: '700', fontSize: '24px', textAlign: 'center', lineHeight: '29px', paddingTop: '5%' }}>
                            Always quick <br /> turnaround
                        </Typography>
                        <Typography sx={{ color: '#300390', fontFamily: 'Inter', fontWeight: '400', fontSize: '16px', textAlign: 'center', lineHeight: '24.24px', paddingTop: '5%' }}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.                        </Typography>
                    </Box>
                    {/* box 3 */}
                    <Box sx={{
                        width: '308px',
                        height: '384px',
                        border: '1px solid white',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        // justifyContent:'space-around',
                        alignItems: 'center',
                        marginRight: '1%',
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                        paddingTop: '3%',
                        paddingRight: '3%',
                        paddingLeft: '3%',
                        marginBottom: '4%'
                    }}>
                        <Image src={'/brand3.svg'} width={100} height={100} />
                        <Typography sx={{ color: '#300390', fontFamily: 'Inter', fontWeight: '700', fontSize: '24px', textAlign: 'center', lineHeight: '29px', paddingTop: '5%' }}>
                            24/7 Email and <br />live chat support                        </Typography>
                        <Typography sx={{ color: '#300390', fontFamily: 'Inter', fontWeight: '400', fontSize: '16px', textAlign: 'center', lineHeight: '24.24px', paddingTop: '5%' }}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.                        </Typography>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default Brand