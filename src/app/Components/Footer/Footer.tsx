import React from 'react'
import { Gloria_Hallelujah } from 'next/font/google';
import Socials from '../Socials/Socials';
const sleepyFont = Gloria_Hallelujah({
    weight: "400",
    subsets: ['latin'],
    display: 'swap'
})

const Footer = () => {
    return (
        <section className='relative bg-[#0A003C] h-screen'>

            <div>
                <p className={`${sleepyFont.className} text-white p-3 text-[6vw]
                2xl:text-[2vw] 
                xl:text-[2vw]
                lg:text-[2vw]
                md:text-[5vw] `}>
                    Sleepy
                </p>
            </div>

            <div className='text-gray-500 mx-[1vw]'>
                <p>Helping the world to sleep better, one person at a time.</p>
            </div>

            <div className='my-[100px]'>
                <div className='flex justify-around place-items-center text-center py-[5vw] capitalize
                lg:py-0'>
                    <div>
                        <h3 className='text-white'>company</h3>
                        <ul className='text-gray-500'>
                            <li>about</li>
                            <li>advertise</li>
                            <li>blog</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-white'>help center</h3>
                        <ul className='text-gray-500'>
                            <li>faq</li>
                            <li>careers</li>
                            <li>contact us</li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-around place-items-center text-center py-[5vw] capitalize
                lg:py-[2vw]'>
                    <div>
                        <h3 className='text-white'>legal</h3>
                        <ul className='text-gray-500'>
                            <li>development</li>
                            <li>privacy policy</li>
                            {/* <li>terms & conditions</li> */}
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-white'>devices</h3>
                        <ul className='text-gray-500'>
                            <li>ios</li>
                            <li> android</li>
                            <li>web</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center text-white my-[5vw]
                lg:my-0
                xl:my-[8vw]
                2xl:my-0'>
                    <Socials />
                </div>
            </div>
            <div className='absolute bottom-20 mx-[5vw] w-[90vw]
            text-gray-500 before:bg-gray-500 before:block before:content-[""] before:h-[1px] before:w-[100%] '>
                <div className=' my-[1vw]  '>
                    <span>&copy;</span>
                    <span className='capitalize'>sleepy 2023. all rights reserved</span>
                </div>
            </div>

            <div className='absolute bottom-0 capitalize
            mx-[5vw] text-center text-gray-500 text-[3vw]
            md:text-[2vw] md:mx-[20vw]
            lg:text-[1.25vw] lg:mx-[30vw]
            '>
                this website and application is for educational purpose only.
            </div>

        </section>
    )
}

export default Footer