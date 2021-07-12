import { useCallback, useState } from 'react'
import { useAuth } from '../../services/auth'
import { Link } from 'react-router-dom'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Input } from '../../components/input/'
import { Logo } from '../../components/logo/logo'
import styles from './forgot-password.module.css'

export const ForgotPassword = () => {
    let auth = useAuth();

    const [form, setValue] = useState({ 
        email: '' 
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
                            <Button type="primary" size="medium">Восстановить</Button>
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