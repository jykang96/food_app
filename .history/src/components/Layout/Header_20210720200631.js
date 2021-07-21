import React, {Fragment} from 'react'
import meal_image from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Jay's Restaurant</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={meal_image} alt="meal_image"/>
            </div>
        </Fragment>
    )
}

export default Header;
