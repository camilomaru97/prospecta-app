import React from 'react'
import { SliderWrapDev } from './SliderWrapDev'


export const CarouselDev = () => {
    return (
        <div className='dev__carousel-container'>
            <div className='dev__container-carousel'>
                <div className='dev__slider-title'>
                    <h2>
                        Ellos ya están conectados <br />
                        al mundo digital
                    </h2>
                </div>

                <SliderWrapDev />
            </div>
        </div>
    )
}
