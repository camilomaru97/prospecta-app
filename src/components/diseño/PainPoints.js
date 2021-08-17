import React from 'react'

export const PainPoints = () => {
    return (
        <div className="diseno__container-2">

            <div className="diseno__boxes">
                <h1>
                    ¿TE HA PASADO?
                </h1>
                <div className="box">
                    <div className="emoji">
                        <img
                            src={'assets/diseño/emojis-paintPoints-01.png'}
                            alt='emoji 1'
                        />
                        
                    </div>
                    <div className="info">
                        <p>
                            ¿Tus piezas gráficas no <br /> generan reacciones en los <br /> clientes?
                        </p>
                    </div>
                </div>
                <div className="box">
                    <div className="emoji">
                        <img
                            src={'assets/diseño/emojis-paintPoints-02.png'}
                            alt='emoji 2'
                        />
                    </div>
                    <div className="info dos">
                        <p>
                            ¿Se te ocurren buenas ideas <br /> de diseño pero no tienes las <br /> herramientas para hacerlas
                            <br /> realidad?
                        </p>
                    </div>
                </div>

                <div className="box">
                    <div className="emoji">
                        <img
                            src={'assets/diseño/emojis-paintPoints-03.png'}
                            alt='emoji 3'
                        />
                    </div>
                    <div className="info tres">
                        <p>
                            ¿Tus piezas gráficas no <br /> generan ventas?
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
