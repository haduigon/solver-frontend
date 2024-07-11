/* eslint-disable */
import styles from './ChatMessage.module.scss';
import pic from '../../assets/img/red2.svg';
import classNames from 'classnames';
import { Message } from '../../types/types';

type Props = {
  message: Message | undefined,
}

const ChatMessage: React.FC<Props> = ({ message = {} as Message }) => {
  console.log(message.type);
  
  return (
    <div className={classNames({
      [styles.responseBox]: message?.type === 'response',
      [styles.box]: message?.type === 'request',
    })}>
      {message?.type === 'response' && (
         <div className={`${styles.pandaBox}`}>
        <img src={pic} alt='panda' />
      </div>
     )}
      <div className={classNames({
      [styles.responseMessage]: message?.type === 'response',
      [styles.message]: message?.type === 'request',
      })}>
        <p className={`${styles.wrap}`}>
          {message?.body}
        </p>
      </div>
      {message?.type === 'request' && (
         <div className={`${styles.userBox}`}>
        <img src={pic} alt='panda' />
      </div>
     )}
    </div>
  )
}

export default ChatMessage;