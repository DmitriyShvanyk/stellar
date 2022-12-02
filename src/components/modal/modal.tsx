import { useEffect, FC, ReactChildren, ReactChild } from 'react'
import { createPortal } from 'react-dom'
import { ModalOverlay } from '../modal-overlay/modal-overlay'
import styles from './modal.module.css'

interface IModal {
    modalHeader?: string | null;
    handleClose: () => void;
    children: ReactChild | ReactChildren;
}

const modalPortal = document.querySelector('#modalPortal')

export const Modal: FC<IModal> = ({ modalHeader = null, handleClose, children }) => {

    useEffect(() => {
        const closeCallbackModalEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" || e.code === "NumpadEnter") {
                e.preventDefault()
                handleClose()
            }
        }

        document.addEventListener("keydown", closeCallbackModalEscape)
        return () => document.removeEventListener("keydown", closeCallbackModalEscape)
    }, [handleClose])

    return  (
        modalPortal && createPortal(
            <div className={`${styles.modal} fixed top-0 left-0 w-full h-full overflow-hidden`}>
                <ModalOverlay handleOverlayClose={handleClose} handleOverlayEnterClose={handleClose} />
                <div className={`${styles.modal__content} relative w-full overflow-y-auto scrollbar-vertical`}>
                    <button className={`${styles.modal__close} absolute border-0 outline-none bg-transparent w-6 h-6 cursor-pointer z-10`} onClick={handleClose} title="Close"></button>
                    {modalHeader && <h2 className={`${styles.modal__title} text text_type_main-large text-left`}>
                        {modalHeader}
                    </h2>}
                    {children}
                </div>
            </div>,
            modalPortal
        )
    )
}