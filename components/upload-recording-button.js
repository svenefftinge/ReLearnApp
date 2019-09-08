import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addRecordingFile } from '../actions/index.js';
import { Button } from 'react-native';
import { connect } from 'react-redux';

class UploadRecordingButton extends Component {
    render() {
        return (
            <Button
                onPress={()=>this.props.addRecordingFile()}
                title="Add"
                color="#007AFF"
            />
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ addRecordingFile: addRecordingFile }, dispatch)
}

export default connect(null, matchDispatchToProps)(UploadRecordingButton);