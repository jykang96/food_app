import {Fragment} from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = () => {
    return <div className={classes.backdrop} />
};
const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop />, portalElement)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
        </Fragment>
    )
}

export default Modal
