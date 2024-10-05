/* eslint-disable */
import { Link, useNavigate } from 'react-router-dom';
import styles from './ProfilePage.module.scss';
import picture from '../../assets/img/backImg.svg';
import backButton from '../../assets/img/backButton.svg';
import { useEffect, useState } from 'react';
import * as appActions from '../../features/app';
import {
  useAppDispatch,
  // useAppSelector
} from '../../app/hooks';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userImg, setUserImg] = useState(picture);
    const dispatch = useAppDispatch();

  const handleImgUpload = (e: any) => {
    console.log(e.target, 'imgbuttonworks')
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setUserImg(reader.result as any);
      };

      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    dispatch(appActions.getUserInfo());
  }, [])

  return (
    <div className={`${styles.box}`}>
      <div className={`${styles.item}`}>
        <Link to='/profile' className={`menu-text`}>Profile</Link>
        <label className={`${styles.backButtonBox}`} onClick={() => navigate(-1)}>
          <div className={`${styles.back}`} >
            <div className={`menu-text`}>Back</div>
          </div>
          <div className={`${styles.polygonBox}`}>
            <img
              src={backButton}
              alt='back button'
              style={{
                display: 'block'
              }}
            />
          </div>
        </label>
      </div>

      <div className={`mt-5`}>
        <div className={`menu-text ${styles.picBox}`}>
          <img
            src={userImg}
            alt='drug your foto'
            className={`${styles.pic}`}
          />
          <input
            type='file'
            className={styles.input}
            accept='image/*'
            onChange={handleImgUpload}
          />
        </div>
      </div>

      <div className={`${styles.item}`}>
        <Link to='' className={`menu-text`}>Name</Link>
      </div>

      <div className={`${styles.item}`}>
        <Link to='' className={`menu-text`}>Language</Link>
      </div>







      <div className={`${styles.email}`}>
        <div className={`${styles.item}`}>
          <Link to='' className={`menu-text`}>email</Link>
        </div>
      </div>

    </div>
  )
}

export default ProfilePage;