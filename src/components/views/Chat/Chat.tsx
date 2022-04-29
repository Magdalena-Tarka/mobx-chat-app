import clsx from 'clsx';
import { observer } from 'mobx-react';
import store from '../../../stores/chatStore';
import styles from './Chat.module.scss';
import OnlineUsersList from './OnlineUsersList/OnlineUsersList';
import ChatRoom from './ChatRoom/ChatRoom';

const Chat = ({className}: {className?: string}) => {
  const { chatMessages, loggedInUsers } = store;

  return (
    <div className={clsx(className, styles.root)}>
      <div className={clsx('container', styles.container)}>
        <OnlineUsersList
          className={styles.onlineUsersList}
          loggedInUsers={loggedInUsers}
        />
        <ChatRoom
          className={styles.chatRoom}
          messages={chatMessages}
        />
      </div>
    </div>
  );
};

export default observer(Chat);
