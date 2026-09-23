import Label from '../Componentes/Label'
import Input from '../Componentes/Input'

export default function Campo({ label, htmlFor, type, placeholder, onChange, required }) {
  return (
    <div>
      <Label text={label} htmlFor={htmlFor} required={required} />
      <Input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}