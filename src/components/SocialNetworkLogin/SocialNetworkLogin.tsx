/* eslint-disable */
import styles from './SocialNetworkLogin.module.scss';
import classNames from 'classnames';
import * as userActions from '../../features/user';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
// import FacebookLogin from 'react-facebook-login';
import facebookPicture from '../../assets/img/fb.svg';
// import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';

// import { useEffect } from 'react';
// import FB from 'fb';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  image: string,
  name: string,
};

// const fbIcon = () => {
//   return (
//     <div>

//     </div>
//   )
// }


const SocialNetworkLogin: React.FC<Props> = ({ image, name }) => {
  const color = styles.back;
  const dispatch = useAppDispatch();

  const navigate = useNavigate()

  function googleLogin() {
    dispatch(userActions.userGoogleLogin());
  }
  const { fbAuthToken } = useAppSelector(state => state.user);
  const handleFbCall = function(response: any) {
    console.log('is it called at all');
    console.log(response, 'fb response');
    dispatch(userActions.setFbAuthToken(response.accessToken))
    navigate('/chat')
  }
  console.log(fbAuthToken, 'fbcall response');
  
  useEffect(() => {
    if (fbAuthToken.length > 0) {
      navigate('/chat')
    }
  }, [])

  if (name === 'facebook') {
    return (
      <FacebookLogin
        // buttonStyle={{ padding: "6px" }}
        appId="1253536009352522"  // we need to get this from facebook developer console by setting the app.
        autoLoad={false}
        fields="name"
        callback={handleFbCall}
        // onClick={handleFbCall}
        render={
          renderProps => (
            <div onClick={() => {
              console.log('test click');
              handleFbCall
              renderProps.onClick();
            }}>
              <img src={facebookPicture} alt="Facebook icon" />
            </div>
          )
        }
        // cssClass={styles.icon} // Apply custom styles using this prop
// 
        // icon={}
        // redirectUri='/chat'
      />
    );
  }

  return (
    <div
      className={classNames({
        [color]: name === 'github',
      })}
      onClick={googleLogin}
    >
      <img src={image} alt="logo" />
    </div>
  );
};

export default SocialNetworkLogin;