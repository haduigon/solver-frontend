/* eslint-disable */
import { Link, useNavigate } from 'react-router-dom';
import styles from './HistoryPage.module.scss';
import backButton from '../../assets/img/backButton.svg'
import {
  useEffect,
  // useState
} from 'react';
// import { client } from '../../helpers/utils';
import * as appActions from '../../features/app';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const HistoryPage = () => {
  // const [history, setHistory] = useState([]);
  const dispatch = useAppDispatch();
  const app = useAppSelector(state => state.app);

  useEffect(() => {
    // client.get('/history/1', {}).then(resp => (setHistory(resp.data), console.log(resp, 'ololo')));
    dispatch(appActions.getHistory());
  }, []);
  const navigate = useNavigate();
  console.log(app.history, 'history');
  

  return (
    <div className={`${styles.box}`}>
      <div className={`${styles.item}`}>
        <Link to='/profile' className={`${styles.text}`}>History</Link>
        <label className={`${styles.backButtonBox}`} onClick={() => navigate(-1)}>
          <div className={`${styles.back}`} >
            <div className={`${styles.text}`}>Back</div>
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
          <div className={`${styles.item}`} key={dialog.date}>
            <Link to='/history/2' className={`${styles.text}`}>{dialog.request}</Link>
          </div>
        )
      )}
    </div>
  )
}

export default HistoryPage;