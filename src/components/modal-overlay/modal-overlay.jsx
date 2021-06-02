import React from 'react'
import PropTypes from 'prop-types'
import styles from './modal-overlay.module.css'

const ModalOverlay = ({ handleOverlayClose, handleOverlayEnterClose }) => {
    return (
        <div className={styles.modalOverlay}
            onClick={handleOverlayClose}
            onKeyDown={handleOverlayEnterClose}
            onKeyPress={handleOverlayEnterClose}
            tabIndex="0"></div>
    );
};

ModalOverlay.propTypes = {
    handleOverlayClose: PropTypes.func,
    handleOverlayEnterClose: PropTypes.func
}

export default ModalOverlay;