/* eslint-disable */
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ChatInput from "../../components/ChatInput";
import ChatMessage from "../../components/ChatMessage";
import styles from './ChatPage.module.scss';
import Wave from "../../components/Wave";
import { useEffect, useState } from "react";
import * as appActions from '../../features/app';
import { Message } from "../../app/classes/Message";

const ChatPage = () => {
  const dispatch = useAppDispatch();
  const app = useAppSelector(state => state.app);
  const [historyDialog, setHistoryDialog] = useState<Message[]>();
  const appState = useAppSelector(appState => appState.app);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
        const handleResize = () => {
      const currentHeight = window.innerHeight;
      // Check if the height has decreased, indicating the keyboard is likely open
      if (currentHeight < windowHeight) {
        setIsKeyboardOpen(true);
      } else {
        setIsKeyboardOpen(false);
      }
      setWindowHeight(currentHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowHeight])

  useEffect(() => {
    dispatch(appActions.setShowMenu(false));
  }, []);
  // console.log(app, 'aaap chat page')
  useEffect(() => {
      const newHistory = app.selectedHistory?.map((elem: any) => {
      const arr = [];
      const req = new Message('request', elem.request);
      const resp = new Message('response', elem.response);
      arr.unshift(req);
      arr.unshift(resp);
         
      return arr.reverse();
    })
    const history2 = newHistory?.flatMap(elem => elem);
    setHistoryDialog(history2?.reverse());
  }, [appState.selectedHistory])

  return (
    <div className={`${styles.box} mainText`}>

      <div className={`${styles.flexBox} mainText`} >

        <div style={{
          overflowY: 'scroll',
          width: '100%',
        }}
          className={styles.scroll}
        >
          {appState.dialog.map(item => <ChatMessage message={item} key={item.id} />)}
          {appState.messageIsTyping && <Wave />}
          
          {historyDialog && (
            historyDialog.reverse()?.map((item2: any) =>
              <div key={item2.id}>
              <ChatMessage message={item2} />
              </div>
            )
          )}
        </div>
          {isKeyboardOpen && <p>Keyboard is open!</p>}
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatPage;