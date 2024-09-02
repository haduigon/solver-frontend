/* eslint-disable */
import styles from './ChatInput.module.scss';
import arrow from '../../assets/img/arrow2.svg';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import {
  useAppDispatch,
} from '../../app/hooks';
import * as appActions from '../../features/app';
import { Message } from '../../app/classes/Message';

const ChatInput = () => {
  const [questionText, setQuestionText] = useState<string>();
  const { currentUser }: any = getAuth();
  const dispatch = useAppDispatch();

  function onChangeHandler(data: string) {
    setQuestionText(data);
  }

  function requestHandler() {
    setQuestionText('');

    const newM = new Message('request', questionText);

    dispatch(appActions.addMessage(JSON.parse(JSON.stringify(newM))));

    dispatch(appActions.getAnswer({
      token: currentUser.accessToken,
      question: `${questionText}` || '',
    }));
  }
  
  return (
    <div className={`${styles.box}`}>
      <textarea
        placeholder='...'
        className={`${styles.inpt} ${styles.inputField}`}
        onChange={(event) => onChangeHandler(event.currentTarget.value)}
        value={questionText}
      >

      </textarea>
      <button className={`${styles.box2}`} onClick={requestHandler}>
        <img src={arrow} alt='enter' />
      </button>
    </div>
  );
};

export default ChatInput;