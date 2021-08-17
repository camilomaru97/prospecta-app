import React from 'react'
import { Footer } from '../ui/Footer'
import { Navbar } from '../ui/Navbar'
import { WhaButton } from '../ui/WhaButton'
import { CarouselPauta } from './CarousePauta'
import { HowTo } from './HowTo'
import { InfoHeader } from './InfoHeader'
import { PainPoints } from './PainPoints'
import { Planes } from './Planes'

export const PautaScreen = () => {
    return (
        <>
            <header className='header__pauta'>
                <Navbar />
                <InfoHeader />
            </header>
            <PainPoints />
            <HowTo />
            <CarouselPauta />
            <Planes />
            <Footer />
            <WhaButton />

        </>
    )
}
