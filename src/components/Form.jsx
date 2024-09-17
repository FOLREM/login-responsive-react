import InputField from './InputField'
import dataInputField from './dataInputField'
import estilos from './Form.module.css'
import { useState } from 'react'

const Form = () => {
  const [formToggle, setFormToggle] = useState(true)

  const dataShortInputField = dataInputField.slice(0, 3).filter(field => field.inputName !== 'nombre')

  const estilosForm = [formToggle ? 'formulario-short' : null, 'formulario'].map(css => estilos[css]).join(' ')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleToggleSign = () => {
    formToggle ? setFormToggle(false) : setFormToggle(true)
  }

  return (
    <form action='' className={estilosForm} onSubmit={handleSubmit}>
      <h2 className={estilos.formulario__titulo}>{formToggle ? 'Sign In' : 'Sign UP'}</h2>
      <div className={estilos.formulario__social}>
        <div className={estilos['formulario__social-media']}>
          <i className='ri-google-fill' />
          <i className='ri-github-fill' />
          <i className='ri-linkedin-fill' />
          <i className='ri-facebook-fill' />
        </div>
        <p className={estilos.formulario__info}>
          or use your account
        </p>
      </div>

      {formToggle
        ? dataShortInputField.map(data => (
          <InputField data={data} key={data.inputName} />
        ))
        : dataInputField.map((data) => (
          <InputField data={data} key={data.inputName} />
        ))}
      {formToggle &&
        <div className={estilos.formulario__forgot}>
          <a href='#' className={estilos['formulario__forgot-link']}><small>Forgot your password?</small></a>
        </div>}
      <div className={estilos.formulario__btn}>
        {formToggle
          ? <button className={estilos['formulario__btn-enviar']}>Iniciar Sesión</button>
          : <button className={estilos['formulario__btn-enviar']}>Crear Cuenta</button>}
      </div>
      {formToggle
        ? <div className={estilos.formulario__text}>
          <p className={estilos['formulario__text-question']}>If you don't have an account <a href='#' onClick={handleToggleSign}>Sign Up.</a></p>
          </div>
        : <div className={estilos.formulario__text}>
          <p className={estilos['formulario__text-question']}>Do you have an account? <a href='#' onClick={handleToggleSign}>Sign In.</a></p>
        </div>}
    </form>
  )
}

export default Form
