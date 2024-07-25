/* eslint-disable */
import styles from './Menu.module.scss';
import cross from '../../assets/img/cross.svg'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as appActions from '../../features/app';
import Logout from '../Logout';
import { Link } from 'react-router-dom';

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
      <div className={`${styles.item}`}>
        <Link to='/profile' className={`${styles.text} `}>Profile</Link>
        <div className={`${styles.cross}`} onClick={clickHandler}>
          <img src={cross} alt='close' style={{
            display: 'block'
          }}/>
        </div>
      </div>

      <div className={`${styles.item}`}>
        <Link to='/chat' className={`${styles.text} `}>Chat</Link>
      </div>
      <div className={`${styles.item}`}>
        <Link to='/history' className={`${styles.text} `}>History</Link>
      </div>
      <div className={`${styles.item}`}>
        <Link to='' className={`${styles.text} `}>Subscription</Link>
      </div>
      <div className={`${styles.item}`}>
        <Link to='' className={`${styles.text} `}>Contacts</Link>
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