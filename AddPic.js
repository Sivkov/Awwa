import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import ImageSlider from 'react-native-image-slider';


export default class AddPIc extends React.Component {

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

    return(
     (<ImageSlider images={this.state.dataSource}/>)
      );
  }
}
