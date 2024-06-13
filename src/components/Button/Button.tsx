/* eslint-disable */
import styles from './Button.module.scss';

type Props = {
  name: string,
  onClick?: (trigger: boolean) => void,
}

const Button: React.FC<Props> = ({ name, onClick = () => {}}) => {
  return (
    <div className={`${styles.btn} mainText`} onClick={() => onClick(true)}>
      {name}
    </div>
  )
}

export default Button;