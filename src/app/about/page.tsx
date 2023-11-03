import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <section className=' bg-[#240E64] flex flex-col
        lg:flex lg:flex-row'>
            <div className='mx-[5vw] my-[5vw]'>
                <h1 className='text-white text-[8vw] capitalize font-bold
                md:text-[5vw]'>
                    the sleepy story</h1>
                <div className='text-gray-500 text-[4vw]
                md:text-[3vw] 
                lg:text-[1.2vw] lg:w-[50vw] lg:mt-[5vw]  '>
                    <p>Welcome to Sleepy, the sleep aid app that was born from a close call on the motorway. I&apos;m Kewal Khondekar, the Creator of Sleepy, and I want to share with you the story of how this app came to be.</p>
                    <br />
                    <p>What&apos;s more difficult than waking up early in the morning is cleaning up your night routine. We always sacrifice sleep for work, parties binge-watching hangout, hanging out etc. </p>
                    <br />
                    <p>Insomnia is something we boast about, and it&apos;s dangerously becoming part of pop culture. And we end up complaining about why it&apos;s so difficult to wake up early. Sleep is essential, you guys. It is one of the top reasons for many lifestyle diseases and mental disorders. Research suggests that even small amounts of sleep deprivation can significantly affect health, mood, cognitive capacity, and productivity during the day.</p>
                    <br />
                    <p>A couple of years ago, I was driving home after a long day of work... I fell asleep behind the wheel and nearly crashed. It was a wake-up call for me. I realized that I had been pushing myself too hard and sacrificing sleep for work, which was putting my life at risk. I knew I needed to make a change, but I didn&apos;t know how.</p>
                    <br />
                    <p>That&apos;s when the idea for Sleepy was born. I wanted to create an app that could help people like me take control of their sleep. I wanted to make it easy for people to get the rest they needed.</p>
                    <br />
                    <p>The result is Sleepy, an all-in-one sleep app that provides soothing sounds, sleep enhancing musics, guided meditations, bedtime podcasts, to help you relax and fall asleep faster. It&apos;s like having a personal sleep coach right on your phone.</p>
                    <br />
                    <p>But Sleepy is more than just an app. It&apos;s a mission. I believe that everyone deserves to get a good night&apos;s sleep, and sleepy is committed to helping people achieve that. We know that getting better sleep can have a profound impact on people&apos;s lives, from improving their mental health to boosting their productivity.</p>
                    <br />
                    <p>Sleepy is not just in the business of making an app, rather in the business of improving lives. And sleepy is proud to be doing it one good night&apos;s sleep at a time.</p>
                </div>
            </div>
            <div className='mx-auto my-auto pb-3'>
                <Image 
                    alt='img'
                    src="https://res.cloudinary.com/ddhgokvc1/image/upload/v1698963448/Sleepy/images/wallpprCosmos_debqtx.jpg"
                    height={100}
                    width={100}
                    className='h-[50vw] w-[50vw] rounded-2xl
                    lg:object-center'
                />
            </div>
        </section>
    )
}

export default page
