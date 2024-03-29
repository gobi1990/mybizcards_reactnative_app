import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {RootState} from '../store/store';

type AppDispatch = ThunkDispatch<RootState, null, AnyAction>;

export default AppDispatch;
