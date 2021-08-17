import React from 'react'
import { Footer } from '../ui/Footer'
import { Navbar } from '../ui/Navbar'
import { WhaButton } from '../ui/WhaButton'
import { CarouselDev } from './CarouselDev'
import { HowTo } from './HowTo'
import { InfoHeader } from './InfoHeader'
import { PainPoints } from './PainPoints'
import { Planes } from './Planes'

export const DesarrolloScreen = () => {
    return (
        <>
            <header className='header__desarrollo'>
                <Navbar />
                <InfoHeader />
            </header>
            <PainPoints />
            <HowTo />
            <CarouselDev />
            <Planes />
            <Footer />
            <WhaButton />
        </>
    )       
}
