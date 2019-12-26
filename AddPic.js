import React from 'react';
import { ActivityIndicator, View  } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import { connect } from 'react-redux'
import { setSlider } from './actions/ImageActions'


class AddPic extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource: ""}
  }

  componentDidMount(){
    return fetch('http://testimages.osora.ru:86/')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return ( this.props.setSlider( this.state.dataSource ) )
    }
}

  const mapDispatchToProps = dispatch => {
    return {
      setSlider:files => dispatch(setSlider(files))
    }
  }
  

export default connect (null, mapDispatchToProps)(AddPic)

