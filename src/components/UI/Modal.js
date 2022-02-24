import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

function Backdrop(props) {
    return (
        // přijetí funkce hideCartHandler() jako onClose a vložení do funkce elementu onClick => provedení funkce na kliknutí
        <div className={classes.backdrop} onClick={props.onClose}/>
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
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalEl)} {/* přijetí funkce hideCartHandler() jako onClose a odeslání do Backdrop comp pod názvem onClose */}
            {/* modální okno "obal"/styl a do něj vložený obsah z Cart.js */}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)} 
        </React.Fragment>
    );
}

export default Modal;