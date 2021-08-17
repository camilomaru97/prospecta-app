import React from 'react'
import { Link } from 'react-router-dom'


export const Banner = () => {
    return (
        <div className="portafolio__banner">    
            <div className="img-info">

                <Link to='/inicio'>
                    <img 
                        src={'../assets/portafolio/contruccion-img.png'}
                        alt='pagina en construccion'
                    />
                </Link>

                {/* <a href="../html/inicio.html"><img src="../img/portafolio/contruccion-img.png" alt= digitalizacion></a> */}
            </div>
        </div>
    )
}
