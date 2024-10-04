/* eslint-disable */
import { Link, useNavigate } from 'react-router-dom';
import styles from './HistoryPage.module.scss';
import backButton from '../../assets/img/backButton.svg'
import {
  useEffect,
} from 'react';
import * as appActions from '../../features/app';
import {
  useAppDispatch,
  useAppSelector
} from '../../app/hooks';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const HistoryPage = () => {
  const dispatch = useAppDispatch();
  const app = useAppSelector(state => state.app);

  useEffect(() => {
    onAuthStateChanged(getAuth(), () => dispatch(appActions.getHistory()));
    dispatch(appActions.getHistory())
    
  }, []);
  const navigate = useNavigate();
  // console.log('historypage',  app)
  return (
    <div className={`${styles.box}`}>
      <div className={`${styles.item}`}>
        <Link to='' className={`menu-text`}>History</Link>
        <label className={`${styles.backButtonBox}`} onClick={() => navigate(-1)}>
          <div className={`${styles.back}`} >
            <div className={`menu-text`}>Back</div>
          </div>
          <div className={`${styles.polygonBox}`}>
            <img src={backButton} alt='back button' style={{
              display: 'block'
            }} />
          </div>
        </label>
      </div>

      {app.history.length > 0 && (
        app.history.map((dialog: any) => 
          <div className={`${styles.item}`} key={dialog.id}>
            <Link to={`/history/${dialog.id}`} className={`menu-text`} onClick={() => dispatch(appActions.getDialogAsynk(dialog.id))}>{dialog.id}</Link>
          </div>
        )
      )}
    </div>
  )
}

export default HistoryPage;