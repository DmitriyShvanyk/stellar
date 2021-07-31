import { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Input } from '../../components/input/'
import { PasswordInput } from '../../components/password-input/'
import { Logo } from '../../components/logo/logo'
import { Spinner } from '../../components/spinner/spinner'
import { registerUserRequest } from '../../services/actions/user';

import styles from './register.module.css'

export const Register = () => {
    const dispatch = useDispatch()
    const { isLoading } = useSelector((state) => state.user);

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: ''
    });

    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUserRequest(formValue));
    }; 

    return (
        <div className={`${styles.register}`}>
            <div className={styles.container}>
                <form className="form" action="#" method="POST" onSubmit={onSubmit}>
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
                            value={formValue.name}
                            placeholder="Имя"
                            onChange={onChange}
                            required
                        />

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
                            placeholder="Пароль"
                            onChange={onChange}
                            required
                        />

                        <div className="form__submit">
                            <Button type="primary" size="medium">
                                Зарегистрироваться {isLoading ? <Spinner /> : null}                             
                            </Button>
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