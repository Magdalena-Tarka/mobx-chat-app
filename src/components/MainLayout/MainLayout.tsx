import clsx from 'clsx';
import styles from './MainLayout.module.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const MainLayout = ({className, children}: {className?: string, children?: React.ReactNode}) => (
  <div className={clsx(className, styles.root)}>
    <NavBar className={styles.navBar} />
    <main>
      {children}
    </main>
    <Footer className={styles.footer} />
  </div>
);

export default MainLayout;
