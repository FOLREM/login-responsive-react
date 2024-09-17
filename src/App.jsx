// import { useState, useEffect } from 'react'
import Login from './components/login'

const expresiones = {
  usuario: /^[a-zA-Z0-9_-]{4,16}$/,
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  password: /^.{4,12}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/
}
const App = () => {
  return (
    <Login />
  )
}

export default App
