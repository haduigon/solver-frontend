/* eslint-disable */
import { Link, useNavigate } from 'react-router-dom';
import styles from './ProfilePage.module.scss';
import picture from '../../assets/img/backImg.svg'
import backButton from '../../assets/img/backButton.svg'
// import picture from '../../assets/img/Ellipse2.svg'

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.box}`}>
      <div className={`${styles.item}`}>
        <Link to='/profile' className={`menu-text`}>Profile</Link>
        <label className={`${styles.backButtonBox}`} onClick={() => navigate(-1)}>
          <div className={`${styles.back}`} >
            <div  className={`menu-text`}>Back</div>
          </div>
          <div className={`${styles.polygonBox}`}>
            <img src={backButton} alt='back button' style={{
              display: 'block'
            }}/>
          </div>
        </label>
      </div>

      <div className={`${styles.item} `}>
        <Link to='' className={`menu-text ${styles.picBox}`}>
          <img src={picture} alt='drug your foto' className={`${styles.pic}`} />
        </Link>
      </div>

      <div className={`${styles.item} mt-30vh`}>
        <Link to='' className={`menu-text`}>Name</Link>
      </div>

      <div className={`${styles.item}`}>
        <Link to='' className={`menu-text`}>Language</Link>
      </div>







      <div className={`${styles.email}`}>
        <div className={`${styles.item}`}>
          <Link to='' className={`${styles.text}`}>email</Link>
        </div>
      </div>

    </div>
  )
}

export default ProfilePage;