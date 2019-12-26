import InstagramLogin from 'react-native-instagram-login'
import store from 'react-native-simple-store'
import React, { Component } from 'react';
import {
     View, TouchableOpacity, Text,  StyleSheet
} from 'react-native';
import { styles } from './App';


export default class Login extends Component {


    render () { return (

        <View>
            <TouchableOpacity onPress={()=> this.instagramLogin.show()}>
                <Text style={styles.highlight}>Login vue Instagramm</Text>
            </TouchableOpacity>
            <InstagramLogin
                ref={ref => (this.instagramLogin = ref)}
                appId='1456913984461207'
                appSecret='e99c5e59302abac657d61e09cc5af3f3'
                redirectUrl='http://localhost:8081/'
                scopes={['user_profile', 'user_media']}
                onLoginSuccess={ ()=>this.instagramLogin.hide() }
                onLoginFailure={() => this.instagramLogin.hide()}
                />
              
        </View>
        )   
    }

}

 
setIgToken = async (data) => {
    await store.save('igToken', data.access_token)
    await store.save('igUserId', data.user_id)
    this.setState({ igToken: data.access_token, igUserId: data.user_id})
    
}



