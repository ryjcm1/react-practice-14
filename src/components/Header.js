import classes from "./Header.module.css";
import { authActions } from '../store/auth'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';


const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const profile = (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && profile}
    </header>
  );
};

export default Header;
