import React from 'react'
import { Footer } from '../ui/Footer'
import { Navbar } from '../ui/Navbar'
import { WhaButton } from '../ui/WhaButton'
import { CarouselRedes } from './CarouselRedes'
import { HowTo } from './HowTo'
import { InfoHeader } from './InfoHeader'
import { PainPoints } from './PainPoints'
import { Planes } from './Planes'

export const RedesScreen = () => {
    return (
        <>
            <header className='header__redes'>
                <Navbar />
                <InfoHeader />
            </header>
            <PainPoints />
            <HowTo />
            <CarouselRedes />
            <Planes />
            <WhaButton />
            <Footer />
        </>
    )
}
