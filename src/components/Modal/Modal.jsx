import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import styles from './modal.module.css'


const modalPortal = document.getElementById('modalPortal')

const Modal = ({ modalHeader = null, handleClose, showModal, children }) => {
    const classModalToggle = showModal ? `${styles.modal} ${styles.active}` : `${styles.modal}`

    useEffect(() => {
        const closeCallbackModalEscape = (e) => {
            if (e.key === "Escape" || e.code === "NumpadEnter") {
                e.preventDefault()
                handleClose()
                console.log("Enter key was pressed. Run your function.")
            }
        }

        document.addEventListener("keydown", closeCallbackModalEscape)

        return () => {
            document.removeEventListener("keydown", closeCallbackModalEscape)
        };

    }, [handleClose]);


    return ReactDOM.createPortal(
        <div className={classModalToggle}>
            <ModalOverlay handleOverlayClose={handleClose} handleOverlayEnterClose={handleClose} />
            <div className={styles.modal__content}>
                <button className={styles.modal__close} onClick={handleClose}></button>
                {modalHeader && <h2 className={`${styles.modal__title} text text_type_main-large`}>
                    {modalHeader}
                </h2>}
                {children}
            </div>
        </div>,
        modalPortal
    );
};

Modal.propTypes = {
    showModal: PropTypes.bool,
    classModalToggle: PropTypes.string,
    handleClose: PropTypes.func
};

export default Modal;