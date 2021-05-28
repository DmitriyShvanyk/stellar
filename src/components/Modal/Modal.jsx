import React from 'react'
import PropTypes from 'prop-types'
import './modal.css'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal modal--active" : "modal";

    return (
        <div className={showHideClassName}>
            <div className="modal__overlay" onClick={handleClose}></div>
            <div className="modal__content">
                <button className="modal__close" onClick={handleClose}></button>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {    
    show: PropTypes.bool.isRequired,
    showHideClassName: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default Modal;