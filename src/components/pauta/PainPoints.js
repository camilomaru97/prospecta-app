import React from 'react'

export const PainPoints = () => {
    return (
        <div className="pauta__container-2">

            <div className="pauta__boxes">
                <h1>
                    ¿TE HA PASADO?
                </h1>
                <div className="box">
                    <div className="emoji">
                        <img
                            src={'assets/pauta/emoji-1.jpg'}
                            alt='emoji 1'
                        />
                        {/* <img src="../img/servicios/diseño-grafico/emojis-paintPoints-01.png" alt=""> */}
                    </div>
                    <div className="info">
                        <p>
                            ¿No sabes como atraer <br /> nuevos prospectos a tu <br />
                            negocio?
                        </p>
                    </div>
                </div>
                <div className="box">
                    <div className="emoji">
                        <img
                            src={'assets/pauta/emoji-2.jpg'}
                            alt='emoji 2'
                        />
                    </div>
                    <div className="info dos">
                        <p>
                            ¿Haces publicidad, pero tus <br /> resultados no son los que <br /> esperas?
                        </p>
                    </div>
                </div>

                <div className="box">
                    <div className="emoji">
                        <img
                            src={'assets/pauta/emoji-3.jpg'}
                            alt='emoji 3'
                        />
                    </div>
                    <div className="info tres">
                        <p>
                            ¿Quieres que tu marca <br /> tenga mejor posicionamiento <br /> en redes sociales y no <br /> sabes
                            como lograrlo?
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
