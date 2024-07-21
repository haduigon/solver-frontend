/* eslint-disable */
import { Link } from 'react-router-dom';
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  return (
        <div className={`${styles.box}`}>
      <div className={`${styles.text} ${styles.item}`}>
        <Link to='/profile'>Profile</Link>
        <div className={`${styles.cross}`} >
        <div>Back</div>
      </div>
      </div>
      <div className={`${styles.text} ${styles.item}`}>
        Chat
      </div>
      <div className={`${styles.text} ${styles.item}`}>
        <Link to=''>History</Link>
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
      >
        {/* <div className={`${styles.logout__text}`}>Log out</div> */}
      </div>
      </div>

    </div>
  )
}

export default ProfilePage;