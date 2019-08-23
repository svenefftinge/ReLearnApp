import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import RecordingList from '../components/recording-list';

function mapStateToProps(state) {
    return {
        recordings: state.recordings
    };
}

export default connect(mapStateToProps)(RecordingList);