import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Slider
} from "react-native";
//"import {selectRecording} from '../actions/index';
import Collapsible from "react-native-collapsible";
import { Cell, Separator, TableView } from "react-native-tableview-simple";
import moment from "moment";
//import {Recorder, Player} from 'react-native-audio-player-recorder-no-linking';
import Accordion from 'react-native-collapsible/Accordion';
import { RecordingPlayer } from './player';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
];

class RecordingList extends Component {

  createListItems() {
    return this.props.recordings.map(recording => recording);
  }

  state = {
    activeSections: [],
  };

  _renderSectionTitle = section => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  _renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.name}</Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.content}>
        {
            <RecordingPlayer recording={section}/>
        }
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <Accordion
        sections={this.createListItems()}
        activeSections={this.state.activeSections}
        renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
    );
  }
}

/*class RecordingList extends Component {
  createListItems() {
    return this.props.recordings.map(recording => recording);
  }
  render() {

  };
   render() {
     return (
      <FlatList
        data={this.createListItems()}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        renderItem={({ item, separators }) => (
          <Cell
            cellStyle="Basic"
            title={item.name}
            contentContainerStyle={{ alignItems: "flex-start", height: 45 }}
            var isCollapsed = {false}


            cellContentView={
                        // Collapsable Play Box goes here
                         <Collapsible collapsed={this.isCollapsed}>
                         <Player
    style={{ flex: 1 }}
    //onComplete={this.playerComplete.bind(this)}
    onComplete={()=> console.log("TODO: Add functionality to complete button..")}
    completeButtonText={'Return Home'}
    uri={item.uri}
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
</Collapsible>
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
} */

function mapStateToProps(state) {
  return {
    recordings: state.recordings
  };
}

export default connect(mapStateToProps)(RecordingList);
