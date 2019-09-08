
import React from 'react';
import { View, Button, Text } from 'react-native';
import Expo from 'expo';
import * as Permissions from 'expo-permissions';
import * as Font from 'expo-font';
import * as FileSystem from 'expo-file-system';
import { Audio } from 'expo-av';
import * as Asset from 'expo-asset';
import SlidingUpPanel from 'rn-sliding-up-panel';

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#232323',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 20,
        paddingHorizontal: 4,
        height: 20,

    }
}
// 600, 150

const top = 600;
const bottom = 150;

export default class Recorder extends React.Component {
    render() {
        return (
            <SlidingUpPanel snappingPoints={[top, bottom]} draggableRange={{ top: top, bottom: bottom }} ref={c => this._panel = c}>
                <View style={styles.container}>
                    <Button title='Show panel' onPress={() => this._panel.show()} />
                    <Text>Here is the content inside panel</Text>
                    <Button title='Hide' onPress={() => this._panel.hide()} />
                </View>
            </SlidingUpPanel>
        )
    }
}

