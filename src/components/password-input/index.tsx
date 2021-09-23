import { FC, useState } from 'react'
import { Input, TInputProps } from '../input'
import { ShowIcon, HideIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const EyeOff: FC<{ onClick: () => void }> = props => <button className="form__icon" onClick={props.onClick}><ShowIcon type="primary" /></button>
const Eye: FC<{ onClick: () => void }> = props => <button className="form__icon" onClick={props.onClick}><HideIcon type="primary" /></button>

export const PasswordInput: FC<TInputProps> = ({ type, ...props }) => {
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
