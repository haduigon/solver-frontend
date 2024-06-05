/* eslint-disable */
import styles from '../HomePage/HomePage.module.scss';
import pic from '../../assets/img/panda2.svg'
import Button from '../../components/Button';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div>
          <img src={pic}  alt='pic'/>
        </div>
        <div className={`${styles.textBlock} mb-40 mt-40 mainText`}>
          Login page 
        </div>
        <div className='mb-36'>
          <Button name='email' />
        </div>
        <div className='mb-36'>
        <Button name='password' />
        </div>
        <div >
        <Button name='login' />
        </div>
      </div>
    </div>
  )
}

export default LoginPage;