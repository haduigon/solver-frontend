/* eslint-disable */
import Menu from "../../components/Menu";
import { useAppSelector } from "../../app/hooks";


const ChatPage = () => {
  const { showMenu } = useAppSelector(state => state.app);
  
  return (
    <div className="global-container mainText">
      {showMenu&& <Menu />}
    </div>
  );
};

export default ChatPage;