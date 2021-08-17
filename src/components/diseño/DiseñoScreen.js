import React from 'react'
import { Footer } from '../ui/Footer'
import { Navbar } from '../ui/Navbar'
import { WhaButton } from '../ui/WhaButton'
import { CarouselDiseno } from './CarouselDiseno'
import { HowTo } from './HowTo'
import { InfoHeader } from './InfoHeader'
import { PainPoints } from './PainPoints'
import { Planes } from './Planes'


export const DiseñoScreen = () => {
    return (
        <>
            <header className='header__diseño'>
                <Navbar />
                <InfoHeader />
            </header>
            <PainPoints />
            <HowTo />
            <CarouselDiseno />
            <Planes />
            <Footer />
            <WhaButton />
        </>
    )
}
