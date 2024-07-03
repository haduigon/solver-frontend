import styles from './ChatInput.module.scss';
import arrow from '../../assets/img/arrow2.svg';

const ChatInput = () => {
  return (
    <div className={`${styles.box}`}>
      <textarea placeholder='...' className={`${styles.inpt} ${styles.inputField}`} ></textarea>
      <button className={`${styles.box2}`}>
        <img src={arrow} alt='enter' />
      </button>
    </div>
  );
};

export default ChatInput;