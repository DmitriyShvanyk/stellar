import { FC, ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch, useSelector } from '../../services/hooks'
import { Link, useLocation, Redirect } from 'react-router-dom'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Input } from '../../components/input'
import { Logo } from '../../components/logo/logo'
import { Spinner } from '../../components/spinner/spinner'
import { resetUserPassword } from '../../services/actions/user'
import styles from './page-forgot-password.module.css'

import { t } from 'i18next'

export const PageForgotPassword: FC = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const [form, setForm] = useState({
        email: ''
    });

    const { isLoading, isForgotPasswordRequest } = useSelector(state => state.user)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const name = e.target.name

        setForm({
            ...form,
            [name]: value,
        })
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        localStorage.setItem('userEmailForgotPassword', form.email)
        dispatch(resetUserPassword(form))
    }

    if (isForgotPasswordRequest) {
        return <Redirect to={{ pathname: '/reset-password', state: { from: location.pathname } }} />;
    }

    return (
        <div className={`${styles.pageForgotPassword}`}>
            <div className={styles.container}>
                <form className="form" action="#" method="POST" onSubmit={onSubmit}>
                    <div className="form__head">
                        <div className={`form__logo`}>
                            <Logo />
                        </div>
                        <h1 className="form__title">{ t('pageForgotPasswordTitle') }</h1>
                    </div>
                    <div className="form__body">
                        <Input
                            type="email"
                            name="email"
                            value={form.email}
                            placeholder="Email"
                            onChange={onChange}
                            required
                        />

                        <div className="form__submit">
                            <Button type="primary" size="medium">
                                { t('pageForgotPasswordRestore') } {isLoading ? <Spinner /> : null}
                            </Button>
                        </div>
                    </div>
                    <div className="form__foot">
                        <p className="form__text">
                            { t('pageForgotPasswordRemembered') }
                            <Link to='/login' className="form__link">{ t('login') }</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}