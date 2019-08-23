import React, {Component} from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, TextInput } from 'react-native';
import moment from 'moment';
import { Audio } from 'expo';

export default class Player extends Component {
// REQUIRES NEW STATE "Current Recording" with Recording object, audio location, current word


    // Info component
        // Name ()
        // Date
        // Location

    // Transcription (Scrolling paragraph that can't be touch scrolled) 
    // (Preview based on prop, full thing otherwise) (Highlights currentWord)

    // Player Control Box (Locked within Player box, overlays on transcription when scrolling)
        // Swipable audio navigation (sends updates to state)
        // Audio controls (pause/forward or rewind 15 secs)
        // Delete recording (with alert() are you sure) and Share (using Expo share sheet)
    return() {
        <View>
            <TextInput style={{fontSize: 16, flex: 1}} placeholder={recording.name}/>
            <Text>
                {recording.name}
            </Text>

            <Text>
                {moment(recording.date).format('lll')}
            </Text>

            <Text>
                {recording.location}
            </Text>

        </View>
    };
        



}