import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Constants from 'expo-constants';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Slider
} from "react-native";
import moment from "moment";
import Accordion from 'react-native-collapsible/Accordion';
import { RecordingPlayer } from './player';
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
*/

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

function mapStateToProps(state) {
  return {
    recordings: state.recordings
  };
}

export default connect(mapStateToProps)(RecordingList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingBottom: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '500',
  },
  content: {
    padding: 0,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
