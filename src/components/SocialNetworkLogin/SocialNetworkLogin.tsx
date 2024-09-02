/* eslint-disable */
import styles from './SocialNetworkLogin.module.scss';
import * as userActions from '../../features/user';
import { useAppDispatch } from '../../app/hooks';
import facebookPicture from '../../assets/img/fb.svg';
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth';
import googlePicture from '../../assets/img/google.svg';
import githubPicture from '../../assets/img/github.svg';

type Props = {
  name: 'google' | 'facebook' | 'github',
};

const SocialNetworkLogin: React.FC<Props> = ({ name }) => {

  const dispatch = useAppDispatch();

  const google = new GoogleAuthProvider();
  const facebook = new FacebookAuthProvider();
  const github = new GithubAuthProvider();
  
  const providers = {
    "facebook" : facebook,
    "google" : google,
    "github" : github,
  }

  const images = {
    "facebook" : facebookPicture,
    "google" : googlePicture,
    "github" : githubPicture,
  }

  function googleLogin() {
    dispatch(userActions.userGoogleLogin(providers[name]));
  }

  return (
    <div
      onClick={googleLogin}
    >
      <img
        className={styles.back}
        src={images[name]}
        alt="logo"
      />
    </div>
  );
};

export default SocialNetworkLogin;