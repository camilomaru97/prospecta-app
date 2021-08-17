import React from 'react'

export const InfoHeader = () => {
    return (
        <div className="desarrollo__container">
            <div className="desarrollo__info-banner">
                <div className="info">
                    <h1>DESARROLLO WEB</h1>
                    <p>
                        Queremos que el mundo te conozca y nada mejor que poner en marcha tu sitio web.
                    </p>
                    <p>
                        Por eso, desarrollamos sitios web responsivos, con experiencia de usuario y con las mejores
                        tecnologías que cumplan con tus requerimientos para que te diferencies de la competencia.
                    </p>
                    <div className="btn">
                        <a href="https://wa.me/573242711886">Contactar</a>
                    </div>
                </div>

                <div className="img-info">
                    <img 
                        src = {'../assets/desarrollo/caricatura-camilo-02.png'}
                        alt = 'caricatura camilo'
                    />
                </div>

            </div>
        </div>
    )
}
