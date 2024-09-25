/* eslint-disable */
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ChatInput from "../../components/ChatInput";
import ChatMessage from "../../components/ChatMessage";
import styles from './ChatPage.module.scss';
import Wave from "../../components/Wave";
import {
  useEffect, useRef,
  // useState
} from "react";
import * as appActions from '../../features/app';
import { Message } from "../../app/classes/Message";

const ChatPage = () => {
  const dispatch = useAppDispatch();
  const app = useAppSelector(state => state.app);
  const appState = useAppSelector(appState => appState.app);
  // const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  // const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const myRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [app.dialog.length]);

  // useEffect(() => {
  //       const handleResize = () => {
  //     const currentHeight = window.innerHeight;
  //     // Check if the height has decreased, indicating the keyboard is likely open
  //     if (currentHeight < windowHeight) {
  //       // setIsKeyboardOpen(true);
  //     } else {
  //       // setIsKeyboardOpen(false);
  //     }
  //     setWindowHeight(currentHeight);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [windowHeight])

  useEffect(() => {
    dispatch(appActions.setShowMenu(false));
  }, []);

  useEffect(() => {
      const newHistory = app.selectedHistory?.map((elem: any) => {
      const arr = [];
      const req = new Message('request', elem.request);
      const resp = new Message('response', elem.response);
      arr.push(req);
      arr.push(resp);
         
      return arr.reverse();
    })
    const history2 = newHistory?.flatMap(elem => elem).reverse();
    if (history2) {
      dispatch(appActions.setDialog(JSON.parse(JSON.stringify(history2))));
    }
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
          <div ref={myRef}></div>
        </div>
          {/* {isKeyboardOpen && <p>Keyboard is open!</p>} */}
      </div>
      
      <ChatInput />
    </div>
  );
};

export default ChatPage;