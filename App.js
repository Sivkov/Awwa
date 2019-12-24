import {
  StyleSheet,
  View,
  Text,
 
  } from 'react-native';

import {  Colors, 
} from 'react-native/Libraries/NewAppScreen';

import React from 'react';
import Player from './Player'
import Slider from './Slider'
import { CAPABILITY_PAUSE, CAPABILITY_PLAY, CAPABILITY_SEEK_TO, CAPABILITY_STOP
} from 'react-native-track-player';
import { Buttons } from './Buttons';

export default class App extends React.Component {
   render() {
        return (
          <View style={styles.body}>  
            <Text style={styles.sectionTitle}>Welcome to Awwa</Text>
            <Slider />
            <Player/>
            <Buttons/>
          </View>
        );
  }
}




export const styles = StyleSheet.create({
  view: {
    flex: 1,
    right: 0,
  },
  body: {
    textAlign: 'center',
    flex: 1
    },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: "center"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
      marginTop: 10,
      marginBottom: 10,
      width: 25
  },
    fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});




