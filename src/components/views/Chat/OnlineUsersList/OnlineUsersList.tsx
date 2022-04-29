import clsx from 'clsx';
import styles from './OnlineUsersList.module.scss';
import { IUser } from '../../../../types';

interface IOwnProps {
  className?: string,
  loggedInUsers: IUser[],
}

const OnlineUsersList = ({ className, loggedInUsers }: IOwnProps) => {

  return (
    <div className={clsx(className, styles.root)}>
      <h5>LOGGEDIN USERS</h5>
      <div className={styles.usersListWrapper}>
        {!loggedInUsers.length
          ? <small>There is no logged in users yet..</small>
          : loggedInUsers.map((user) => (
            <p key={user.id} className={styles.user}>
              <small>{user.name}</small>
            </p>
          ))}
      </div>
    </div>
  );
};

export default OnlineUsersList;
