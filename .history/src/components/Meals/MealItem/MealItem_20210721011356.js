import React from 'react';
import classes from './MealItems.module.css';
import MealItemForm from './MealItemForm';
import Input from '../../UI/Input';

const MealItem = (props) => {
    const price =  `$${props.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>   
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm/>
            </div>
        </li>
    )
}

export default MealItem
