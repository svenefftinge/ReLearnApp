// Master reducer
import {combineReducers} from 'redux';
import RecordingReducer from './reducer-recordings';
import firebaseReducer from 'react-redux-firebase/lib/reducer';
import firestoreReducer from 'redux-firestore';

const allReducers = combineReducers({
    recordings: RecordingReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
});

export default allReducers;