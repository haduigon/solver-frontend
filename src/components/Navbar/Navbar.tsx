/* eslint-disable */
import styles from './Navbar.module.scss';
// import Logout from '../Logout';
import pic from '../../assets/img/navbarPanda.svg'
import MenuButton from '../MenuButton';

const Navbar = () => {
  return (
    <div className={styles.navbarBox}>
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