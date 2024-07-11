/* eslint-disable */
import styles from './Wave.module.scss';
import pic from '../../assets/img/red2.svg';


const Wave = () => {
  return (
    <div className={`${styles.waveBox}`}>
      <div className={`${styles.pandaBox}`}>
        <img src={pic} alt='panda' />
      </div>

        <div className={`${styles.wave}`}>
          <span className={`${styles.srtextarea}`}></span>
          <span className={`${styles.srfriendzone}`}>
           
          </span>
        <span className={`${styles.dot}`}></span>
          <span className={`${styles.dot} ${styles.two}`}></span>
          <span className={`${styles.dot} ${styles.three}`}></span>
          <p className="">
          </p>
        </div>
    </div>
  )
}

export default Wave;