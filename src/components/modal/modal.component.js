import React from 'react';
import './modal.component.scss';

const Modal = ({active, setActive, title, children}) => {

    return (
        <div className={active ? "popup --popup-login --opened" : "popup --popup-login"} onClick={() => setActive(false)}>
            <div className={"a-popup__card"} onClick={e => e.stopPropagation()}>
                <div className={"popup__header"}>
                    <h2 className="popup__title">{title}</h2>
                    <span className="popup__icon mdi mdi-close" aria-label="Закрыть окно" onClick={() => setActive(false)}/>
                </div>
                <div className={"popup__body"}>
                    {children}
                </div>
            </div>
        </div>
    );

}

export default Modal;