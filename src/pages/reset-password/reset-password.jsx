import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Input } from '../../components/input'
import { PasswordInput } from '../../components/password-input'
import { Logo } from '../../components/logo/logo'
import { createUserPassword } from '../../services/actions/user';

import styles from './reset-password.module.css'

export const ResetPassword = () => {
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        password: '',
        code: ''
    });

    const { isForgotPasswordRequest, isResetPasswordRequest } = useSelector((state) => state.user);

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
        dispatch(createUserPassword(form));
    };

    if (isResetPasswordRequest) {
        return <Redirect to="/login" />
    };

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

                        <PasswordInput
                            type="password"
                            name="password"
                            value={form.password}
                            placeholder="Введите новый пароль"
                            onChange={onChange}
                            required
                        />

                        <Input
                            type="text"
                            name="code"
                            value={form.code}
                            placeholder="Введите код из письма"
                            onChange={onChange}
                            required
                        />

                        {/*isLoading ? <div class="text text_type_main-default m-3">Загрузка ...</div> : 
                            (hasError ? <div className="text text_type_main-default m-3">Error</div> : 
    null)*/}

                        <div className="form__submit">
                            <Button type="primary" size="medium">Сохранить</Button>
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