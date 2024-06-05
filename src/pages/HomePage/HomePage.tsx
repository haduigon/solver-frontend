/* eslint-disable */
import styles from './HomePage.module.scss';
import pic from '../../assets/img/panda2.svg'
import Button from '../../components/Button';
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div>
          <img src={pic}  alt='pic'/>
        </div>
        <div className={`${styles.textBlock} mb-40 mt-40 mainText`}>
        GET REAL-TIME HELP WITH CODE ERRORS AND DEBUGGING ACROSS VARIOUS LANGUAGES AND PLATFORMS. ENHANCE YOUR DEVELOPMENT WORKFLOW WITH OUR AI-POWERED ASSISTANCE TOOL DESIGNED FOR ALL DEVELOPERS
        </div>
        {/* <div className='mb-36'> */}
          <NavLink to='/login'className='mb-36' >
          <Button name='login' />
          </NavLink>
         
        {/* </div> */}
        <NavLink to='/signup'className='mb-36' >
          <Button name='sign up' />
          </NavLink>
        {/* <div>
        <Button name='sign up' />
        </div> */}
      </div>
    </div>
  )
}

export default HomePage;