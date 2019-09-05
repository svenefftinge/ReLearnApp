import React, {Component} from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { bindActionCreators } from 'redux';
import {addRecording} from '../actions/index.js';
import { Button } from 'react-native';
import { connect } from 'react-redux';

class UploadRecordingButton extends Component {
    render() {
        return(
            <Button
                //onPress={()=>uploadRecording()}
                //onPress={()=>addToListActionCreator()}
                onPress={()=>this.props.addRecording(
                    {
                        eventID: "0",
                        id: "12345abacca",
		    	        name: "White Hall",
	    	        	date: new Date('1995-12-17T03:24:01'),
		            	status: "recording",
                        recordings: 5,
                        location: "White Hall",
                        localTranscription: "The lazy cat jumped over the dog.",
                        serverTranscription: ""
                    }
                )}
                title="Add"
                color="#007AFF"
            />
        )
    }
}

function addToListActionCreator() {
    return[
        {
            eventID: "0",
            id: "12345abacca",
			name: "White Hall",
			date: new Date('1995-12-17T03:24:01'),
			status: "recording",
            recordings: 5,
            location: "White Hall",
            localTranscription: "The lazy cat jumped over the dog.",
            serverTranscription: ""
        }

    ]

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

export default connect(null, matchDispatchToProps)(UploadRecordingButton);