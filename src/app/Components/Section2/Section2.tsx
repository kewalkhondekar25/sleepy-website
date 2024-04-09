'use client';
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { effect5, effect6 } from '../Landingpage/anime';
import { useRouter } from 'next/navigation';


const Section2 = () => {

    const container1 = useRef(null);
    const isInView = useInView(container1);
    const router = useRouter();

    return (
        <div className='flex flex-col justify-between place-items-center  bg-[#240E64] overflow-hidden '>
            <div className='flex flex-col justify-center place-items-center mx-8
                lg:justify-start lg:place-items-start 
                xl:justify-start xl:place-items-start xl:ml-[2vw]  
                2xl:justify-start 2xl:place-items-start 2xl:ml-[2vw] '>
                <div className='text-[#B146FE] text-[8vw] font-bold
                    md:text-[7vw] 
                    lg:text-[5vw]
                    2xl:text-[4vw] '>
                    Sleep Meditations & Podcasts
                    <span className='text-white ml-3'>
                    for Deeper Relaxation
                    </span>
                    </div>
                    <div className='text-gray-500 text-[4vw]
                    sm:text-[3vw]
                    md:text-[2vw]
                    lg:text-[1.8vw] lg:w-[50vw]
                    xl:text-[1.5vw]
                    2xl:text-[1.25vw]'>
                    Sleepy&apos;s meditations can help you achieve a deeper state of relaxation for a better night&apos;s sleep. Our guided meditations cover a range of topics, including mindfulness, gratitude, and body relaxation, all designed to quiet your mind and promote relaxation.
                </div>
                <br />
                <div>
                    <button 
                    className='bg-white text-black capitalize 
                    h-[5vh] w-[35vw] rounded-[3vw] font-bold mb-1 ease-in duration-300 hover:scale-125
                    md:w-[25vw]
                    lg:h-[5vw] lg:w-[15vw]
                    2xl:h-[4vw] 2xl:w-[12vw] '
                    onClick={() => router.push('/docs')}>
                    
                        try for free
                    </button>
                </div>
                <br />
            </div>
            <motion.div
            ref={container1}
                variants={effect6}
                initial="initial"
                animate={isInView ? "open" : "close"}>
                    
                <Image
                    alt='img1'
                    src="https://res.cloudinary.com/kewalkhondekar/image/upload/v1698936425/Sleepy/images/podcasts_bgxnnr.png"
                    height={100}
                    width={100}
                    className='h-[450px] w-[300px]
                    md:h-[550px] md:w-[350px]'
                />
            </motion.div>
            <div>

            </div>
        </div>
    )
}

export default Section2
