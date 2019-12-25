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
import Buttons from './Buttons'
import { connect } from 'react-redux'


class App extends React.Component {
   render() {
        return (
          <View style={styles.body}>  
            <Text style={styles.sectionTitle}>Welcome to Awwa</Text>
            <Text>{this.props.mode.mode}</Text>
{/*
            {this.props.mode.mode== "audio" ? < Player />  :  '' }
            {this.props.mode.mode== "slider" ? < Slider />  :  '' }
            {this.props.mode.mode== "add" ? <AddPic/> :  '' }

*/}
            <Buttons/>
          </View>
        );
  }
}


const mapStateToProps = store => {
  console.log(store) 
  return {
    mode: store.mode 
  }
}
  
export default connect(mapStateToProps, null )(App)


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




