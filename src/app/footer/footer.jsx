"use client"
import React from 'react'
import style from './footer.module.css'
import { Typography } from '@mui/material';

import Image from 'next/image';

function Footer() {
    return (
        <div className='p-8  bg-#F6F6F6 h-auto border-2'>
            <div className={` flex flex-col md:flex-row justify-around`}>
                <div className='flex flex-col md:flex-row '>
                    <div className={` md:mr-36 `}>
                        <b>
                            <Typography sx={{ color: '#300390', fontFamily: "Inter", fontWeight: '700', fontSize: '18px', lineHeight: '21.36px' }}>Categories</Typography>
                            <Typography sx={{ color: '#303030', fontFamily: "Inter", fontWeight: '400', fontSize: '14px', lineHeight: '31.36px' }}>
                                <Typography>Logo and Identity</Typography>
                                <Typography>UI/UX Design</Typography>
                                <Typography>Digital Marketing</Typography>
                                <Typography>Print Design</Typography>
                                <Typography>Product and Packeging</Typography>
                                <Typography>Out Door and Signage</Typography>
                                <Typography>Art and Illustration</Typography>
                            </Typography>


                        </b>
                    </div>

                    <div className='md:mr-36'>
                        <hr className='md:hidden' />
                        <Typography sx={{ color: '#300390', fontFamily: "Inter", fontWeight: '700', fontSize: '18px', lineHeight: '21.36px' }}>I need a design</Typography>
                        <Typography sx={{ color: '#303030', fontFamily: "Inter", fontWeight: '400', fontSize: '14px', lineHeight: '31.36px' }}>
                            <Typography>Logo Design</Typography>
                            <Typography>Web Page Design</Typography>
                            <Typography>Business Page Design</Typography>
                            <Typography>Graphic Design</Typography>
                            <Typography>Brichure Design</Typography>
                            <Typography>T-Shirt Design</Typography>
                            <Typography>Poster Design</Typography>
                        </Typography>
                    </div>
                    <div className='md:mr-36'>
                        <Typography sx={{ color: '#300390', fontFamily: "Inter", fontWeight: '700', fontSize: '18px', lineHeight: '21.36px' }}>Our Company</Typography>
                        <Typography sx={{ color: '#303030', fontFamily: "Inter", fontWeight: '400', fontSize: '14px', lineHeight: '31.36px' }}>
                            <Typography>About Us</Typography>
                            <Typography>How It Works</Typography>
                            <Typography></Typography>
                            <Typography>Connect Us</Typography>
                            <Typography>Become Our Partner</Typography>
                            <Typography>Help/FAQ </Typography>
                            <Typography>Blog</Typography>
                        </Typography>
                    </div>
                </div>
                <div >
                    <Image src={'/insta.png'} width={48} height={48} style={{ marginBottom: '8px' }} />
                    <Image src={'/face.png'} width={48} height={48} style={{ marginBottom: '8px' }} />
                    <Image src={'/twitter.png'} width={48} height={48}  />
                </div>
            </div >

          




        </div>
    )
}

export default Footer