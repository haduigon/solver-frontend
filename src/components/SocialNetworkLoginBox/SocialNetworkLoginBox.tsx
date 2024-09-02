import SocialNetworkLogin from "../SocialNetworkLogin/SocialNetworkLogin";
import styles from './SocialNetworkLoginBox.module.scss';

const SocialNetworkLoginBox = () => {
  return (
    <div className={styles.box}>
      <SocialNetworkLogin name='facebook'/>
      <SocialNetworkLogin name='google'/>
      <SocialNetworkLogin name='github' />
    </div>
  );
};

export default SocialNetworkLoginBox;