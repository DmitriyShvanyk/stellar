import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Spinner } from '../../components/spinner/spinner'
import { getUserInfo, updateUserInfo } from '../../services/actions/user'

import styles from './page-profile-form.module.css'


export const PageProfileForm = () => {
    const dispatch = useDispatch();
    const { user, isLoading } = useSelector((state) => state.user)
    const userData = JSON.parse(localStorage.getItem('userData'))
    const userName = userData.name
    const userEmail = userData.email
    //const userPassword = localStorage.getItem('userPassword')
    const [isFocusName, setFocusName] = useState(false)
    const [isFocusEmail, setFocusEmail] = useState(false)
    const [isFocusPassword, setFocusPassword] = useState(false)

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch]);

    useEffect(() => {
        (user || userEmail !== null) &&
            setFormValue((state) => ({
                ...state,
                name: user?.name || userName,
                email: user?.email || userEmail
            }));
        console.log(user)
    }, [user]);

    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    const cancelClick = (e) => {
        e.preventDefault();

        setFormValue({
            name: user?.name,
            email: user?.email,
            password: ''
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserInfo(formValue));
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
                            onFocus={() => setFocusName(true)}
                            onBlur={() => setFocusName(false)}
                            icon={isFocusName ? 'CloseIcon' : 'EditIcon'}
                            value={formValue.name}
                            name={'name'}
                            error={false}
                            errorText={'Ошибка'}
                            required
                        />
                        <Input
                            type={'email'}
                            placeholder={'Email'}
                            onChange={onChange}
                            onFocus={() => setFocusEmail(true)}
                            onBlur={() => setFocusEmail(false)}
                            icon={isFocusEmail ? 'CloseIcon' : 'EditIcon'}
                            value={formValue.email}
                            name={'email'}
                            error={false}
                            errorText={'Ошибка'}
                            required
                        />
                        <Input
                            type={'text'}
                            placeholder={'Пароль'}
                            onChange={onChange}
                            onFocus={() => setFocusPassword(true)}
                            onBlur={() => setFocusPassword(false)}
                            icon={isFocusPassword ? 'CloseIcon' : 'EditIcon'}
                            value={formValue.password}
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
    )
}