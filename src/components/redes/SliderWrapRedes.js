import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'


export const SliderWrapRedes= () => {

    let settings = {
        dots: true,
        infinity: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        cssEase: 'linear',

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                autoplaySpeed: 2500,
                arrows: false,
                dots: true
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 2500,
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 2500,
                arrows: false,
                dots: true
              }
            }
        ]

    }

    return (
        <Slider {...settings}>

            

            <div className='redes__card-wrapper'>
                <div className='redes__card'>
                    <div className='redes__card-image'>
                        <img
                            src={'assets/redes/alternativa-1.png'}
                            alt='ameliza'
                        />
                    </div>
                </div>
            </div>

            <div className='redes__card-wrapper'>
                <div className='redes__card'>
                    <div className='redes__card-image'>
                        <img
                            src={'assets/redes/box.png'}
                            alt='brave'
                        />
                    </div>
                </div>
            </div>

            <div className='redes__card-wrapper'>
                <div className='redes__card'>
                    <div className='redes__card-image'>
                        <img
                            src={'assets/redes/hipermaquinas.png'}
                            alt='cuberos'
                        />
                    </div>
                </div>
            </div>

            <div className='redes__card-wrapper'>
                <div className='redes__card'>
                    <div className='redes__card-image'>
                        <img
                            src={'assets/redes/phonego-1.png'}
                            alt='jugos'
                        />
                    </div>
                </div>
            </div>

            <div className='redes__card-wrapper'>
                <div className='redes__card'>
                    <div className='redes__card-image'>
                        <img
                            src={'assets/redes/alternativa-2.png'}
                            alt='jugos'
                        />
                    </div>
                </div>
            </div>

            <div className='redes__card-wrapper'>
                <div className='redes__card'>
                    <div className='redes__card-image'>
                        <img
                            src={'assets/redes/phonego-2.png'}
                            alt='jugos'
                        />
                    </div>
                </div>
            </div>

        </Slider>
    )
}