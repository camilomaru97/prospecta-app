import React from 'react'
import { Footer } from '../ui/Footer'
import { Navbar } from '../ui/Navbar'
import { WhaButton } from '../ui/WhaButton'
import { CallAction } from './CallAction'
import { InfoHeader } from './InfoHeader'
import { InfoNosotros } from './InfoNosotros'

export const NosotrosScreen = () => {
    return (
        <>
            <header className='header__nosotros'>
                <Navbar />
                <InfoHeader />
            </header>
            <InfoNosotros />
            <CallAction />
            <Footer  />
            <WhaButton />
        </>
    )
}
