import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'


export const SliderWrapBranding= () => {

    let settings = {
        dots: true,
        infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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

            

            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img
                            src={'assets/branding/logo-alternativa.png'}
                            alt='alternativa'
                        />
                    </div>
                </div>
            </div>

            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img
                            src={'assets/branding/logo-brave.png'}
                            alt='brave'
                        />
                    </div>
                </div>
            </div>

            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img
                            src={'assets/branding/logo-cuberos.png'}
                            alt='cuberos'
                        />
                    </div>
                </div>
            </div>

            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img
                            src={'assets/branding/logo-jugos.png'}
                            alt='jugos'
                        />
                    </div>
                </div>
            </div>

            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img
                            src={'assets/branding/logo-nexore.png'}
                            alt='nexore'
                        />
                    </div>
                </div>
            </div>

            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img
                            src={'assets/branding/logo-underground.png'}
                            alt='underground'
                        />
                    </div>
                </div>
            </div>

        </Slider>
    )
}

