import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Input } from '../../components/input/'
import { PasswordInput } from '../../components/password-input/'
import { Logo } from '../../components/logo/logo'

import { Spinner } from '../../components/spinner/spinner'

import { loginUserRequest } from '../../services/actions/user';

import styles from './login.module.css'


export const Login = () => {
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const { isLoading } = useSelector((state) => state.user);

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
        localStorage.setItem('userPassword', form.password)
        dispatch(loginUserRequest(form));
    };

    return (
        <div className={`${styles.login}`}>
            <div className={styles.container}>
                <form className="form" action="#" method="POST" onSubmit={onSubmit}>
                    <div className="form__head">
                        <div className={`form__logo`}>
                            <Logo />
                        </div>
                        <h1 className="form__title">Вход</h1>
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

                        <PasswordInput
                            type="password"
                            name="password"
                            value={form.password}
                            placeholder="Пароль"
                            onChange={onChange}
                            required
                        />

                        <div className="form__submit">
                            <Button type="primary" size="medium">
                                Войти {isLoading ? <Spinner /> : null}
                            </Button>
                        </div>
                    </div>
                    <div className="form__foot">
                        <p className="form__text">
                            Вы — новый пользователь?
                            <Link to='/register' className="form__link">Зарегистрироваться</Link>
                        </p>
                        <p className="form__text">
                            Забыли пароль?
                            <Link to='/forgot-password' className="form__link">Восстановить пароль</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};