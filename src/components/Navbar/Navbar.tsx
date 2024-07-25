/* eslint-disable */
import styles from './Navbar.module.scss';
// import Logout from '../Logout';
import pic from '../../assets/img/navbarPanda.svg'
import MenuButton from '../MenuButton';
import Menu from "../Menu"
import { useAppSelector } from '../../app/hooks';

const Navbar = () => {
  const { showMenu } = useAppSelector(state => state.app);
  // const appState = useAppSelector(appState => appState.app);
  return (
    <div className={styles.navbarBox}>
      {showMenu && <Menu />}
      <MenuButton />
      <div>
        <img
          className={`${styles.imgBox}`}
          src={pic}
          alt='panga-img'
        />
      </div>
      {/* <Logout /> */}
      <p className='mainText'>solver</p>
    </div>
  );
};

export default Navbar;