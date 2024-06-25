/* eslint-disable */
// import styles from '../HomePage/HomePage.module.scss';
import pic from '../../assets/img/red2.svg'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useState } from 'react';
// import { client } from '../../helpers/utils';
import {
  useAppDispatch,
  useAppSelector,
} from '../../app/hooks';
import * as errorActions from '../../features/error';
import * as userActions from '../../features/user'
import Loader from '../../components/Loader';
import Message from '../../components/Message';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
import SocialNetworkLoginBox from '../../components/SocialNetworkLoginBox';

const LoginPage = () => {

  const [cridentials, setCridentials] = useState({
    email: '',
    password: '',
  });

  let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const dispatch: any = useAppDispatch();
  const showLoader = useAppSelector(state => state.user.isLoading);
  const [message, setMessage] = useState<null | string>(null)

  // const auth = getAuth();
  // const user = auth.currentUser;
  // onAuthStateChanged(auth, (newUser) => {
  //   if (newUser) {
  //     console.log('okokok', newUser);
      
  //   }
  // })
  // console.log(user, 'serrrr');
  

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
        console.log('undefined user');
        setMessage('Check your cridentials')
        return;
      }
      if (lgn.payload.user.stsTokenManager.accessToken) {
        setMessage('You successfully authorized')
        // client.get('/home', {
        //   headers: {
        //     "authorization": lgn.payload.user.stsTokenManager.accessToken,
        //   }
        // }).then(resp => console.log(resp))
      }
    }
  }

  return (
    <div className={`global-container`}>
      {message && <Message message={message} />}
      <div className={`global-box`}>
        <div>
          <img src={pic} alt='pic' />
        </div>
        <div className={`global-text-block mb-40 mt-40 mainText`}>

          Login page
          {showLoader && <Loader />}
        </div>
        <div className='mb-36'>
          <Input name='email' type='email' onChange={getCridentials} />
        </div>
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