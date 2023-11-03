'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { slideUpToDown } from './anime';
import {useRouter} from 'next/navigation';
import Socials from '../Socials/Socials';

const Slider = ({handleSlider}: any) => {

    const router = useRouter();

    return (
        <motion.div 
            className='fixed bg-[#6108F0] h-[50vh] w-screen z-10'
            variants={slideUpToDown}
            initial="initial"
            animate="open"
            exit="exit"
            >
            <div className='text-white text-[6vw] font-bold flex flex-col justify-evenly place-items-center h-[50vh] '>
                <ul>
                    <li onClick={() =>{ router.push('/'), handleSlider()}}>Home</li>
                    <li onClick={() => {router.push('/about'), handleSlider()}}>About</li>  
                    <li onClick={() => {router.push('/docs'), handleSlider()}}>Docs</li>  
                </ul> 
                <div className=''>
                    <Socials/>
                </div>
            </div>
            

        </motion.div>
    )
}

export default Slider