import { useCallback, useState, useRef } from 'react'
import { useAuth } from '../../services/auth'

import { Button, Input, EditIcon, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './profile-form.module.css'

export const ProfileForm = () => {

    const [value, setValue] = useState('value')
    const inputRef = useRef(null)

    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    return (
        <div className={styles.profileForm}>
            <div className={styles.right}>
                <form className={styles.form} action="#" method="POST">
                    <div className={styles.formBody}>
                        <Input
                            type={'text'}
                            placeholder={'Имя'}
                            onChange={e => setValue(e.target.value)}
                            icon={'EditIcon'}
                            value={'Марк'}
                            name={'name'}
                            error={false}
                            ref={inputRef}
                            onIconClick={onIconClick}
                            errorText={'Ошибка'}
                            size={'default'}
                        />
                        <Input
                            type={'text'}
                            placeholder={'Логин'}
                            onChange={e => setValue(e.target.value)}
                            icon={'EditIcon'}
                            value={'mail@stellar.burgers'}
                            name={'name'}
                            error={false}
                            ref={inputRef}
                            onIconClick={onIconClick}
                            errorText={'Ошибка'}
                            size={'default'}
                        />
                        <Input
                            type={'password'}
                            placeholder={'Пароль'}
                            onChange={e => setValue(e.target.value)}
                            icon={'EditIcon'}
                            value={'******|'}
                            name={'name'}
                            error={false}
                            ref={inputRef}
                            onIconClick={onIconClick}
                            errorText={'Ошибка'}
                            size={'default'}
                        />
                    </div>
                    <div className={styles.formFoot}>
                        <Button type="secondary" size="medium">
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