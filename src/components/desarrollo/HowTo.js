import React from 'react'

export const HowTo = () => {
    return (
        <div className="desarrollo__container-3">
            <h1>¿COMO LO HACEMOS?</h1>
            <div className="desarrollo__contenedor">

                <div className="img">
                    <img 
                        className = 'desktop'
                        src = {'../assets/desarrollo/how-to-desktop-05.png'}
                        alt = 'how to desktop'
                    />
                    <img 
                        className = 'responsive'
                        src = {'../assets/desarrollo/how-to-responsive-05.png'}
                        alt = 'how to desktop'
                    />
                </div>
                <div className="items">
                    <div className="item">
                        <p className="uno">
                            1. Se te asignara un diseñador web y un desarrollador para llevar a cabo tu página web.
                        </p>
                    </div>
                    <div className="item">
                        <p className="dos">
                            2. Se hará una reunión con el fin de conocer los requerimientos de tu empresa (se
                            analiza el público y la competencia).
                        </p>
                    </div>
                    <div className="item">
                        <p className="tres">
                            3. Te ayudamos con la redacción del contenido que necesita tu sitio web.
                        </p>
                    </div>
                    <div className="item">
                        <p className="cuatro">
                            4. Se diseñará la interfaz que cumpla con los requerimientos solicitados en la reunión.
                        </p>
                    </div>
                    <div className="item">
                        <p className="cinco">
                            5. Te entregamos el diseño total de la pagina web con toda su experiencia de usuario y usabilidad.
                        </p>
                    </div>
                    <div className="item">
                        <p className="cinco">
                            6. Se inicia con el proceso de desarrollo.
                        </p>
                    </div>
                    <div className="item">
                        <p className="cinco">
                            7. Desplegamos tu web a producción y ya estas listo para llevar tu empresa al mundo digital.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
