import React, {Component} from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, TextInput } from 'react-native';
//"import {selectRecording} from '../actions/index';
import Collapsible from 'react-native-collapsible';
import { Cell, Separator, TableView } from "react-native-tableview-simple";
import moment from 'moment';

export default class RecordingList extends Component {

		createListItems() {
			return this.props.recordings.map((recording) => 
				recording
			);
		}
    render() {
        return(<FlatList
						data= {this.createListItems()}
						
            keyExtractor={(item, index) => item.id}
						renderItem={({ item, separators }) => (
     		    	<Cell
        				//cellStyle="Basic"
								title={item.name}
								//contentContainerStyle={{ alignItems: "flex-start", height: 45 }}
								
								/*
								cellContentView={
									// Collapsable Play Box goes here
								}
								*/ 
								onPress={console.log}
        				onHighlightRow={separators.highlight}
        				onUnHighlightRow={separators.unhighlight}
      				/>
    				)}
    				ItemSeparatorComponent={({ highlighted }) => (
      				<Separator isHidden={highlighted} />
    				)}
          />);
    }

}
    					
