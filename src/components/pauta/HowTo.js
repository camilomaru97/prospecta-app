import React from 'react'

export const HowTo = () => {
    return (
        <div className="pauta__container-3">
            <h1>¿COMO LO HACEMOS?</h1>
            <div className="pauta__contenedor">

                <div className="img">
                    <img
                        className="desktop"
                        src={'assets/pauta/desktop.png'}
                        alt='desktop'
                    />
                    <img
                        className="responsive"
                        src={'assets/pauta/responsive.png'}
                        alt='responsive'
                    />
                </div>
                <div className="items">
                    <div className="item">
                        <p className="uno">
                            1. Selecciona el plan que mas se acomode a ti (Recuerda que nosotros te asesoramos).
                        </p>
                    </div>
                    <div className="item">
                        <p className="dos">
                            2. Se hará una reunión con un experto en ADS para determinar cuáles son tus objetivos con tu marca.
                        </p>
                    </div>
                    <div className="item">
                        <p className="tres">
                            3. Después de elaborada y acep- tada la estrategia, procedemos a aterrizar tu cliente potencial
                            a través de un brief que se lle- nara en compañía del experto en ADS.
                        </p>
                    </div>
                    <div className="item">
                        <p className="cuatro">
                            4. Se definirá un presupuesto para las campañas y se pon- drán en producción tus anuncios.
                        </p>
                    </div>
                    <div className="item">
                        <p className="cinco">
                            5. Nosotros nos encargamos de que tus campañas estén optimizadas al 100% durante el mes y
                            culminado el mes, te damos un reporte de las métricas de tu estrategia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
