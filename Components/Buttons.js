import { View, Button, Linking } from 'react-native';
import React from 'react';
import RNExitApp from 'react-native-exit-app';
import TrackPlayer from 'react-native-track-player';
import { styles } from './App';

export class Buttons extends React.Component {
  _onPressButton() {
    alert('You tapped the button!');
  }
  _onPressButtonHome() {
    const url = 'https://q-digital.org/?lang=ru';
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }
  _onPressButtonExit() {
    RNExitApp.exitApp();
  }
  _onPressButtonAudio() {
    alert("ммузыку");
    TrackPlayer.play();
  }
  render() {
    return (<View style={styles.fixToText}>
      <Button onPress={this._onPressButton} title="Press" />

      <Button onPress={this._onPressButtonAudio} title="Audio" />

      <Button onPress={this._onPressButtonExit} title="EXIT" />

      <Button onPress={this._onPressButtonHome} title="Q-digital" />

    </View>);
  }
}
