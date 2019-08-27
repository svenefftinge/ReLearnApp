import React, {Component} from 'react';
import { DocumentPicker } from 'expo';
import {selectUser} from '../actions/index.js';

export async function uploadRecording() {
  let result = await DocumentPicker.getDocumentAsync({type: '*/*'});

  if (!result.cancelled) {
    //upload function(result.uri);
  }
}

//function uploadRecording() {
//    const recording = DocumentPicker.getDocumentAsync({type: '*/*'});
//
//    return <h1>{recording}</h1>;
// }
