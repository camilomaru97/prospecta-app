import React from 'react'
import { Navbar } from '../ui/Navbar'
import { WhaButton } from '../ui/WhaButton'
import { Form } from './Form'
import { InfoHeader } from './InfoHeader'

export const ContactoScreen = () => {
    return (
        <>
            <header className='header__contacto'>
                <Navbar />
                <InfoHeader />
            </header>
            <Form />
            
            <WhaButton />
            
        </>
    )
}
