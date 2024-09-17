import estilos from './InputField.module.css'

const InputField = ({ data }) => {
  const { inputFieldClases, label, htmlFor, labelClases, inputType, inputId, inputName, inputClases } = data
  const classField = inputFieldClases.split(' ').map(c => estilos[c]).join(' ')
  return (
    <div className={classField}>
      <label htmlFor={htmlFor} className={estilos[labelClases]}>{label}</label>
      <input type={inputType} name={inputName} id={inputId} className={estilos[inputClases]} />
    </div>
  )
}

export default InputField
