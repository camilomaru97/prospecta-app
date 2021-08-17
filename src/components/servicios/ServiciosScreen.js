import React from 'react'
import { Footer } from '../ui/Footer'
import { Navbar } from '../ui/Navbar'
import { WhaButton } from '../ui/WhaButton'
import { Call } from './Call'
import { InfoHeader } from './InfoHeader'
import { Servicios } from './Servicios'

export const ServiciosScreen = () => {
    return (
        <>
            <header className='header__servicios'>
                <Navbar />
                <InfoHeader />
            </header>
            <Servicios />
            <Call />
            <WhaButton />
            <Footer />
        </>
    )
}
