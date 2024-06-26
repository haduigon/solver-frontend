/* eslint-disable */
// import styles from './HomePage.module.scss';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import pic from '../../assets/img/panda2.svg'
import Button from '../../components/Button';
import { NavLink, useNavigate } from 'react-router-dom'
// import { useEffect } from 'react';

const HomePage = () => {

    const navigate = useNavigate();

  const listenAuth = onAuthStateChanged(getAuth(), (user2) => {
    if (user2) {
      navigate('/chat');
    }

    return () => {
      listenAuth();
    }
  });

  // excersises

  
  
  



  return (
    <div className={`global-container`}>
      <div className={`global-box`}>
        <div>
          <img src={pic}  alt='pic'/>
        </div>
        <div className={`global-text-block mb-40 mt-40 mainText`}>
        GET REAL-TIME HELP WITH CODE ERRORS AND DEBUGGING ACROSS VARIOUS LANGUAGES AND PLATFORMS. ENHANCE YOUR DEVELOPMENT WORKFLOW WITH OUR AI-POWERED ASSISTANCE TOOL DESIGNED FOR ALL DEVELOPERS
        </div>
          <NavLink to='/login'className='mb-36' >
          <Button name='login' />
          </NavLink>
        <NavLink to='/signup'className='mb-36' >
          <Button name='sign up' />
          </NavLink>
      </div>
    </div>
  )
}

export default HomePage;