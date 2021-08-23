import React, { useEffect, useState } from 'react'
import validator from 'validator'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'



export const Form = () => {

    const [value, setValue] = useState({
        nombre: '',
        correo: '',
        celular: '',
        servicio: ''
    })

    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setError(null)
        }, 5000)
    }, [error])


    const hanldeChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const { nombre, correo, celular, servicio } = value;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formValid()) {
            emailjs.sendForm(
                'service_2q2h13y', 
                'template_pax1owk', 
                e.target, 
                'user_YnUG6NroWEaPzvR2VdIrj'  )
                .then(res =>{
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
        }   
    }

    const formValid = () => {

        if (nombre.trim().length === 0) {
            setError('Nombre incorrecto')
            return false;
        } else if (!validator.isEmail(correo)) {
            setError('Email no valido')
            return false;
        } else if (!validator.isNumeric(celular)) {
            setError('Numero incorrecto')
            return false;
        } else if (servicio === '') {
            setError('Selecciona un servicio')
            return false;
        }

        setError(null)

        Swal.fire({
            title: '¡Formulario enviado con exito!',
            text: 'Bienvenido a Prospecta Más, pronto nos comunicaremos contigo',
            icon: 'success',
            confirmButtonText: 'OK'
        })

        setValue({
            nombre: '',
            correo: '',
            celular: '',
            servicio: ''
        })

        return true;
    }


    return (
        <>
            <div className="container">

                <div className="img">
                    <img
                        className='desktop'
                        src={'assets/contacto/img-form-03.png'}
                        alt='desktop contacto'
                    />
                    <img
                        className='responsive'
                        src={'assets/contacto/img-form-responsive-03.png'}
                        alt='responsive contacto'
                    />
                </div>

                <form
                    onSubmit={handleSubmit}
                >
                    {
                        error &&
                        (
                            <div className='error'>
                                <h4>{error}</h4>
                            </div>
                        )
                    }

                    <div className="form">

                        <div className='grupo'>
                            <input
                                type='text'
                                name='nombre'
                                id='nombre'

                                value={nombre}
                                onChange={hanldeChange}
                                autoComplete='off'
                            />
                            <span className='barra'></span>
                            <label>Nombre</label>
                        </div>

                        <div className='grupo'>
                            <input
                                type='text'
                                name='correo'
                                id='correo'

                                value={correo}
                                onChange={hanldeChange}
                                autoComplete='off'
                            />
                            <span className='barra correo'></span>
                            <label>Correo</label>
                        </div>

                        <div className='grupo'>
                            <input
                                type='text'
                                name='celular'
                                id='celular'

                                value={celular}
                                onChange={hanldeChange}
                                autoComplete='off'
                            />
                            <span className='barra'></span>
                            <label>Celular</label>
                        </div>

                        <select
                            name="servicio"
                            id="servicio"
                            onChange={hanldeChange}
                        >
                            <option>Seleccione un servicio</option>
                            <option value={'Desarrollo'}>Desarrollo Web</option>
                            <option value={'Pauta'}>Pauta Digital</option>
                            <option value={'Diseño'}>Diseño Grafico</option>
                            <option value={'Redes'}>Redes Sociales</option>
                            <option value={'Branding'}>Branding</option>
                        </select>

                        <div className='wrap'>
                            <input
                                type='checkbox'
                            />
                            <p>He leido y acepto <a href={'assets/contacto/td.pdf'} target='_blank'>la politica y privacidad</a></p>
                        </div>
                        <button className="submit" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}
