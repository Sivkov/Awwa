import { View, Button, Linking, Text } from 'react-native';
import React from 'react';
import ImageSlider from 'react-native-image-slider';
import { connect } from 'react-redux'

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state= { display: this.props.images.images }
  }

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