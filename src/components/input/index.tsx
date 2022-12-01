import React, { FC } from 'react'
import styles from './input.module.css'

export type TInputProps = {
  onIconClick?: () => void;
  icon?: React.ElementType;
} & React.InputHTMLAttributes<HTMLInputElement>;


export const Input: FC<TInputProps> = ({
  icon: Icon,
  onIconClick,
  value,
  placeholder,
  onChange,
  type,
  ...props
}) => {
  const icon = Icon ? <Icon onClick={onIconClick} className={styles.inputContainer} /> : null;
  return (
    <div className={`${styles.inputContainer} relative mb-6`}>
      <input
        className={`${styles.input} block w-full font-semibold focus:outline-none`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
      {icon}
    </div>
  )
}
