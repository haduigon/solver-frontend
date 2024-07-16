import styles from './SocialNetworkLogin.module.scss';
import classNames from 'classnames';
import * as userActions from '../../features/user';
import { useAppDispatch } from '../../app/hooks';

type Props = {
  image: string,
  name?: string,
};

const SocialNetworkLogin: React.FC<Props> = ({ image, name }) => {
  const color = styles.back;
  const dispatch = useAppDispatch()

  function googleLogin() {
    dispatch(userActions.userGoogleLogin());
  }
  
  return (
    <div
      className={classNames({
      [color]: name === 'github',
      })}
      onClick={googleLogin}
    >
      <img src={image} alt="logo" />
    </div>
  );
};

export default SocialNetworkLogin;