'use client';
import React from 'react'
import Image from 'next/image'

const Socials = () => {

    const handleSocials = (platform: number) => {
        if (platform == 1) {
            window.open('https://github.com/kewalkhondekar25/Sleepy-Mobile-App', '_blank');
        } else if (platform === 2) {
            window.open('https://www.linkedin.com/in/kewal-khondekar-39215b137/', '_blank');
        } else if (platform === 3) {
            window.open('https://twitter.com/KewalKhondekar', '_blank');
        } else if (platform === 4) {
            window.open('https://instagram.com/itssleeepytime?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr', '_blank');
        } else if (platform === 5) {
            window.open('https://www.youtube.com/channel/UCRbLKkOwXmMURyxbjxwDtIQ', '_blank');
        }
    }

    return (
        <div className='relative'>
            <div className='flex h-[20vw] w-[60vw]
            2xl:h-[10vw] 2xl:w-[20vw]
            xl:h-[10vw] xl:w-[20vw]
            lg:h-[10vw] lg:w-[20vw]
            md:h-[10vw] md:w-[30vw]
            sm:h-[10vw] sm:w-[20vw]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    className="lucide lucide-github cursor-pointer
                    mr-[3vw] h-[8vw] w-[8vw] mx-auto
                    2xl:mr-[2vw] 2xl:h-[2vw] 2xl:w-[2vw] 
                    xl:mr-[2vw] xl:h-[2vw] xl:w-[2vw]
                    lg:mr-[2vw] lg:h-[2vw] lg:w-[2vw]
                    md:mr-[2vw] md:h-[3vw] md:w-[3vw] "
                    onClick={() => { handleSocials(1) }}>
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    className="lucide lucide-linkedin cursor-pointer
                    mr-[3vw] h-[8vw] w-[8vw] 
                    2xl:mr-[2vw] 2xl:h-[2vw] 2xl:w-[2vw]
                    xl:mr-[2vw] xl:h-[2vw] xl:w-[2vw]
                    lg:mr-[2vw] lg:h-[2vw] lg:w-[2vw]
                    md:mr-[2vw] md:h-[3vw] md:w-[3vw]"
                    onClick={() => { handleSocials(2) }}>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    className="lucide lucide-twitter cursor-pointer
                    mr-[3vw] h-[8vw] w-[8vw] 
                    2xl:mr-[2vw] 2xl:h-[2vw] 2xl:w-[2vw]
                    xl:mr-[2vw] xl:h-[2vw] xl:w-[2vw]
                    lg:mr-[2vw] lg:h-[2vw] lg:w-[2vw]
                    md:mr-[2vw] md:h-[3vw] md:w-[3vw]"
                    onClick={() => { handleSocials(3) }}>
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    className="lucide lucide-instagram  cursor-pointer
                    mr-[3vw] h-[8vw] w-[8vw]
                    2xl:mr-[2vw] 2xl:h-[2vw] 2xl:w-[2vw]
                    xl:mr-[2vw] xl:h-[2vw] xl:w-[2vw]
                    lg:mr-[2vw] lg:h-[2vw] lg:w-[2vw]
                    md:mr-[2vw] md:h-[3vw] md:w-[3vw]"
                    onClick={() => { handleSocials(4) }}
                ><rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    className="lucide lucide-youtube cursor-pointer
                    mr-[3vw] h-[8vw] w-[8vw] 
                    2xl:mr-[1vw] 2xl:h-[2vw] 2xl:w-[2vw]
                    xl:mr-[2vw] xl:h-[2vw] xl:w-[2vw]
                    lg:mr-[2vw] lg:h-[2vw] lg:w-[2vw]
                    md:mr-[2vw] md:h-[3vw] md:w-[3vw]"
                    onClick={() => { handleSocials(5) }}>
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" />
                </svg>

            </div>
        </div>
    )
}

export default Socials
