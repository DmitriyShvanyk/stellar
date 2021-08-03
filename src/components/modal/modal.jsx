import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ModalOverlay } from '../modal-overlay/modal-overlay'
import styles from './modal.module.css'

const modalPortal = document.querySelector('#modalPortal')


export const Modal = ({ modalHeader = null, handleClose, children }) => {
    let history = useHistory()

    useEffect(() => {
        const closeCallbackModalEscape = (e) => {
            if (e.key === "Escape" || e.code === "NumpadEnter") {
                e.preventDefault()
                handleClose()
                history.goBack()
                //console.log("Enter key was pressed. Run your function.")
            }
        }

        document.addEventListener("keydown", closeCallbackModalEscape)

        return () => {
            document.removeEventListener("keydown", closeCallbackModalEscape)
        };

    }, [handleClose]);


    return ReactDOM.createPortal(
        <div className={styles.modal}>
            <ModalOverlay handleOverlayClose={handleClose} handleOverlayEnterClose={handleClose} />
            <div className={`${styles.modal__content} scrollbar-vertical`}>
                <button className={styles.modal__close} onClick={handleClose} title="Close"></button>
                {modalHeader && <h2 className={`${styles.modal__title} text text_type_main-large`}>
                    {modalHeader}
                </h2>}
                {children}
            </div>
        </div>,
        modalPortal
    )
}

Modal.propTypes = {
    modalHeader: PropTypes.string,
    handleClose: PropTypes.func,
    children: PropTypes.element
}