'use client';
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { effect5 } from '../Landingpage/anime';
import { useRouter } from 'next/navigation';


const Section1 = () => {

    const container1 = useRef(null);
    const isInView = useInView(container1);
    const router = useRouter();


    return (
        <div className='flex flex-col justify-between place-items-center  bg-[#240E64] overflow-hidden  '>
            <div className='flex flex-col justify-center place-items-center mx-8
                lg:justify-start lg:place-items-start
                2xl:justify-start 2xl:place-items-starts 
                '>
                <div className='text-white text-[8vw] font-bold
                md:text-[7vw] 
                lg:text-[5vw]
                2xl:text-[4vw] 
                '>
                    Relax and Sleep Soundly with Sleepiest&apos;s
                    <span className='text-[#B146FE] ml-[4.25vw]'> Sleep Sounds</span>
                </div>
                <div className='text-gray-500 text-[4vw]
                sm:text-[3vw]
                md:text-[2vw]
                lg:text-[1.8vw] lg:w-[50vw] 
                xl:text-[1.25vw]
                2xl:text-[1.25vw]'>
                    Sleepy&apos;s 15+ soothing sleep sounds are designed to promote relaxation and improve your sleep quality. From gentle rain to beautiful mellow sound of beethoven&apos;s moonlight and white noise, our soundscapes are carefully crafted to mask disruptive noises and create a peaceful sleep environment.
                </div>
                <br />
                <div className='text-gray-500 text-[4vw]
                2xl:text-[1.25vw]
                sm:text-[3vw]
                md:text-[2vw]
                lg:text-[1.5vw]
                xl:text-[1.25vw]'>
                    Download Sleepy today and start enjoying a better night&apos;s sleep.
                </div>
                <br />
                <div>
                    <button 
                    className='bg-white text-black capitalize 
                    h-[5vh] w-[35vw] rounded-[3vw] font-bold mb-1 ease-in duration-300 hover:scale-125
                    md:w-[25vw] 
                    lg:h-[5vw] lg:w-[15vw]
                    2xl:h-[4vw] 2xl:w-[12vw]'
                    onClick={() => router.push('/docs')}>
                    
                        try for free
                    </button>
                </div>
                <br />
            </div>
            <motion.div
            ref={container1}
                variants={effect5}
                initial="initial"
                animate={isInView ? "open" : "close"}>
                    
                <Image
                    alt='img1'
                    src="https://res.cloudinary.com/ddhgokvc1/image/upload/v1698932477/Sleepy/images/BoneFire_bab4qo.png"
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

export default Section1
