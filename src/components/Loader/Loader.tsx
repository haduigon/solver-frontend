import loaderImg from '../../assets/img/Loader.svg';
import styles from './Loader.module.scss';
import classNames from 'classnames';

type Props = {
  rotate?: boolean
};

const Loader: React.FC<Props> = ({ rotate = true }) => {
  // const img = '../'

  return (
    <div className={classNames(styles.resetButton ,{
      [styles.loaderBox]: rotate
    })}>
      <img 
        src={loaderImg} 
        alt='loader' 
        className={classNames({
          [styles.rotate]: rotate
        })}
      />
    </div>
  );
};

export default Loader;