import React from 'react'
import classes from './Input.module.css';

const input = (props) => {
    return (
        <div className={classes.input}>
            <label>{props.label}</label>
            <input />
        </div>
    )
}

export default input
