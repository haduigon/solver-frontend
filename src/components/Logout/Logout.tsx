// import { useAppDispatch } from '../../app/hooks';
// import * as userActions from '../../features/user';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../firebase/firebase';

const Logout = () => {
  // const dispatch = useAppDispatch();
    const navigate = useNavigate()
   function clickHandler() {
     logout()
    //  dispatch(userActions.userLogout() as any)
     console.log('logout');
     navigate('/login')
    
  }

  return (
    <div className="mainText" onClick={clickHandler}>
      Logout
    </div>
  )
}

export default Logout;