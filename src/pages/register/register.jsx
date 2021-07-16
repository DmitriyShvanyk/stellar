import { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Input } from '../../components/input/'
import { PasswordInput } from '../../components/password-input/'
import { Logo } from '../../components/logo/logo'

import { registerRequest/*, getUserRequest*/ } from '../../services/actions/user';

import styles from './register.module.css'

export const Register = () => {
    const dispatch = useDispatch()
    const userEmail = useSelector((store) => store.user.email);
    const { isLoading, hasError } = useSelector((state) => state.user);
    //const { isUserRequest } = useSelector((store) => store.user);

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

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
        dispatch(registerRequest(form));
    };

    /*useEffect(() => {
        dispatch(getUserRequest());
    }, []);

    if (isUserRequest){
        <div class="text text_type_main-default m-3">Загрузка ...</div>
    }*/

    if (userEmail && localStorage.getItem("refreshToken")) {
        return <Redirect to={{ pathname: "/" }} />;
    }

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

                        {isLoading ? <div class="text text_type_main-default m-3">Загрузка ...</div> :
                            (hasError ? <div className="text text_type_main-default m-3">Error</div> :
                                null)}

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