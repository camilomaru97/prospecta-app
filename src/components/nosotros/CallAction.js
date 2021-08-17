import React from 'react'

export const CallAction = () => {
    return (
        <div className="call-action">
            <div className="img ">
                {/* <img className="izquierda" src="../img/quienes/logo-call-05.png" alt=""> */}
                <img 
                    src= {'assets/nosotros/logo-call-05.png'}
                    alt= 'call'
                />
            </div>
            <div className="info">
                <h2>¡YA ESTAS LISTO <br />
                    PARA TRABAJAR!
                </h2>
            </div>

            <div className="img">
                <img 
                    src= {'assets/nosotros/logo-call-05.png'}
                    alt= 'call 2'
                />
                {/* <img className=" derecha" src="../img/quienes/logo-call-05.png" alt=""> */}
            </div>
            <div className="btn__call">
                <a href="https://wa.me/573242711886">ASESORÍA PERSONALIZADA</a>
            </div>
        </div>
    )
}
