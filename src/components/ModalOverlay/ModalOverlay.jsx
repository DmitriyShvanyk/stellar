import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './modalOverlay.module.css'

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
    handleClose: PropTypes.func
}

export default ModalOverlay;