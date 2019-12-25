import { View, Button, Linking } from 'react-native';
import React from 'react';
import RNExitApp from 'react-native-exit-app';
import TrackPlayer from 'react-native-track-player';
import { styles } from './App';
import { connect } from 'react-redux'
import { setMode } from './actions/ImageActions'


class Buttons extends React.Component {
  _onPressButton = () => {
    this.props.setMode(1)
  }

  _onPressButtonHome = () => {
    const url = 'https://q-digital.org/?lang=ru';
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  _onPressButtonExit = () =>{
    RNExitApp.exitApp();
  }

  _onPressButtonAudio = () => {
    this.props.setMode(3)
    TrackPlayer.play();
  }

  _onPressButtonAddPic = () => {
    this.props.setMode(2)
  }

  render() {
    return (
      <View style={styles.fixToText}>
        <Button onPress={this._onPressButton} title="Slider" />
        <Button onPress={this._onPressButtonAddPic} title="Load Pics" />
        <Button onPress={this._onPressButtonAudio} title="Audio" />
        <Button onPress={this._onPressButtonHome} title="to Q-digital" />
        <Button onPress={this._onPressButtonExit} title="EXIT" />
      </View>);
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMode: mode => dispatch(setMode(mode))
  }
}

export default connect(null, mapDispatchToProps)(Buttons)