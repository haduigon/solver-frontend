/* eslint-disable */
import Menu from "../../components/Menu";
import { useAppSelector } from "../../app/hooks";
import ChatInput from "../../components/ChatInput";
// import { getAuth } from "firebase/auth";
import ChatMessage from "../../components/ChatMessage";
import styles from './ChatPage.module.scss';
// import Wave from "../../components/Wave";
// import { Dialog } from "../../app/classes/Dialog";
// import { Message } from "../../types/types";

const ChatPage = () => {
  // const currentUser: any = getAuth()
  // console.log(currentUser.currentUser.accessToken);
  // const { response } = useAppSelector(state => state.app);

  const { showMenu } = useAppSelector(state => state.app);
  const appState = useAppSelector(appState => appState.app);
  // const test = new Dialog('response');
  // test.addMessage({} as Message)
  // console.log(test.get().messages, 'teest')
  console.log(appState.dialog)
  // const startMessage = {
  //   id: '',
  //   type: 'request',
  //   user: '',
  //   body: 'fl  ;fk fk ffl  ;fk fk ffl  ;fk fk ffl  ;fk fk ffl  ;fk fk ffl  ;fk fk f',

  // }
  // const startMessage2 = {
  //   id: '',
  //   type: 'response',
  //   body: 'fl  ;fk fk ffl  ;fk fk ffl  ;fk fk ffl  ;fk fk ffl  ;fk fk ffl  ;fk fk f',
  //   user: '',
  // }
  return (
    <div className={`${styles.box} mainText`}>
      {/* <ChatMessage /> */}
      {showMenu && <Menu />}
      {/* {response.length > 0 && (
        <div>
          {response}
        </div>
      )} */}
      <div className={`${styles.box} mainText`}>
       
        {/* <ChatMessage message={startMessage2} /> */}
        {/* <Wave /> */}
        {appState.dialog.map(item => <ChatMessage message={item} />)}
      </div>
      {/* {appState.dialog.map(item => <ChatMessage message={item} />)} */}
       {/* <ChatMessage message={startMessage} /> */}
      <ChatInput />
    </div>
  );
};

export default ChatPage;