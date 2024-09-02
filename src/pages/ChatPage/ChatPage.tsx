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

  useEffect(() => {
    dispatch(appActions.setShowMenu(false));
  }, []);
  
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
          {/* <svg className="iconDefault" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
</svg> */}
          {appState.dialog.map(item => <ChatMessage message={item} key={item.id} />)}
          {appState.messageIsTyping && <Wave />}
          
          {historyDialog && (
            historyDialog?.map((item2: any) =>
              <div key={item2.id}>
              <ChatMessage message={item2} />
              </div>
            )
          )}
        </div>

      </div>
      <ChatInput />
    </div>
  );
};

export default ChatPage;