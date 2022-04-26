import clsx from 'clsx';
import styles from './Chat.module.scss';

const Chat = ({className}: {className?: string}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={clsx('container', styles.container)}>
        <p>Chat</p>
      </div>
    </div>
  );
};

export default Chat;
