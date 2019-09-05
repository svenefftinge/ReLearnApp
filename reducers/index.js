// Master reducer
import {combineReducers} from 'redux';
import RecordingReducer from './reducer-recordings';

const allReducers = combineReducers({
    recordings: RecordingReducer
});

export default allReducers;