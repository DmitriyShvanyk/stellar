import { useCallback, useState } from 'react'
import { useAuth } from '../../services/auth'
import { Link } from 'react-router-dom'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Input } from '../../components/input/'
import { PasswordInput } from '../../components/password-input/'
import { Logo } from '../../components/logo/logo'
import styles from './register.module.css'

export const Register = () => {
    let auth = useAuth();

    const [form, setValue] = useState({
        name: '',
        email: '',
        password: ''
    });

    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className={`${styles.register}`}>
            <div className={styles.container}>
                <form className="form" action="#" method="POST">
                    <div className="form__head">
                        <div className={`form__logo`}>
                            <Logo />
                        </div>
                        <h1 className="form__title">Регистрация</h1>
                    </div>
                    <div className="form__body">
                        <Input
                            type="text"
                            name="name"
                            value={form.name}
                            placeholder="Имя"
                            onChange={onChange}
                            required
                        />

                        <Input
                            type="email"
                            name="email"
                            value={form.email}
                            placeholder="Email"
                            onChange={onChange}
                            required
                        />

                        <PasswordInput
                            type="password"
                            name="password"
                            value={form.password}
                            placeholder="Пароль"
                            onChange={onChange}
                            required
                        />
                        <div className="form__submit">
                            <Button type="primary" size="medium">Зарегистрироваться</Button>
                        </div>
                    </div>
                    <div className="form__foot">
                        <p className="form__text">
                            Уже зарегистрированы?
                            <Link to='/login' className="form__link">Войти</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}