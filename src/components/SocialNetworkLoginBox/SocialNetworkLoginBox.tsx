import SocialNetworkLogin from "../SocialNetworkLogin/SocialNetworkLogin";
import facebookPicture from '../../assets/img/fb.svg';
import googlePicture from '../../assets/img/google.svg';
import githubPicture from '../../assets/img/github.svg';
import styles from  './SocialNetworkLoginBox.module.scss'

const SocialNetworkLoginBox = () => {
  return (
    <div className={styles.box}>
      <SocialNetworkLogin image={facebookPicture}  /> 
      <SocialNetworkLogin image={googlePicture} /> 
      <SocialNetworkLogin image={githubPicture} name='github' /> 
    </div>
  )
}

export default SocialNetworkLoginBox;