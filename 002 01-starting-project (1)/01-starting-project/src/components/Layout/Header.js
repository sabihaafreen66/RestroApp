import { Fragment } from "react";
import foodImage from '../../assets/food.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header=(props)=>
    {
     return<Fragment>
     <header ><h1>React Meals</h1>
     <HeaderCartButton/></header>
      <div>
      <img src={foodImage} alt='A Plate Full of Delicious Food Image!'/>
    </div>
</Fragment>
}

export default Header;