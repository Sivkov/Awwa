import { View, Linking, TouchableOpacity, Image } from 'react-native';
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

  _onPressButtonAddPic = () => {
    this.props.setMode(2)
  }

  _onPressButtonAudio = () => {
    this.props.setMode(3)
    TrackPlayer.play();
  }

  _onPressButtonHome = () => {
    const url = 'https://q-digital.org/?lang=ru';
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  _onPressButtonExit = () =>{
    RNExitApp.exitApp();
  }

  render() {
    return (
      <View style={styles.fixToText}>
          
            <TouchableOpacity onPress={this._onPressButton}>
              <Image style={styles.imageSize} source={require('./images/12.png')} />
            </TouchableOpacity> 

            <TouchableOpacity onPress={this._onPressButtonAddPic}>
              <Image style={styles.imageSize} source={require('./images/13.png')} />
            </TouchableOpacity> 

            <TouchableOpacity onPress={this._onPressButtonAudio}>
              <Image style={styles.imageSize} source={require('./images/14.png')} />
            </TouchableOpacity> 

            <TouchableOpacity onPress={this._onPressButtonHome}>
              <Image style={styles.imageSize} source={require('./images/11.png')} />
            </TouchableOpacity> 

            <TouchableOpacity onPress={this._onPressButtonExit}>
              <Image style={styles.imageSize} source={require('./images/15.png')} />
            </TouchableOpacity> 

      </View>);
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMode: mode => dispatch(setMode(mode))
  }
}


export default connect(null, mapDispatchToProps)(Buttons)
