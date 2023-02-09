import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import hamburger from "../../assets/pexels-daniel-reche-3616956.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Gorniak's</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={hamburger} alt='a close up to a burger with fries' />
      </div>
    </Fragment>
  );
};

export default Header;
