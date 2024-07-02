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
        <div>account</div>
        <div className={`${styles.cross}`} onClick={clickHandler}>
        <img src={cross} alt='close' />
      </div>
      </div>
      <div className={`${styles.text} ${styles.item}`}>
        account
      </div>
      <div className={`${styles.text} ${styles.item}`}>
        account
      </div>
      <div
        className={`${styles.text} ${styles.item}`}
        onClick={clickHandler2}
      >
        Logout
      </div>
      {showLogout && (
          <Logout />
        )}
    </div>
  )
}

export default Menu;