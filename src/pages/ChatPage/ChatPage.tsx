/* eslint-disable */
import Menu from "../../components/Menu";
import { useAppSelector } from "../../app/hooks";
import ChatInput from "../../components/ChatInput";


const ChatPage = () => {
  const { showMenu } = useAppSelector(state => state.app);
  
  return (
    <div className="global-container mainText">
      {showMenu && <Menu />}
      <ChatInput />
    </div>
  );
};

export default ChatPage;