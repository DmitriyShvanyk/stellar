import { useState } from 'react'
import { Link, useLocation, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Input } from '../../components/input/'
import { Logo } from '../../components/logo/logo'
import { Spinner } from '../../components/spinner/spinner'
import { resetUserPassword } from '../../services/actions/user';

import styles from './forgot-password.module.css'


export const ForgotPassword = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const [form, setForm] = useState({
        email: ''
    });

    const { isLoading, isForgotPasswordRequest } = useSelector((state) => state.user);

    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userEmailForgotPassword', form.email)
        dispatch(resetUserPassword(form));
    };

    if (isForgotPasswordRequest) {
        return <Redirect to={{ pathname: '/reset-password', state: { from: location.pathname } }} />;
    }

    return (
        <div className={`${styles.register}`}>
            <div className={styles.container}>
                <form className="form" action="#" method="POST" onSubmit={onSubmit}>
                    <div className="form__head">
                        <div className={`form__logo`}>
                            <Logo />
                        </div>
                        <h1 className="form__title">Восстановление пароля</h1>
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
                                Восстановить {isLoading ? <Spinner /> : null}
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
    );
};