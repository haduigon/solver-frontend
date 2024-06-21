/* eslint-disable */
import styles from '../HomePage/HomePage.module.scss';
import pic from '../../assets/img/panda2.svg'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as userActions from '../../features/user';
import * as errorActions from '../../features/error';
import Loader from '../../components/Loader';

const SignUpPage = () => {

  const [cridentials, setCridentials] = useState({
    email: '',
    password: '',
  });

  let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const dispatch: any = useAppDispatch();
  const showLoader = useAppSelector(state => state.user.isLoading);
  function getCridentials(cridential: string, name: string) {

    if (name !== 'email' && name !== 'password') {
      throw Error('This field does not exist');
    }

    setCridentials((state) => ({
      ...state,
      [name]: cridential,
    }));
  }

  async function handleUserCreation() {
    if (!cridentials.email.match(regexp)) {
      dispatch(errorActions.setEmailError(true));
    }

    if (cridentials.password.length < 6) {
      dispatch(errorActions.setPasswordError(true));
    }
    else {
      const lgn: any = await dispatch(userActions.userCreateEmailPassword(cridentials));
      if (!Object.hasOwn(lgn.payload, 'user')) {
        console.log('undefined user');
        return;
      }
      if (lgn.payload.user.stsTokenManager.accessToken) {
        console.log(lgn.payload.user, 'lgn.payload.user');

      }
    }
  }

  console.log(cridentials);


  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div>
          <img src={pic} alt='pic' />
        </div>
        <div className={`${styles.textBlock} mb-40 mt-40 mainText`}>
          Sign up page
          {showLoader && <Loader />}
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
          <Button name='create user' onClick={handleUserCreation} />
        </div>
      </div>
    </div>
  )
}

export default SignUpPage;