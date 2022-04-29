import clsx from 'clsx';
import { ChangeEvent, FormEvent, useState } from 'react';
import { observer } from 'mobx-react';
import store from '../../../stores/chatStore';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router';

const Login = ({className}: {className?: string}) => {
  const [current, setCurrent] = useState(store.currentUser);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { usersList } = store;

  const handleChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    if(field === 'name') setName(e.target.value);
    if(field === 'password') setPassword(e.target.value);
  };

  const handleLogIn = (e: FormEvent) => {
    e.preventDefault();
    const userToLogIn = { userName: name };
    for (const user of usersList) {
      if (user.name === name && user.password === password) {
        store.setUserStatusInLS(usersList, name, true);
        store.addCurentUserToSS(userToLogIn);
        store.refreshUsers();
        setCurrent(name);
        setName('');
        setPassword('');
        navigate('/chat');
      }
    }
  };

  const handleLogOut = () => {
    store.setUserStatusInLS(usersList, current, false);
    store.removeCurrentUserFromSS();
    store.refreshUsers();
    setCurrent('');
  };

  return (
    <div className={clsx(className, styles.root)}>
      <div className={clsx('container', styles.container)}>
        <h4>{!current ? 'Log in to join chat.' : 'You are logged in, enjoy chatting.'}</h4>
        {!current ? (
          <form className={styles.form} onSubmit={handleLogIn}>
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={(e)=>handleChange(e, 'name')}
              />
              <label
                className={styles.label}
                htmlFor='name'
              >Name</label>
            </div>
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                type='text'
                id='password'
                name='password'
                value={password}
                onChange={(e)=>handleChange(e, 'password')}
              />
              <label
                className={styles.label}
                htmlFor='name'
              >Password</label>
            </div>
            <button
              className={clsx(styles.btn, styles.logIn)}
              type='submit'
            >Log In</button>
          </form>
        ) : (
          <button
            className={clsx(styles.btn, styles.logOut)}
            type='button'
            onClick={()=>handleLogOut()}
          >Log Out</button>
        )}
      </div>
    </div>
  );
};

export default observer(Login);
