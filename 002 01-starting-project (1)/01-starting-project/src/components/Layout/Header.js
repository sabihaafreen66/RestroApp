import { Fragment } from "react";
import foodImage from '../../assets/food.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import Meals from "../Meals/Meals";
const Header=(props)=>
    {
     return<Fragment>
     <header className={classes.header} >
      <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/></header>
      <div className={classes['main-image']}>
      <img src={foodImage} alt='A Plate Full of Delicious Food Image!'/>
       </div>
</Fragment>
}

export default Header;