/* eslint-disable */
import styles from './Menu.module.scss';
import cross from '../../assets/img/cross.svg'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as appActions from '../../features/app';
import Logout from '../Logout';

const Menu = () => {
  const dispatch = useAppDispatch();
  const { showLogout } = useAppSelector(state => state.app)

  function clickHandler() {
    dispatch(appActions.setShowMenu(false));
    dispatch(appActions.setShowLogout(false));
  }
  function clickHandler2() {
    dispatch(appActions.setShowLogout(true));
  }
  return (
    <div className={`${styles.box}`}>
      <div className={`${styles.text} ${styles.item}`}>
        Profile
        <div className={`${styles.cross}`} onClick={clickHandler}>
        <img src={cross} alt='close' />
      </div>
      </div>
      <div className={`${styles.text} ${styles.item}`}>
        Chat
      </div>
      <div className={`${styles.text} ${styles.item}`}>
        History
      </div>
      <div className={`${styles.text} ${styles.item}`}>
        Contact information
      </div>
      <div className={`${styles.text} ${styles.item}`}>
        Subscription
      </div>









      <div className={`${styles.logout}`}>
        <div
        className={`${styles.text} ${styles.item}`}
        onClick={clickHandler2}
      >
        <div className={`${styles.logout__text}`}>Log out</div>
      </div>
      </div>
      {showLogout && (
          <Logout />
        )}
    </div>
  )
}

export default Menu;