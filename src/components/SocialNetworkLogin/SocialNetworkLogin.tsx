/* eslint-disable */
import styles from './SocialNetworkLogin.module.scss';
import classNames from 'classnames';
import * as userActions from '../../features/user';
import { useAppDispatch } from '../../app/hooks';
// import FacebookLogin from 'react-facebook-login';
import facebookPicture from '../../assets/img/fb.svg';
// import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';

// import { useEffect } from 'react';
// import FB from 'fb';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

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

  function googleLogin() {
    dispatch(userActions.userGoogleLogin());
  }

  const handleFbCall = (response: any) => {
    console.log(response, 'fbcall response');
  }

  if (name === 'facebook') {
    return (
      <FacebookLogin
        // buttonStyle={{ padding: "6px" }}
        appId="1253536009352522"  // we need to get this from facebook developer console by setting the app.
        autoLoad={false}
        fields="name,email,picture"
        callback={handleFbCall}
        render={renderProps => (
          <div onClick={renderProps.onClick} >
            <img src={facebookPicture} alt="Facebook icon" />
            
          </div>
        )}
        // cssClass={styles.icon} // Apply custom styles using this prop
// 
        // icon={<img src={facebookPicture} alt="Facebook icon" className={styles.icon} />}
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