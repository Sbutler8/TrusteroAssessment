import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children, name }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div onClick={onClose} className='modal-background'/>
      <div
        className={name==="login" ? 'modal-content'
        :name==="task" ? 'task-modal-content'
        :name==="listTitle" ? 'listTitle-modal-content'
        :name==="warning" ? 'warning-modal-content':null}
      >
        {children}
      </div>
    </div>,
    modalNode
  );
}
