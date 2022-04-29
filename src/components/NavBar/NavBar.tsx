import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './NavBar.module.scss';
import store from '../../stores/chatStore';
import { observer } from 'mobx-react';

const NavBar = ({className}: {className?: string}) => {
  const { usersList, currentUser } = store;

  const handleLogOut = () => {
    store.setUserStatusInLS(usersList, currentUser, false);
    store.removeCurrentUserFromSS();
    store.refreshUsers();
  };

  return (
    <div className={clsx(className, styles.root)}>
      <div className={clsx('container', styles.container)}>
        <nav id='navBar' className={styles.nav}>
          <div className={styles.nav_left}>
            <NavLink
              className={styles.navLink}
              to='/'
            >Home</NavLink>
            <NavLink
              className={styles.navLink}
              to='/chat'
            >Chat</NavLink>
          </div>
          <div className={styles.nav_right}>
            {!store.currentUser ? (
              <NavLink
                className={styles.navLink}
                to='/login'
              >Login</NavLink>
            ) : (
              <>
                <p className={styles.currentUser}>{currentUser}</p>
                <button
                  type='button'
                  onClick={()=>handleLogOut()}
                >Log out</button>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default observer(NavBar);
