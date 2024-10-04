/* eslint-disable */
import styles from './ChatInput.module.scss';
import arrow from '../../assets/img/arrow2.svg';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import {
  useAppDispatch,
  useAppSelector,
} from '../../app/hooks';
import * as appActions from '../../features/app';
import { Message } from '../../app/classes/Message';
import { formattedDate } from '../../helpers/utils';
import Loader from '../Loader';

const ChatInput = () => {
  const [questionText, setQuestionText] = useState<string>();
  const { currentUser }: any = getAuth();
  const dispatch = useAppDispatch();
  const app = useAppSelector(state => state.app);
  // const detect = useDetectNewDialog();

  function onChangeHandler(data: string) {
    setQuestionText(data);
  }

  function requestHandler() {
    // setQuestionText('');

    const detect = app.isNewDialog || app.history.length === 0
      ? 'm'
      : 'a';

    const newM = new Message('request', questionText, formattedDate());

    setQuestionText('');

    dispatch(appActions.addMessage(JSON.parse(JSON.stringify(newM))));

    dispatch(appActions.getAnswer({
      token: currentUser.accessToken,
      question: `${questionText}` || '',
      newDialog: detect,
    }));
    // console.log('send question');
    // setQuestionText('');
  }
  
  return (
    <div className={styles.bigBox}>
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
      
      <div className={styles.resetBox2}>
        <div className={styles.resetBox}>
          <Loader rotate={false} />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;