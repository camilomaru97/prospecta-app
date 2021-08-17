import React from 'react'

export const PaintPoints = () => {
    return (
        <div className="branding__container-2">

            <div className="boxes">
                <h1>
                    ¿TE HA PASADO?
                </h1>
                <div className="box">
                    <div className="emoji">
                        <img
                            src={'../assets/branding/emoji-1.jpg'}
                            alt='emoji-1'
                        />
                        {/* <img src="../img/servicios/diseño-grafico/emojis-paintPoints-01.png" alt=""> */}
                    </div>
                    <div className="info">
                        <p>
                            ¿Tu marca se ve <br /> desactualizada?
                        </p>
                    </div>
                </div>
                <div className="box">
                    <div className="emoji">
                        <img
                            src={'../assets/branding/emoji-2.jpg'}
                            alt='emoji-2'
                        />
                        {/* <img src="../img/servicios/diseño-grafico/emojis-paintPoints-02.png" alt=""> */}
                    </div>
                    <div className="info dos">
                        <p>
                            ¿Tu logo tiene problemas a la <br /> hora de ser impreso?
                        </p>
                    </div>
                </div>

                <div className="box">
                    <div className="emoji">
                        <img
                            src={'../assets/branding/emoji-3.jpg'}
                            alt='emoji-3'
                        />
                        {/* <img src="../img/servicios/diseño-grafico/emojis-paintPoints-03.png" alt=""> */}
                    </div>
                    <div className="info tres">
                        <p>
                            ¿Tu marca no se diferencia <br /> de la competencia y no <br /> trasmite lo que deseas?
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
