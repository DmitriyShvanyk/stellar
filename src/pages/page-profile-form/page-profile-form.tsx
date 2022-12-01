import { FC, ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from '../../services/hooks'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Spinner } from '../../components/spinner/spinner'
import { getUserInfo, updateUserInfo } from '../../services/actions/user'
import styles from './page-profile-form.module.css'

import { useTranslation } from "react-i18next"

export const PageProfileForm: FC = () => {
    const dispatch = useDispatch()
    const { user, isLoading } = useSelector(state => state.user)
    const userData = JSON.parse(localStorage.getItem('userData') || "")
    const userName = userData?.name
    const userEmail = userData?.email
    const [isFocusName, setFocusName] = useState(false)
    const [isFocusEmail, setFocusEmail] = useState(false)
    const [isFocusPassword, setFocusPassword] = useState(false)
    const { t } = useTranslation()

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        dispatch(getUserInfo())
    }, [dispatch])

    useEffect(() => {
        (user || userEmail !== null) &&
            setFormValue((state) => ({
                ...state,
                name: user?.name || userName,
                email: user?.email || userEmail
            }));
        console.log(user)
    }, [user])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const name = e.target.name

        setFormValue({
            ...formValue,
            [name]: value,
        })
    }

    const cancelClick = (e: MouseEvent) => {
        e.preventDefault();

        setFormValue({
            name: user?.name || userName,
            email: user?.email || userEmail,
            password: ''
        })
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(updateUserInfo(formValue))
    }

    return (
        <div className={styles.profileForm}>
            <div className={styles.right}>
                <form className={styles.form} action="#" method="POST" onSubmit={onSubmit}>
                    <div className={styles.formBody}>
                        <Input
                            type={'text'}
                            placeholder={'Name'}
                            onChange={onChange}
                            onFocus={() => setFocusName(true)}
                            onBlur={() => setFocusName(false)}
                            icon={isFocusName ? 'CloseIcon' : 'EditIcon'}
                            value={formValue.name}
                            name={'name'}
                            error={false}
                            errorText={'Error'}
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
                            errorText={'Error'}
                        />
                        <Input
                            type={'text'}
                            placeholder={'Password'}
                            onChange={onChange}
                            onFocus={() => setFocusPassword(true)}
                            onBlur={() => setFocusPassword(false)}
                            icon={isFocusPassword ? 'CloseIcon' : 'EditIcon'}
                            value={formValue.password}
                            name={'password'}
                            error={false}
                            errorText={'Error'}
                        />
                    </div>

                    <div className={styles.formFoot}>
                        <Button type="secondary" size="medium" onClick={() => cancelClick}>
                            { t('cancel') }
                        </Button>
                        <Button type="primary" size="medium">
                            { t('save') } {isLoading ? <Spinner /> : null}
                        </Button>
                    </div>
                </form>
            </div>
            <div className={styles.info}>{ t('textPersonalData') }</div>
        </div>
    )
}