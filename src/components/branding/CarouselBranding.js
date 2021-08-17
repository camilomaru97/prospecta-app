import React from 'react'
import { SliderWrapBranding } from './SliderWrapBranding'

export const CarouselBranding = () => {
    return (
        <div className='branding__carousel-container'>
            <div className='branding__container-carousel'>
                <div  className='branding__slider-title'>
                    <h2>
                        Marcando la diferencia
                    </h2>
                </div>

                <SliderWrapBranding />
            </div>
        </div>
    )
}
