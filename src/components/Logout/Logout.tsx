/* eslint-disable */
import { useNavigate } from 'react-router-dom';
import { logout } from '../../firebase/firebase';
import { useState } from 'react';
import styles from './Logout.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as appActions from '../../features/app'

const Logout = () => {
  const navigate = useNavigate();
  const [render, setRender] = useState(false);
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state)
  
  function clickHandler() {
     localStorage.clear();
    sessionStorage.clear();
    dispatch(appActions.resetState());
    console.log(state.app.dialog)
     logout();
     navigate('/');
     setRender(!render);
   }
  
  function cancel222() {
    dispatch(appActions.setShowLogout(false));
  }
  
  return (
    <div className={`${styles.box} ${styles.text}`}>
      <div>
        <div className={`${styles.text}`} onClick={clickHandler}>
      Log out
        </div>
        <div onClick={cancel222} className={`${styles.text}`}>
      Stay in app
        </div>
      </div>
    </div>
  )
}

export default Logout;