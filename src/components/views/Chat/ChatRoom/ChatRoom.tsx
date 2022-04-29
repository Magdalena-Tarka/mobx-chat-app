import { ChangeEvent, FormEvent, useState } from 'react';
import clsx from 'clsx';
import styles from './ChatRoom.module.scss';
import store from '../../../../stores/chatStore';
import { IMessage } from '../../../../types';
import { observer } from 'mobx-react';

interface IOwnProps {
  className?: string,
  messages: IMessage[],
}

const ChatRoom = ({className, messages}: IOwnProps) => {
  const [text, setText] = useState('');
  const timestamp = new Date().getTime();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSendMsg = (e: FormEvent) => {
    e.preventDefault();
    const newMessage = {
      author: store.currentUser,
      content: text,
      timestamp,
    };
    store.addMessage(newMessage);
    setText('');
  };

  return (
    <div className={clsx(className, styles.root)}>
      <h5>CHAT ROOM</h5>
      <ul className={styles.chatWrapper}>
        {!messages.length ? <small>Start a conversation..</small>
          : messages.map(message => (
            <li
              className={clsx(styles.message, (message.author === store.currentUser ? styles.message_self : styles.message_received))}
              key={message.timestamp}
            >
              <small className={styles.messageAuthor}>
                {message.author}
              </small>
              <p className={styles.messageContent}>
                {message.content}
              </p>
            </li>
          ))}
      </ul>
      <form className={styles.form} onSubmit={handleSendMsg}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type='text'
            id='text'
            name='text'
            placeholder='Send a message..'
            value={text}
            onChange={handleChange}
          />
          {/*<label
            className={styles.label}
            htmlFor='text'
            >Message</label>*/}
        </div>
        <button
          className={clsx(styles.btn)}
          type='submit'
        >@</button>
      </form>
    </div>
  );
};

export default observer(ChatRoom);
