import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './NavBar.module.scss';

const NavBar = ({className}: {className?: string}) => (
  <div className={clsx(className, styles.root)}>
    <nav id='navBar' className={clsx('container', styles.container)}>
      <NavLink
        className={styles.navLink}
        //className={({isActive}) => !isActive ? styles.navLink : styles.active + ' ' + styles.navLink}
        //style={({ isActive }) => isActive ? {fontWeight: '600'} : {fontWeight: '400'}}
        to='/'
      >Home</NavLink>
      <NavLink
        className={styles.navLink}
        to='/chat'
      >Chat</NavLink>
      <NavLink
        className={styles.navLink}
        to='/login'
      >Login</NavLink>
    </nav>
  </div>
);

export default NavBar;
