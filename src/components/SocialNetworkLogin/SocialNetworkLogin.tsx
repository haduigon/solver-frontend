import styles from './SocialNetworkLogin.module.scss';
import classNames from 'classnames';

type Props = {
  image: string,
  name?: string,
};

const SocialNetworkLogin: React.FC<Props> = ({ image, name }) => {
  const color = styles.back;
  
  return (
    <div className={classNames({
      [color]: name === 'github',
    })}>
      <img src={image} alt="logo" />
    </div>
  );
};

export default SocialNetworkLogin;