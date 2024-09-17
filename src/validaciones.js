// const expresiones = {
//   usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
//   nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
//   password: /^.{4,12}$/,
//   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//   telefono: /^\d{7,14}$/
// }

const expresiones = {
  usuario: /^[a-zA-Z0-9_-]{4,16}$/,
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  password: /^.{4,12}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/
}

// const [dbUsers, setDbUsers] = useState([])
// const [switchError, setSwitchError] = useState(false)
// const [usuario, setUsuario] = useState('')
// const [nombre, setNombre] = useState('')
// const [password, setPassword] = useState('')
// const [password2, setPassword2] = useState('')
// const [correo, setCorreo] = useState('')
// const [telefono, setTelefono] = useState('')

// const handleSubmit = (e) => {
//   e.preventDefault()
// }

// const handleKeyUp = (e) => {
//   switch (e.target.name) {
//     case 'usuario':
//       // expresiones.usuario.test(e.target.value)
//       //   ? console.log('correcto')
//       //   : console.log('incorrecto')
//       validarFormulario(expresiones.usuario, e.target)
//       break
//     case 'nombre':
//       validarFormulario(expresiones.nombre, e.target)
//       break
//     case 'password':

//       break
//     case 'password2':

//       break
//     case 'correo':

//       break
//     case 'telefono':

//       break
//   }
// }

// const errorClass = (campo) => {
//   return switchError && campo.length > 0
//     ? 'formulario__grupo formulario__grupo-incorrecto'
//     : !switchError && campo.length >= 4 && campo.length < 17
//         ? 'formulario__grupo formulario__grupo-correcto'
//         : 'formulario__grupo'
// }

// const validarFormulario = (expresion, input) => {
//   if (expresion.test(input.value)) {
//     console.log('correcto')
//     setSwitchError(false)
//   } else {
//     console.log('incorrecto')
//     setSwitchError(true)
//   }
// }

// const iconClass = switchError ? 'formulario__validacion-estado lni lni-cross-circle' : 'formulario__validacion-estado lni lni-checkmark-circle'

// useEffect(() => {
//   fetch('http://localhost:3000/users').then((res) => res.json()).then((json) => {
//     setDbUsers(json)
//   })
// }, [])

// return (
//   <div className='container'>
//     <form action='' className='formulario' id='formulario' onSubmit={handleSubmit}>

//       <h2 className='formulario__titulo'>Crear Cuenta</h2>

//       {/* Grupo: Usuario */}
//       <div className={errorClass(usuario)} id='grupo__usuario'>
//         <label htmlFor='usuario' className='formulario__label'>Usuario</label>
//         <div className='formulario__grupo-input'>
//           <input type='text' className='formulario__input' name='usuario' id='usuario' onKeyUp={handleKeyUp} onChange={(e) => setUsuario(e.target.value)} />
//           <i className={iconClass} />
//         </div>
//         <p className={switchError && usuario.length > 0 ? 'formulario__input-error-activo' : 'formulario__input-error'}>
//           El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo.
//         </p>
//       </div>

//       {/* Grupo: Nombre */}
//       <div className={errorClass(nombre)} id='grupo__nombre'>
//         <label htmlFor='nombre' className='formulario__label'>Nombre</label>
//         <div className='formulario__grupo-input'>
//           <input type='text' className='formulario__input' name='nombre' id='nombre' onKeyUp={handleKeyUp} onChange={(e) => setNombre(e.target.value)} />
//           <i className={iconClass} />
//         </div>
//         <p className='formulario__input-error'>
//           El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo.
//         </p>
//       </div>

//       {/* Grupo: Contraseña */}
//       <div className='formulario__grupo' id='grupo__password'>
//         <label htmlFor='password' className='formulario__label'>Contraseña</label>
//         <div className='formulario__grupo-input'>
//           <input type='password' className='formulario__input' name='password' id='password' onKeyUp={handleKeyUp} onBlur={handleKeyUp} />
//           <i className='formulario__validacion-estado lni lni-cross-circle' />
//         </div>
//         <p className='formulario__input-error'>
//           La contraseña tiene que ser de 4 a 12 digitos.
//         </p>
//       </div>

//       {/* Grupo: Contraseña2 */}
//       <div className='formulario__grupo' id='grupo__password2'>
//         <label htmlFor='password2' className='formulario__label'>Repetir Contraseña</label>
//         <div className='formulario__grupo-input'>
//           <input type='password' className='formulario__input' name='password2' id='password2' onKeyUp={handleKeyUp} onBlur={handleKeyUp} />
//           <i className='formulario__validacion-estado lni lni-cross-circle' />
//         </div>
//         <p className='formulario__input-error'>
//           Ambas contraseñas deben ser iguales.
//         </p>
//       </div>

//       {/* Grupo: Correo Electronico */}
//       <div className='formulario__grupo' id='grupo__correo'>
//         <label htmlFor='correo' className='formulario__label'>Correo Electronico</label>
//         <div className='formulario__grupo-input'>
//           <input type='email' className='formulario__input' name='correo' id='correo' onKeyUp={handleKeyUp} onBlur={handleKeyUp} />
//           <i className='formulario__validacion-estado lni lni-cross-circle' />
//         </div>
//         <p className='formulario__input-error'>
//           El correo solo puede contener letras, puntos, guiones y guion_bajo.
//         </p>
//       </div>

//       {/* Grupo: Telefono */}
//       <div className='formulario__grupo' id='grupo__telefono'>
//         <label htmlFor='telefono' className='formulario__label'>Teléfono</label>
//         <div className='formulario__grupo-input'>
//           <input type='number' className='formulario__input' name='telefono' id='telefono' onKeyUp={handleKeyUp} onBlur={handleKeyUp} />
//           <i className='formulario__validacion-estado lni lni-cross-circle' />
//         </div>
//         <p className='formulario__input-error'>
//           El teléfono solo puede contener numeros y el maximo son 14 dígitos.
//         </p>
//       </div>

//       {/* Grupo: Terminos y Condiciones */}
//       <div className='formulario__grupo formulario__grupo-terminos' id='grupo__terminos'>
//         <label htmlFor='terminos' className='formulario__label formulario__label-flex'>
//           <input type='checkbox' className='formulario__checkbox' name='terminos' id='terminos' />
//           Acepto los Terminos y Condiciones.
//         </label>
//       </div>

//       <div className='formulario__grupo formulario__grupo-btn-enviar'>
//         <button className='formulario__btn'>Crear Cuenta</button>
//         <p className='formulario__mensaje-exito' id='formulario__mensaje-exito'><i className='lni lni-information' />Cuenta creada Exitosamente!</p>
//       </div>
//     </form>
//   </div>
// )
