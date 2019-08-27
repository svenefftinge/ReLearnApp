import React, {Component} from 'react';
import { DocumentPicker } from 'expo';
import {addRecording} from '../actions/index.js';
import { Button } from 'react-native';
import { connect } from 'http2';

class UploadRecordingButton extends Component {
    render() {
        return(
            <Button
                //onPress={()=>uploadRecording()}
                onPress={addToListActionCreator()}
                title="Add"
                color="#007AFF"
            />
        )
    }
}

function addToListActionCreator() {

}
async function uploadRecording() {
  let result = await DocumentPicker.getDocumentAsync({type: '*/*'});

  if (!result.cancelled) {
    //upload function(result.uri);
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addRecording: addRecording}, dispatch)
}

export default connect(matchDispatchToProps)(UserList);