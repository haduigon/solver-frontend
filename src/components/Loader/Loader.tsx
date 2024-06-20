import loaderImg from '../../assets/img/Loader.svg';
import styles from './Loader.module.scss';

const Loader = () => {
  // const img = '../'

  return (
    <div className={styles.loaderBox}>
      <img src={loaderImg} alt='loader' className={styles.rotate} />
    </div>
  );
};

export default Loader;