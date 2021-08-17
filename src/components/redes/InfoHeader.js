import React from 'react'

export const InfoHeader = () => {
    return (
        <div className="redes__container-1">
            <div className="redes__info-banner">
                <div className="info">
                    <h1>REDES SOCIALES</h1>
                    <p>
                        ¿Te gustaría ganar seguidores, vender y dar a conocer tu marca con tus redes sociales? Si es así
                        nosotros somos la solución que tanto necesitas.
                    </p>
                    <p>
                        En prospecta mas transformamos tus cuentas de redes sociales en comunidades y multiplicaremos
                        tus ventas por medio de estrategias y contenido de valor, fidelizamos tus clientes y generamos
                        más tráfico para tu marca.
                    </p>
                    <div className="btn">
                        <a href="https://wa.me/573242711886">Contactar</a>
                    </div>
                </div>

                <div className="img-info">
                    <img 
                        src = {'assets/redes/caricatura-camilo-02.png'}
                        alt = 'redes sociales'
                    />
                </div>

            </div>
        </div>
    )
}
