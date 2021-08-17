import React from 'react'
import { SliderWrapPauta } from './SliderWrapPauta'


export const CarouselPauta = () => {
    return (

        <div className='pauta__carousel-container'>
            <div className='pauta-container'>
                <div  className='pauta__slider__title'>
                    <h2>
                        ¿Qué esperas para ver un
                        <br />
                        cambio en tu negocio?
                    </h2>
                </div>

                <SliderWrapPauta />
            </div>
        </div>
    )
}
