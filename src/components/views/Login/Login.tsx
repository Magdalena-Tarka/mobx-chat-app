import clsx from 'clsx';
import styles from './Login.module.scss';

const Login = ({className}: {className?: string}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={clsx('container', styles.container)}>
        <p>Login</p>
      </div>
    </div>
  );
};

export default Login;
