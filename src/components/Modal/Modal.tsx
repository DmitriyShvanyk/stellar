import React from 'react';
import './modal.css'

const Modal = ({ handleClose, show, children } : { handleClose:any, show:any, children:any }) => {
    const showHideClassName = show ? "modal modal--active" : "modal";

    return (
        <div className={showHideClassName}>
            <div className="modal__overlay"></div>
            <div className="modal__content">
                <button className="modal__close" onClick={handleClose}></button>
                {children}
            </div>
        </div>
    );
};

export default Modal;