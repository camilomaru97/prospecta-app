import React from 'react'

export const InfoHeader = () => {
    return (
        <div className="branding__container">
            <div className="branding__info-banner">
                <div className="branding__info">
                    <h1>BRANDING</h1>
                    <p>
                        Que tu marca no se pierda en el mercado, creemos juntos
                        historia con un buen trabajo de branding que genere el
                        reconocimiento que estas buscando.
                    </p>
                    <div className="branding__btn">
                        <a href="https://wa.me/573242711886">Contactar</a>
                    </div>
                </div>

                <div className="branding__img-info">
                    <img 
                        src = {'../assets/branding/michael-vector-06.png'}
                        alt = 'Michael Vector'
                    />
                </div>

            </div>
        </div>
    )
}
