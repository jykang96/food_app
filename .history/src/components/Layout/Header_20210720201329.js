import React, {Fragment} from 'react'
import meal_image from '../../assets/meals.jpg'
import classes from './Header.module.css'
import Button from './HeaderCartButton'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Jay's Restaurant</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={meal_image} alt="meal_image"/>
            </div>
        </Fragment>
    )
}

export default Header;
