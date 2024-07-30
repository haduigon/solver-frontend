import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import errorReducer from '../features/error';
import userReducer from '../features/user';
import appReducer from '../features/app';
import * as appActions from '../features/app';
// import { useAppSelector } from './hooks';

export const store = configureStore({
  reducer: {
    error: errorReducer,
    user: userReducer,
    app: appReducer,
  },
});

store.dispatch(appActions.getHistory());
// const app = useAppSelector(state => state.app);
// console.log(app);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
