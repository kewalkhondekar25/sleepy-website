import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <section className='bg-[#240E64] h-screen  flex flex-col justify-evenly
        md:h-[150vh]
        lg:h-screen'>
            <div className='text-white capitalize font-bold mx-auto'>
                    how to access sleepy app
            </div>
            <div className='text-gray-300 text-[4vw]'>          
                <div className='flex flex-col justify-center place-items-center
                md:text-[3vw]
                lg:flex lg:flex-row lg:text-[1.5vw]
                xl:flex xl:flex-row xl:text-[1.5vw]
                2xl:flex 2xl:flex-row 2xl:text-[1.25vw]'>
                    <div>
                        <ul className='capitalize'>
                            <li>For IOS Devices</li>
                            <li>1. Download Expo Go from apple store </li>
                            <li>2. scan given QR code </li>
                        </ul>
                    </div>
                    <div className='p-[5vw]'>
                        <Image
                            alt='ios'
                            src="https://res.cloudinary.com/ddhgokvc1/image/upload/v1698968529/Sleepy/images/ios_qmjvlz.png"
                            height={100}
                            width={100}
                            className='h-[35vw] w-[35vw]
                            md:h-[30vw] md:w-[30vw]
                            lg:h-[15vw] lg:w-[15vw]
                            xl:h-[12vw] xl:w-[12vw]
                            2xl:h-[12vw] 2xl:w-[12vw]'

                        />
                    </div>
                </div>
            </div>
            <div className='text-gray-300 text-[4vw]'>
                <div className='flex flex-col justify-center place-items-center
                md:text-[3vw]
                lg:flex lg:flex-row lg:text-[1.5vw]
                xl:flex xl:flex-row xl:text-[1.5vw]
                2xl:flex 2xl:flex-row 2xl:text-[1.25vw]'>
                    <div>
                        <ul className='capitalize'>
                            <li>for Android devices</li>
                            <li>1. Download Expo Go from apple store </li>
                            <li>2. scan given QR code </li>
                        </ul>
                    </div>
                    <div className="p-[5vw]">
                        <Image
                            alt='android'
                            src="https://res.cloudinary.com/ddhgokvc1/image/upload/v1698968528/Sleepy/images/android_e11pdm.png"
                            height={100}
                            width={100}
                            className='h-[35vw] w-[35vw]
                            md:h-[30vw] md:w-[30vw]
                            lg:h-[15vw] lg:w-[15vw]
                            xl:h-[12vw] xl:w-[12vw]
                            2xl:h-[12vw] 2xl:w-[152w]'
                        />
                    </div>
                </div>
            </div>
            <div className='text-[3vw] text-gray-500 mx-[2vw]
            md:text-[2vw]
            lg:text-[1vw] lg:mx-auto
            xl:text-[1vw] xl:mx-auto
            2xl:mx-auto'>
                <p>Please note that, every device won&apos;t be able to access sleepy due to limitations with expo sandbox. However, you can always refer our opensource Github Repository.</p>
            </div>
        </section>
    )
}

export default page
