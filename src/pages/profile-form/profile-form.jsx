import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './profile-form.module.css'


import { getUserInfo, updateUserInfo } from '../../services/actions/user';


export const ProfileForm = () => {

    const dispatch = useDispatch();
    const [isDisabled, setIsDisabled] = useState(false);
    const { user, isLoading, hasError } = useSelector((state) => state.user);     

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });      

    useEffect(() => {        
        dispatch(getUserInfo());
    }, [dispatch]);    

    useEffect(() => {        
        user &&
            setForm((state) => ({
                ...state,
                name: user.name,
                email: user.email,
            }));
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
            name: user.name,
            email: user.email,
            password: '',
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
                                icon={isDisabled ? 'CloseIcon' : 'EditIcon'}
                                value={form.name}
                                name={'name'}
                                error={false}
                                errorText={'Ошибка'}
                            />
                            <Input
                                type={'email'}
                                placeholder={'Логин'}
                                onChange={onChange}
                                icon={isDisabled ? 'CloseIcon' : 'EditIcon'}
                                value={form.email}
                                name={'email'}
                                error={false}
                                errorText={'Ошибка'}
                            />
                            <Input
                                type={'password'}
                                placeholder={'Пароль'}
                                onChange={onChange}
                                icon={isDisabled ? 'CloseIcon' : 'EditIcon'}
                                value={form.password}
                                name={'password'}
                                error={false}
                                errorText={'Ошибка'}
                            />
                        </div>

                        {isLoading ? <div className="text text_type_main-default m-3">Загрузка ...</div> :
                            (hasError ? <div className="text text_type_main-default m-3">Error</div> :
                                null)}

                        <div className={styles.formFoot}>
                            <Button type="secondary" size="medium" onClick={cancelClick}>
                                Отмена
                            </Button>
                            <Button type="primary" size="medium">
                                Сохранить
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