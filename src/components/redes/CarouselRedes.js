import React from 'react'
import { SliderWrapRedes } from './SliderWrapRedes'



export const CarouselRedes = () => {
    return (
        <div className='redes__carousel-container'>
            <div className='redes__container-carousel'>
                <div className='redes__slider-title'>
                    <h2>
                        Ellos ya están conectados <br />
                        al mundo digital
                    </h2>
                </div>

                <SliderWrapRedes />
            </div>
        </div>
    )
}
