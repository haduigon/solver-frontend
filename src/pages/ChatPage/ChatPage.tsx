/* eslint-disable */
import Menu from "../../components/Menu";
import { useAppSelector } from "../../app/hooks";
import ChatInput from "../../components/ChatInput";
import ChatMessage from "../../components/ChatMessage";
import styles from './ChatPage.module.scss';
import Wave from "../../components/Wave";
// import { auth } from "../../firebase/firebase";

const ChatPage = () => {

  const { showMenu } = useAppSelector(state => state.app);
  const appState = useAppSelector(appState => appState.app);
  // console.log(auth.currentUser, appState.dialog, 'current chat page');
  
  return (
    <div className={`${styles.box} mainText`}>

      {showMenu && <Menu />}

      <div className={`${styles.flexBox} mainText`}>

        <div style={{
          overflowY: 'scroll',
          width: '100%',
        }}
          className={styles.scroll}
        >
          {appState.dialog.map(item => <ChatMessage message={item} key={item.id}/>)}
          {appState.messageIsTyping && <Wave />}
        </div>

      </div>
      <ChatInput />
    </div>
  );
};

export default ChatPage;