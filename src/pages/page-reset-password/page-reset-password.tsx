import { FC, ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch, useSelector } from '../../services/hooks'
import { Link, Redirect } from 'react-router-dom'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Input } from '../../components/input'
import { PasswordInput } from '../../components/password-input'
import { Logo } from '../../components/logo/logo'
import { Spinner } from '../../components/spinner/spinner'
import { createUserPassword } from '../../services/actions/user'
import styles from './page-reset-password.module.css'

export const PageResetPassword: FC = () => {
    const dispatch = useDispatch()

    const [formValue, setFormValue] = useState({
        password: '',
        token: ''
    });

    const userEmailForgotPassword = localStorage.getItem('userEmailForgotPassword')
    const { isLoading, isResetPasswordRequest } = useSelector(state => state.user)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const name = e.target.name

        setFormValue({
            ...formValue,
            [name]: value,
        })
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(createUserPassword(formValue))
    }

    if (isResetPasswordRequest && userEmailForgotPassword !== null) {    
        return <Redirect to="/login" />
    }

    return (
        <div className={`${styles.pageResetPassword}`}>
            <div className={styles.container}>
                <form className="form" action="#" method="POST" onSubmit={onSubmit}>
                    <div className="form__head">
                        <div className={`form__logo`}>
                            <Logo />
                        </div>
                        <h1 className="form__title">Восстановление пароля</h1>
                    </div>
                    <div className="form__body">

                        <PasswordInput
                            type="password"
                            name="password"
                            value={formValue.password}
                            placeholder="Введите новый пароль"
                            onChange={onChange}
                            required
                        />

                        <Input
                            type="text"
                            name="token"
                            value={formValue.token}
                            placeholder="Введите код из письма"
                            onChange={onChange}
                            required
                        />
                        <div className="form__submit">
                            <Button type="primary" size="medium">
                                Сохранить {isLoading ? <Spinner /> : null}
                            </Button>
                        </div>
                    </div>
                    <div className="form__foot">
                        <p className="form__text">
                            Вспомнили пароль?
                            <Link to='/login' className="form__link">Войти</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}