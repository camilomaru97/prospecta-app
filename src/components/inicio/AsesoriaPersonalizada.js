import React from 'react'

export const AsesoriaPersonalizada = () => {
    return (
        <div className="box-solucion">
            <div className="img-solucion">
                <img 
                    src={'../assets/inicio/img-banner.png'}
                    alt='asesoria personalizada'
                />
                {/* <img src="../img/inicio/img-banner-3-03.png" alt="asesorias personalizadas"> */}
            </div>
            <div className="info-solucion">
                <p>
                    ¿Todavía no encuentras
                    <br />
                    lo que estas buscando?
                </p>
                <h2>
                    SEGURO, TENEMOS
                    <br />
                    LA SOLUCION
                </h2>
                <div className="btn">
                    <a href="https://wa.me/573242711886">ASESORÍA PERSONALIZADA</a>
                </div>
            </div>
        </div>
    )
}
