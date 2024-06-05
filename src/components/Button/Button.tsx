/* eslint-disable */
import styles from './Button.module.scss';

type Props = {
  name: string,
}

const Button: React.FC<Props> = ({ name }) => {
  return (
    <div className={`${styles.btn} mainText`}>
      {name}
    </div>
  )
}

export default Button;