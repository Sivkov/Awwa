import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Footer,
  Button,
  Linking,
  } from 'react-native';

import {
  Header,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import React, { Component } from 'react';
import RNExitApp from 'react-native-exit-app';


export default class App extends Component {
   render() {
    return (
      <View>
        <Enter/>
        <Buttons/>
      </View>
    );
  }
}



const Enter: () => React$Node = () => {
  return (
  <>
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Welcome to Awwa Welcome</Text>
        <Text style={styles.sectionDescription}>
          Slide Listen Add images <Text style={styles.highlight}>and</Text> go to Q-digital home site
        </Text>
      </View>
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
  render() {
    return (
      <View style={styles.body}>
          <View>
              <Button
                onPress={this._onPressButton}
                title="Press Me"
              />
           </View>
           <View >
              <Button
                onPress={this._onPressButton}
                title="Audio"
                color="#841584"
              />
           </View>
           <View>
              <Button
                onPress={this._onPressButtonExit}
                title="EXIT"
              />
              <Button
                onPress={this._onPressButtonHome}
                title="Домой"
                color="#841584"
              />
            </View>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.red,
    },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
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
});


