import React from 'react'
import { SliderWrapDiseno } from './SliderWrapDiseno'



export const CarouselDiseno = () => {
    return (
        <div className='diseno__carousel-container'>
            <div className='diseno__container-carousel'>
                <div className='diseno__slider-title'>
                    <h2>
                        Ellos ya están conectados <br />
                        al mundo digital
                    </h2>
                </div>

                <SliderWrapDiseno />
            </div>
        </div>
    )
}
