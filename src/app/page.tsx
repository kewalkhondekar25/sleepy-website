'use client';
import Image from 'next/image'
import Landingpage from './Components/Landingpage/Landingpage'
import Header from './Components/Header/Header'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import Footer from './Components/Footer/Footer'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main>
      <Landingpage />
      <Section1 />
      <Section2 />
    </main>
  )
}
