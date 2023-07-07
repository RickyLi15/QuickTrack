import classes from './MainNavigation.module.css';
import {NavLink} from 'react-router-dom';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
          <NavLink to="/" className={({isActive}) => isActive ? classes.active : undefined} end>Home</NavLink>
          </li>
          <li>
          <NavLink to="/statistics" className={({isActive}) => isActive ? classes.active : undefined}>My Stats</NavLink>
          </li>

          <li>
          <NavLink to="/workout" className={({isActive}) => isActive ? classes.active : undefined}>Work Out</NavLink>
          </li>

          <li>
          <NavLink to="/plan" className={({isActive}) => isActive ? classes.active : undefined}>View My Schedule</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
