import { Slider } from 'react-native';
import { Player } from 'react-native-audio-player-recorder-no-linking';
import React, { Component } from "react";

// Give this a recording object that has a uri.

export const RecordingPlayer = (props) => (
    <Player
    {...props}
    style={{ flex: 1 }}
    //onComplete={this.playerComplete.bind(this)}
    onComplete={()=> console.log("TODO: Add functionality to complete button..")}
    completeButtonText={'Return Home'}
    uri={props.recording.uri}
    showDebug={true}
    showBackButton={true}
    playbackSlider={(renderProps) => {
        return (
        <Slider
            minimimValue={0}
            maximumValue={renderProps.maximumValue}
            onValueChange={renderProps.onSliderValueChange}
            value={renderProps.value}
            style={{
            width: '100%'
            }}
        />
        );
    }}
/>
);