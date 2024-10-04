/* eslint-disable */
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ChatInput from "../../components/ChatInput";
import ChatMessage from "../../components/ChatMessage";
import styles from './ChatPage.module.scss';
import Wave from "../../components/Wave";
import {
  useEffect,
  useRef,
} from "react";
import * as appActions from '../../features/app';
import { Message } from "../../app/classes/Message";
// import Loader from "../../components/Loader";

const ChatPage = () => {
  const dispatch = useAppDispatch();
  const app = useAppSelector(state => state.app);
  const appState = useAppSelector(appState => appState.app);
  const myRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [app.dialog.length]);

  useEffect(() => {
    dispatch(appActions.setShowMenu(false));
  }, []);

  useEffect(() => {
      const newHistory = app.selectedHistory?.map((elem: any) => {
      const arr = [];
        const req = new Message('request', elem.request, elem.date);
        arr.push(req);
      const resp = new Message('response', elem.response, elem.date);
      
      arr.push(resp);
         
      return arr;
      })
    // console.log(newHistory, 'newhistory');
    
    const history2 = newHistory?.flatMap(elem => elem);
    console.log(history2, 'history2');
    
    if (history2) {
      dispatch(appActions.setDialog(JSON.parse(JSON.stringify(history2))));
    }
  }, [appState.selectedHistory])
  // console.log(app.dialog);
  
  return (
    <div className={`${styles.box} mainText`}>
      {/* <Loader rotate={true} /> */}
      <div className={`${styles.flexBox} mainText`} >

        <div style={{
          overflowY: 'scroll',
          width: '100%',
        }}
          className={styles.scroll}
        >
          {appState.dialog.map(item => <ChatMessage message={item} key={item.id} />)}
          {appState.messageIsTyping && <Wave />}
          <div ref={myRef}></div>
        </div>
          {/* {isKeyboardOpen && <p>Keyboard is open!</p>} */}
      </div>
      
      <ChatInput />
    </div>
  );
};

export default ChatPage;