import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

function Backdrop(props) {
    return (
        <div className={classes.backdrop} />
    );
}

function ModalOverlay(props) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

const portalEl = document.getElementById('overlays');

function Modal(props) {
    return (
        <React.Fragment>
            {/* Portal pro šedé pozadí za modalním oknem => <div id="overlays"></div> v index.html */}
            {ReactDOM.createPortal(<Backdrop />, portalEl)}
            {/* modální okno "obal"/styl a do něj vložený obsah z Cart.js */}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)} 
        </React.Fragment>
    );
}

export default Modal;