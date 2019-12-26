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
import AddPic from './AddPic'
import Buttons from './Buttons'
import Login from './Auth'

import { connect } from 'react-redux'


class App extends React.Component {
   render() {
        return (
          <View style={styles.body}>  
            <Text style={styles.sectionTitle}>Welcome to Awwa</Text>
            { this.props.mode.mode == 0 ? (<Login/>)  : null }
            { this.props.mode.mode == 1 ? (<Slider/>)  : null }
            { this.props.mode.mode == 2 ? (<AddPic/>)  : null }
            { this.props.mode.mode == 3 ? (<Player/>)  :  null }
            
            <View style={styles.footer}><Buttons/>
            </View>
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
    fontWeight: '900',
    fontSize: 32,
    color: "white",
    textAlign: "center",
    backgroundColor: "black",
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
    footer: {position: 'absolute', 
    left: 0, 
    right: 0, 
    bottom: 0
  },

});




/*  <ImageBackground source={...} style={{width: '100%', height: '100%'}}>
    <Text>Inside</Text>
  </ImageBackground>*/