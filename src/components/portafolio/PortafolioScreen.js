import React from 'react'
import { Navbar } from '../ui/Navbar'
import { WhaButton } from '../ui/WhaButton'
import { Banner } from './Banner'

export const PortafolioScreen = () => {
    return (
        <header>
            <Navbar />
            <Banner />
            <WhaButton />
        </header>
    )
}
