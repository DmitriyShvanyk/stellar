import { FC, ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch, useSelector } from '../../services/hooks'
import { Link } from 'react-router-dom'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Input } from '../../components/input'
import { PasswordInput } from '../../components/password-input'
import { Logo } from '../../components/logo/logo'
import { Spinner } from '../../components/spinner/spinner'
import { loginUserRequest } from '../../services/actions/user'
import styles from './page-login.module.css'

import { useTranslation } from "react-i18next"

export const PageLogin: FC = () => {
    const dispatch = useDispatch()
    const { isLoading } = useSelector(state => state.user)
    const { t } = useTranslation()

    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    });

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
        dispatch(loginUserRequest(formValue))
    }

    return (
        <div className={`${styles.pageLogin}`}>
            <div className={styles.container}>
                <form className="form form--login" action="#" method="POST" onSubmit={onSubmit}>
                    <div className="form__head">
                        <div className={`form__logo`}>
                            <Logo />
                        </div>
                        <h1 className="form__title">{ t('login') }</h1>
                    </div>
                    <div className="form__body">
                        <Input
                            type="email"
                            name="email"
                            value={formValue.email}
                            placeholder="Email"
                            onChange={onChange}
                            required
                        />

                        <PasswordInput
                            type="password"
                            name="password"
                            value={formValue.password}
                            placeholder="Password"
                            onChange={onChange}
                            required
                        />

                        <div className="form__submit">
                            <Button type="primary" size="medium">
                                { t('login') } {isLoading ? <Spinner /> : null}
                            </Button>
                        </div>
                    </div>
                    <div className="form__foot">
                        <p className="form__text">
                            { t('newUser') }
                            <Link to='/register' className="form__link">{ t('register') }</Link>
                        </p>
                        <p className="form__text">
                            { t('forgotPassword') }
                            <Link to='/forgot-password' className="form__link">{ t('restorePassword') }</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}