/* eslint-disable */
// import Menu from "../../components/Menu";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ChatInput from "../../components/ChatInput";
import ChatMessage from "../../components/ChatMessage";
import styles from './ChatPage.module.scss';
import Wave from "../../components/Wave";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import * as appActions from '../../features/app';
// import { auth } from "../../firebase/firebase";

const ChatPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(appActions.setShowMenu(false));
  },[])

  // const { showMenu } = useAppSelector(state => state.app);
  const appState = useAppSelector(appState => appState.app);
  // console.log(auth.currentUser, appState.dialog, 'current chat page');
  const location = useLocation();
  console.log(location.pathname.split('/'));
  if (location.pathname.split('/')[2]) {
    console.log('it is a history', location.pathname.split('/')[2]);
    
  }
  
  return (
    <div className={`${styles.box} mainText`}>

      {/* {showMenu && <Menu />} */}

      <div className={`${styles.flexBox} mainText`}>

        <div style={{
          overflowY: 'scroll',
          width: '100%',
        }}
          className={styles.scroll}
        >
          {appState.dialog.map(item => <ChatMessage message={item} key={item.id + item.body}/>)}
          {appState.messageIsTyping && <Wave />}
        </div>

      </div>
      <ChatInput />
    </div>
  );
};

export default ChatPage;