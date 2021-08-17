import React from 'react'
import { Footer } from '../ui/Footer'
import { Navbar } from '../ui/Navbar'
import { WhaButton } from '../ui/WhaButton'
import { CarouselBranding } from './CarouselBranding'
import { HowTo } from './HowTo'
import { InfoHeader } from './InfoHeader'
import { PaintPoints } from './PaintPoints'
import { Planes } from './Planes'

export const BrandingScreen = () => {
    return (
        <>
            <header className='header__branding'>
                <Navbar />
                <InfoHeader />
            </header>
            <PaintPoints />
            <HowTo />
            <CarouselBranding />
            <Planes />
            <Footer />
            <WhaButton />
        </>
    )
}
