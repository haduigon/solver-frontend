/* eslint-disable */
// import { useAppDispatch } from '../../app/hooks';
// import * as userActions from '../../features/user';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../firebase/firebase';
import { useState } from 'react';
import styles from './Logout.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as appActions from '../../features/app'
// import Message from '../Message';

const Logout = () => {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const [render, setRender] = useState(false);
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.app)
  
   function clickHandler() {
     logout();
     navigate('/')
     setRender(!render);
   }
  
  function cancel222() {
    console.log('c a n c e l', state);
    
    dispatch(appActions.setShowLogout(false));
    // dispatch(appActions.setShowMenu(false));
  }
  //  function logoutHandler() {
  //    logout();
  //    navigate('/')
  //    setRender(!render);
  //  }
  
  return (
    <div className={`${styles.box} ${styles.text}`}>
      Are you sure?
      <div>
        <div className={`${styles.text}`} onClick={clickHandler}>
      I`m leaving
        </div>
        <div onClick={cancel222}>
          I`m with you !
        </div>
      </div>
    </div>
  )
}

export default Logout;