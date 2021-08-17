import React from 'react'

export const InfoHeader = () => {
    return (
        <div className="pauta__container-1">
            <div className="pauta__info-banner">
                <div className="info">
                    <h1>PAUTA DIGITAL</h1>
                    <p>
                        Atrae, conecta y convierte a tu público objetivo a través de Facebook e Instagram ADS.
                    </p>
                    <p>
                        Da a conocer tu marca a través de tus redes sociales por medio de anuncios que conecten con tu
                        publico objetivo para lograr resultados que lleven tu negocio a otro nivel.
                    </p>
                    <div className="btn">
                        <a href="https://wa.me/573242711886">Contactar</a>
                    </div>
                </div>

                <div className="img-info">
                    <img 
                        src = {'assets/pauta/caricatura-camilo-02.png'}
                        alt= 'caricatura camilo'
                    />
                </div>

            </div>
        </div>
    )
}
