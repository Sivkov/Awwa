import { View, Button, Linking, Text } from 'react-native';
import React from 'react';
import ImageSlider from 'react-native-image-slider';
import { connect } from 'react-redux'

class Slider extends React.Component {

    render() {
      
      return ( <ImageSlider images={[ ...this.props.images.images  ]}/>
      
      
      )
    }
}

const mapStateToProps = store => {
  console.log(store) 
  return {
    images: store.images 
  }
}
  
export default connect(mapStateToProps, null )(Slider)