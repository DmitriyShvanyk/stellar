import { FC } from 'react'
import styles from './modal-overlay.module.css'

interface IModalOverlay {
    handleOverlayClose: () => void;
    handleOverlayEnterClose: () => void;
}

export const ModalOverlay: FC<IModalOverlay> = ({ handleOverlayClose, handleOverlayEnterClose }) => {
    return (
        <div className={styles.modalOverlay}
            onClick={handleOverlayClose}
            onKeyDown={handleOverlayEnterClose}
            onKeyPress={handleOverlayEnterClose}></div>
    )
}