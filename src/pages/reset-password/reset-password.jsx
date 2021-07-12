import { useCallback, useState } from 'react'
import { useAuth } from '../../services/auth'
import { Link } from 'react-router-dom'
import { Logo, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Input } from '../../components/input'
import { PasswordInput } from '../../components/password-input'
import styles from './reset-password.module.css'

export const ResetPassword = () => {
    let auth = useAuth();

    const [form, setValue] = useState({
        password: '',
        code: ''
    });

    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className={`${styles.register}`}>
            <div className={styles.container}>
                <form className="form" action="#" method="POST">
                    <div className="form__head">
                        <a href="##" className={`logo form__logo`}>
                            <Logo />
                        </a>
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