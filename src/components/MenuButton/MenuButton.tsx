/* eslint-disable */
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import styles from './MenuButton.module.scss';
import * as appActions from '../../features/app';

const MenuButton = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.app)
  

  function clickHandler() {
    console.log(state);
    dispatch(appActions.setShowMenu(!state.showMenu));
  }

  return (
    <div className={`${styles.burgerBox}`} onClick={clickHandler}>
      <div className={`${styles.burgerItem}`}></div>
      <div className={`${styles.burgerItem}`}></div>
      <div className={`${styles.burgerItem}`}></div>
    </div>
  )
}

export default MenuButton;