import { FC } from 'react'
import styles from './modal-overlay.module.css'

interface IModalOverlay {
    handleOverlayClose: () => void;
    handleOverlayEnterClose: () => void;
}

export const ModalOverlay: FC<IModalOverlay> = ({ handleOverlayClose, handleOverlayEnterClose }) => {
    return (
        <div className={`${styles.modalOverlay} fixed top-0 left-0 w-screen h-screen`}
            onClick={handleOverlayClose}
            onKeyDown={handleOverlayEnterClose}
            onKeyPress={handleOverlayEnterClose}></div>
    )
}