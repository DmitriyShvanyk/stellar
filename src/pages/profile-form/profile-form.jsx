import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Spinner } from '../../components/spinner/spinner'

import styles from './profile-form.module.css'

import { getUserInfo, updateUserInfo } from '../../services/actions/user';


export const ProfileForm = () => {
    const dispatch = useDispatch();
    const { user, isLoading } = useSelector((state) => state.user);

    const userData = JSON.parse(localStorage.getItem('userData'))
    const userName = userData.name
    const userEmail = userData.email
    const userPassword = localStorage.getItem('userPassword')

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch]);

    useEffect(() => {
        (user || userEmail !== null) &&
            setForm((state) => ({
                ...state,
                name: user?.name || userName,
                email: user?.email || userEmail,
                password: userPassword
            }));
        console.log(user)
    }, [user]);

    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const cancelClick = (e) => {
        e.preventDefault();

        setForm({
            name: user?.name,
            email: user?.email,
            password: userPassword
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserInfo(form));
    };

    return (
        <div className={styles.profileForm}>
            <div className={styles.right}>
                <form className={styles.form} action="#" method="POST" onSubmit={onSubmit}>
                    <div className={styles.formBody}>
                        <Input
                            type={'text'}
                            placeholder={'Имя'}
                            onChange={onChange}
                            icon={'EditIcon'}
                            value={form.name}
                            name={'name'}
                            error={false}
                            errorText={'Ошибка'}
                            required
                        />
                        <Input
                            type={'email'}
                            placeholder={'Email'}
                            onChange={onChange}
                            icon={'EditIcon'}
                            value={form.email}
                            name={'email'}
                            error={false}
                            errorText={'Ошибка'}
                            required
                        />
                        <Input
                            type={'text'}
                            placeholder={'Пароль'}
                            onChange={onChange}
                            icon={'EditIcon'}
                            value={form.password}
                            name={'password'}
                            error={false}
                            errorText={'Ошибка'}
                            required
                        />
                    </div>

                    <div className={styles.formFoot}>
                        <Button type="secondary" size="medium" onClick={cancelClick}>
                            Отмена
                        </Button>
                        <Button type="primary" size="medium">
                            Сохранить {isLoading ? <Spinner /> : null}
                        </Button>
                    </div>
                </form>
            </div>
            <div className={styles.info}>
                В этом разделе вы можете<br />
                изменить свои персональные данные
            </div>
        </div>
    );
};