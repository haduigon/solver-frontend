/* eslint-disable */
import styles from './ChatInput.module.scss';
import arrow from '../../assets/img/arrow2.svg';
import { useState } from 'react';
import { client } from '../../helpers/utils';
import { getAuth } from 'firebase/auth';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as appActions from '../../features/app';
// import { Dialog, Message } from '../../types/types';
import { Dialog } from '../../app/classes/Dialog';
// import { Message } from '../../types/types';
// import { v4 as uuidv4 } from 'uuid';
// import ChatMessage from '../ChatMessage';
// import { sendMessage } from '../../helpers/utils';

const ChatInput = () => {
  const [questionText, setQuestionText] = useState<string>();
  const { currentUser }: any = getAuth();
  // const [response, setResponse] = useState<string>('');
  const dispatch = useAppDispatch();

  // const id = `${currentUser.email} ${new Date().toDateString()}`;
  
  function getId() {
      const time = new Date();

    const id = `${currentUser.email} ${time.toDateString()} ${time.getHours()} ${time.getMinutes()} ${time.getSeconds()} ${time.getMilliseconds()}`;
    return id.replaceAll(' ', '-');
  }
  const id = getId();
  const newD = new Dialog(id, currentUser.email);

  const dd = useAppSelector(state => state.app);
  console.log(dd.dialog, 'ddddd');
  

  
  function onChangeHandler(data: string) {
    setQuestionText(data);
  }

  // console.log();

  function requestHandler() {
    setQuestionText('');
    const idM = getId();

    const newM = {
      id: idM,
      type: 'request',
      user: currentUser.email,
      body: questionText,
    };

    //  newD.addMessage(newM as Message);
     dispatch(appActions.addMessage(newM))

    // console.log(questionText, String(currentUser.accessToken))
    // sendMessage(currentUser.accessToken, questionText || '').then(resp => console.log(resp, 'dfvdfv'))
    // dispatch(appActions.getAnswer({
    //   token: currentUser.accessToken,
    //   question: questionText || '',
    // }))



    client.post('/home', {
      headers: {
        "authorization": currentUser.accessToken,
      },
      error: questionText,
    }).then(resp => console.log(resp, 'rrrrreesp'))
    

      // console.log(test, 'test');
    console.log(newD, 'newDDDD');

  }

  return (
    <div className={`${styles.box}`}>
      {/* <ChatMessage /> */}
      {/* {newD.messages[0]} */}
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