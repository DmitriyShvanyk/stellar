import { useState } from 'react'
import { Input } from '../input'
import { ShowIcon, HideIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const EyeOff = props => <button className="form__icon" onClick={props.onClick}><ShowIcon type="primary" /></button>
const Eye = props => <button className="form__icon" onClick={props.onClick}><HideIcon type="primary" /></button>

export const PasswordInput = ({ type, ...props }) => {
  const [isVisible, setVisible] = useState(false)

  return (
    <Input
      {...props}
      type={isVisible ? 'text' : 'password'}
      icon={isVisible ? EyeOff : Eye}
      onIconClick={() => setVisible(!isVisible)}
    />
  )
}
