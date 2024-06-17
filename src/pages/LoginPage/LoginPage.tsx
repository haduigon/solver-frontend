/* eslint-disable */
import styles from '../HomePage/HomePage.module.scss';
import pic from '../../assets/img/panda2.svg'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useState } from 'react';
import { client } from '../../helpers/utils';
import {
  useAppDispatch,
} from '../../app/hooks';
import * as errorActios from '../../features/error';
import { logInWithEmailAndPassword } from '../../firebase/firebase';

const LoginPage = () => {

  const [cridentials, setCridentials] = useState({
    email: '',
    password: '',
  });

  let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const dispatch: any = useAppDispatch();

  function getCridentials(cridential: string, name: string) {
    if (name !== 'email' && name !== 'password') {
      throw Error('This field does not exist');
    }

    setCridentials((state) => ({
      ...state,
      [name]: cridential,
    }));
  }

      console.log(cridentials.email, cridentials.password,'lgn login page');

  async function handleLogin() {



  if (!cridentials.email.match(regexp)) {
    dispatch(errorActios.setError('email'))
    return;
  }
    
    const lgn: any = await logInWithEmailAndPassword(cridentials.email, cridentials.password);
    console.log(lgn, cridentials.email, cridentials.password, 'lgn login page');
    if (lgn.user.accessToken) {
      console.log(lgn.user.accessToken, 'lgn.user.accessToken');
          client('/home', {
      headers: {
        "authorization": lgn.user.accessToken,
      }
    }).then(resp => console.log(resp))
    }
    
    // client('/home', {
    //   headers: {
    //     "authorization": "sjfbvofuf9wr68495628GJHF35",
    //   }
    // }).then(resp => console.log(resp))
  }
 
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
          <Input name='email' type='email' onChange={getCridentials} />
        </div>
        <div className='mb-36'>
        <Input name='password' type='password'onChange={getCridentials}/>
        </div>
        <div >
          <Button name='login' onClick={handleLogin} />
        </div>
      </div>
    </div>
  )
}

export default LoginPage;