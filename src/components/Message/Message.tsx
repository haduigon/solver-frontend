/* eslint-disable */
import styles from './Message.module.scss'

type Props = {
  message: string,
}

const Message: React.FC<Props> = ({ message }) => {
  return (
    <div className={styles.messageBox}>
      {message}
    </div>
  )
}

export default Message;