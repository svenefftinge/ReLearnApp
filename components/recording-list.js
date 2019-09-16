import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput
} from "react-native";
//"import {selectRecording} from '../actions/index';
import Collapsible from "react-native-collapsible";
import { Cell, Separator, TableView } from "react-native-tableview-simple";
import moment from "moment";
import {Recorder, Player} from 'react-native-audio-player-recorder-no-linking';

class RecordingList extends Component {
  createListItems() {
    return this.props.recordings.map(recording => recording);
  }
  render() {
    return (
      <FlatList
        data={this.createListItems()}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        renderItem={({ item, separators }) => (
          <Cell
            //cellStyle="Basic"
            title={item.name}
            //contentContainerStyle={{ alignItems: "flex-start", height: 45 }}


            cellContentView={
                        // Collapsable Play Box goes here
                         <Player
    style={{ flex: 1 }}
    onComplete={this.playerComplete.bind(this)}
    completeButtonText={'Return Home'}
    uri={AUDIO_CLIP_URL}
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
            }

            onPress={console.log}
            onHighlightRow={separators.highlight}
            onUnHighlightRow={separators.unhighlight}
          />
        )}
        ItemSeparatorComponent={({ highlighted }) => (
          <Separator isHidden={highlighted} />
        )}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    recordings: state.recordings
  };
}

export default connect(mapStateToProps)(RecordingList);
