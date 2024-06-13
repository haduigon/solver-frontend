/* eslint-disable */
import styles from '../HomePage.module.scss';
import pic from '../../../assets/img/panda2.svg'
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { useState } from 'react';

const SignUpPage = () => {

  const [cridentials, setCridentials] = useState({
    email: '',
    password: '',
  });

  function getCridentials(cridential: string, name: string) {

    if (name !== 'email' && name !== 'password') {
      throw Error('This field does not exist');
    }

    setCridentials((state) => ({
      ...state,
      name: cridential,
    }));
  }

  console.log(cridentials);
  

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div>
          <img src={pic}  alt='pic'/>
        </div>
        <div className={`${styles.textBlock} mb-40 mt-40 mainText`}>
          Sign up page 
        </div>
        <div className='mb-36'>
          <Input 
            name='email' 
            type='email'
            onChange={getCridentials}
          />
        </div>
        <div className='mb-36'>
        <Input 
          name='password' 
          type='password'
          onChange={getCridentials}
        />
        </div>
        <div >
        <Button name='create user' />
        </div>
      </div>
    </div>
  )
}

export default SignUpPage;