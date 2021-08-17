import React from 'react'
import { Footer } from '../ui/Footer'
import { Navbar } from '../ui/Navbar'
import { WhaButton } from '../ui/WhaButton'
import { AsesoriaPersonalizada } from './AsesoriaPersonalizada'
import { Carousel } from './Carousel'
import { Hacemos } from './Hacemos'
import { InfoHeader } from './InfoHeader'
import { Servicios } from './Servicios'


export const InicioScreen = () => {
    return (
        <>
            <header className='header__inicio'>
                <Navbar />
                <InfoHeader />
            </header>
            <Hacemos />
            <Servicios />
            <Carousel />
            <AsesoriaPersonalizada />
            <div className='fixer'></div>
            <Footer /> 
            <WhaButton />
        </>
    )
}
