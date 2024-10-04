/* eslint-disable */
import pic from '../../assets/img/red2.svg'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../app/hooks';
import * as errorActions from '../../features/error';
import * as userActions from '../../features/user'
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import SocialNetworkLoginBox from '../../components/SocialNetworkLoginBox';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import styles from "./LoginPage.module.scss";
// import classNames from 'classnames';

const LoginPage = () => {
  const [cridentials, setCridentials] = useState({
    email: '',
    password: '',
  });

  let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const dispatch: any = useAppDispatch();
  const showLoader = useAppSelector(state => state.user.isLoading);
  const [message, setMessage] = useState<null | string>(null);
  const navigate = useNavigate();

  const listenAuth = onAuthStateChanged(getAuth(), (user2) => {
    if (user2) {
      navigate('/chat');
    }

    return () => {
      listenAuth();
    }
  });

    function getCridentials(cridential: string, name: string) {
      if (name !== 'email' && name !== 'password') {
        throw Error('This field does not exist');
      }

      setCridentials((state) => ({
        ...state,
        [name]: cridential,
      }));
    }

  async function handleLogin() {
    if (!cridentials.email.match(regexp)) {
      dispatch(errorActions.setEmailError(true));
    }

    if (cridentials.password.length < 6) {
      dispatch(errorActions.setPasswordError(true));
    }
    else {
      const lgn: any = await dispatch(userActions.userAuthEmailPassword(cridentials));
      if (!Object.hasOwn(lgn.payload, 'user')) {
        setMessage('Check your cridentials');
        return;
      }
      if (lgn.payload.user.stsTokenManager.accessToken) {
        setMessage('You successfully authorized');

        setTimeout(() => navigate('/chat'), 1000);

      }
    }
  }

  return (
    <div className={`global-container`}>
      {message && <Message message={message} />}
      <div className={`global-box`}>
        <div className="imgBox">
          <img src={pic} alt='pic' />
        </div>
        <div className={`global-text-block ${styles.header} mainText`}>

          Login page
          {showLoader && <Loader />}
        </div>
        <div className='mb-36'>
          <Input name='email' type='email' onChange={getCridentials} />
        </div>
        {}
        <div className='mb-36'>
          <Input name='password' type='password' onChange={getCridentials} />
        </div>
        <div >
          <Button name='login' onClick={handleLogin} />
        </div>

        <div className='mt-40'>
          <SocialNetworkLoginBox />
        </div>
      </div>

    </div>
  )
}

export default LoginPage;