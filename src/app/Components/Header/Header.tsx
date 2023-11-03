'use client';
import React, {useState} from 'react'
import { Gloria_Hallelujah } from 'next/font/google';
import Slider from '../Slider/Slider';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const sleepyFont = Gloria_Hallelujah({
    weight: "400",
    subsets: ['latin'],
    display: 'swap'
})

const Header = () => {

    const [isSliderOpen, setSliderOpen] = useState(false);

    const handleSlider = () => {
        setSliderOpen(!isSliderOpen);
    }

    const router = useRouter();

    return (
        <section className='relative bg-[#0A003C] flex justify-between place-items-center '>
            <div>
                <p className={`${sleepyFont.className} text-white p-3 text-[6vw]
                2xl:text-[2vw] 
                xl:text-[2vw]
                lg:text-[2vw]
                md:text-[5vw]
                sm:text-[5vw] `}>
                    Sleepy
                </p>
            </div>
            <button 
                className='text-black bg-white rounded-lg  border-2 mx-1 font-medium capitalize block z-20
                    lg:hidden'
                onClick={handleSlider}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="lucide lucide-menu z-50"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>    
            </button>
            <div className='hidden
            lg:block'>
                <ul className='text-white flex cursor-pointer
                '>
                    <li 
                    onClick={() => {router.push('/')}}
                    className='lg:mr-[2vw] lg:capitalize lg:font-medium'>home</li>
                    <li 
                    onClick={() => {router.push('/about')}}
                    className='lg:mr-[2vw] lg:capitalize lg:font-medium'>about</li>
                    <li 
                    onClick={() => {router.push('/docs')}}
                    className='lg:mr-[2vw] lg:capitalize lg:font-medium'>docs</li>
                </ul>
            </div>
            <AnimatePresence mode='wait'>
                {isSliderOpen && <Slider handleSlider={handleSlider}/>}
            </AnimatePresence>
        </section>
    )
}

export default Header
