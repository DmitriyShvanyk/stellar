import { useCallback, useState } from 'react'
import { useAuth } from '../../services/auth'
import { Link } from 'react-router-dom'
import { Logo, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Input } from '../../components/input/'
import { PasswordInput } from '../../components/password-input/'
import styles from './login.module.css'

const Login = () => {
    let auth = useAuth();

    const [form, setValue] = useState({ email: '', password: '' });

    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    let login = useCallback(
        e => {
            e.preventDefault();
            auth.signIn(form);
        },
        [auth, form]
    );

    return (
        <div className={`${styles.login}`}>
            <div className={styles.container}>
                <form className="form" action="#" method="POST">
                    <div className="form__head">
                        <a href="##" className={`logo form__logo`}>
                            <Logo />
                        </a>
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
                            <Button type="primary" onClick={login} size="medium">Войти</Button>
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

export default Login