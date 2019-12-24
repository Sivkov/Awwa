import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking,
  Footer,
  } from 'react-native';

import {
  Header, 
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import React, { Component } from 'react';
import RNExitApp from 'react-native-exit-app';
import Player from './Player'
import Slider from './Slider'
import TrackPlayer, { CAPABILITY_PAUSE, CAPABILITY_PLAY, CAPABILITY_SEEK_TO, CAPABILITY_STOP
} from 'react-native-track-player';

export default class App extends Component {
   render() {
        return (
          <View style={styles.body}>
            <Slider />
            <Enter/>
            <Player/>
            <Buttons/>
          </View>
        );
  }
}



const Enter: () => React$Node = () => {
  return (
  <>
    <View>
        <Text style={styles.sectionTitle}>Welcome to Awwa</Text>
    </View>
   </>
  );
};

class Buttons extends Component {
  _onPressButton() {
    alert('You tapped the button!')
   }

   _onPressButtonHome() {
     const url = 'https://q-digital.org/?lang=ru';
     Linking.openURL(url).catch(err => console.error('An error occurred', err));
   }

   _onPressButtonExit() {
        RNExitApp.exitApp();
   }

   _onPressButtonAudio() {
            alert ("ммузыку")
            TrackPlayer.play();
   }
  render() {
    return (
    
      <View style={styles.fixToText}>
              <Button 
                onPress={this._onPressButton}
                title="Press Me"
              />
         
              <Button
                onPress={this._onPressButtonAudio}
                title="Audio"
              />
         
              <Button
                onPress={this._onPressButtonExit}
                title="EXIT"
              />

              <Button
                onPress={this._onPressButtonHome}
                title="Q-digital"
              />
           
     </View>
    );
  }
}

const styles = StyleSheet.create({
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




