import {Fragment} from 'react'
import React from 'react'
import classes from './Modal.module.css'

const Backdrop = props => {
    return <div className={classes.backdrop} />
};
const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = () => {
    return (
        <div>
            
        </div>
    )
}

export default Modal
