import React from 'react';
import { View , Button, StyleSheet} from 'react-native';
import TrackPlayer, {
    CAPABILITY_PAUSE, CAPABILITY_PLAY, CAPABILITY_SEEK_TO,
    CAPABILITY_STOP, CAPABILITY_SKIP_TO_PREVIOUS, CAPABILITY_SKIP_TO_NEXT} from 'react-native-track-player';
import { styles } from './App';


export default class Player extends React.Component {
    async componentDidMount() {

        await TrackPlayer.setupPlayer({});
        TrackPlayer.updateOptions({
          
        capabilities: [CAPABILITY_PAUSE, CAPABILITY_PLAY, CAPABILITY_SEEK_TO,
    CAPABILITY_STOP, CAPABILITY_SKIP_TO_PREVIOUS, CAPABILITY_SKIP_TO_NEXT],
            compactCapabilities: [CAPABILITY_PLAY, CAPABILITY_PAUSE, CAPABILITY_STOP, CAPABILITY_SEEK_TO],
            notificationCapabilities: [CAPABILITY_PAUSE, CAPABILITY_PLAY, CAPABILITY_SEEK_TO,
    CAPABILITY_STOP, CAPABILITY_SKIP_TO_PREVIOUS, CAPABILITY_SKIP_TO_NEXT],
            
            stopWithApp: true,
            pauseWithApp: true
           
        });
        await TrackPlayer.add({
            id: '1',
            url: 'http://tegos.kz/new/mp3_full/Luis_Fonsi_feat._Daddy_Yankee_-_Despacito.mp3', 
            title: 'Despacito',
            artist: 'Luis Fonsi Feat. Daddy Yankee',
        });

        await TrackPlayer.add({
        id: '2',
        url: 'http://tegos.kz/new/mp3_full/Imagine_Dragons_and_Khalid_-_Thunder_Young_Dumb_and_Broke.mp3', 
        title: 'Despaasdasdcito',
        artist: 'Luis Fonsi Feat. Dadasdasddy Yankee',
            
        });

   
    }
    render() {
      
      return (
         <View style={styles.fixToText} >
            <Button success onPress={() => TrackPlayer.skipToPrevious()}
                title=" << back " />
           <Button info onPress={() => { TrackPlayer.play() }}
                title="Play >" />
          
            <Button success onPress={() => TrackPlayer.skipToNext()}
                title=" next >>" />
            <Button warning onPress={() => TrackPlayer.pause()}
                        title="Pause ||" />
            
           <Button danger onPress={() => TrackPlayer.stop()}
               title="stop" />
          
        </View>
      )
    }
}

