import styles from './SocialNetworkLogin.module.scss';
import classNames from 'classnames';
import * as userActions from '../../features/user';
import { useAppDispatch } from '../../app/hooks';
// import FacebookLogin from 'react-facebook-login';
// import facebookPicture from '../../assets/img/fb.svg';

// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

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

  // const handleFbCall = (response: any) => {
  //   console.log(response, 'fbcall response');
  // }

  // if (name === 'facebook') {
  //   return (
  //     <FacebookLogin
  //       // buttonStyle={{ padding: "6px" }}
  //       appId="1253536009352522"  // we need to get this from facebook developer console by setting the app.
  //       autoLoad={false}
  //       fields="name,email,picture"
  //       callback={handleFbCall}
  //       // render={<image src={} />}
  //       // icon={<>{facebookPicture}</>}
  //     />
  //   );
  // }

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