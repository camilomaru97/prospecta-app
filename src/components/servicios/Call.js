import React from 'react'

export const Call = () => {
    return (
        <div className="call__action">
            <div className="img ">
                <img 
                    src={'../assets/servicios/img-back-call-03.png'}
                    alt = 'llamada accion'
                />
            </div>
            <div className="info">
                <h2>
                    ¿NECESITAS ALGUNO DE <br /> NUESTROS SERVICIOS?
                </h2>
            </div>
            <div className="btn">
                <a href="https://wa.me/573242711886">¡EMPECEMOS YA!</a>
            </div>
        </div>
    )
}
