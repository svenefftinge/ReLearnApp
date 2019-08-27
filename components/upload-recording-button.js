import React, {Component} from 'react';
import { DocumentPicker } from 'expo';
import {selectUser} from '../actions/index.js';
import { Button } from 'react-native';

export default class UploadRecordingButton extends Component {
    render() {
        return(
            <Button
                onPress={()=>uploadRecording()}
                title="Add"
                color="#007AFF"
            />
        )
    }
}
async function uploadRecording() {
  let result = await DocumentPicker.getDocumentAsync({type: '*/*'});

  if (!result.cancelled) {
    //upload function(result.uri);
  }
}