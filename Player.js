import React from 'react';
import { View , Button, StyleSheet} from 'react-native';
import TrackPlayer  from 'react-native-track-player';
import { styles } from './App';


export default class Player extends React.Component {
   
    async componentDidMount() {


        TrackPlayer.addEventListener(
            'remote-stop', () => {TrackPlayer.stop()})

        TrackPlayer.addEventListener(
            'remote-pause',  () => {TrackPlayer.pause()})

        TrackPlayer.addEventListener(
            'remote-play', () => {TrackPlayer.play()})
    
        TrackPlayer.addEventListener(
            'remote-next', () => {TrackPlayer.skipToNext()})
    
        TrackPlayer.addEventListener(
            'remote-previous', () => {TrackPlayer.skipToPrevious()})
       
       
        TrackPlayer.updateOptions({
        alwaysPauseOnInterruption: true,
        waitForBuffer: true,
        stopWithApp: true,
                              
        capabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_STOP,
            TrackPlayer.CAPABILITY_PAUSE,
            TrackPlayer.CAPABILITY_SKIP,
            TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
            TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
			
        ],

          
        compactCapabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_STOP,
            TrackPlayer.CAPABILITY_PAUSE,
            TrackPlayer.CAPABILITY_SKIP,
            TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
            TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        ]  ,

                    
        notificationCapabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_STOP,
            TrackPlayer.CAPABILITY_PAUSE,
            TrackPlayer.CAPABILITY_SKIP,
            TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
            TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
            
          
        ],

                 
        });

        

        await TrackPlayer.add({
            id: '0',
            url: 'http://www.sovmusic.ru/m32/poehali.mp3', 
            title: 'Поехали',
            artist: 'Гагарин',
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

        await TrackPlayer.add({
            id: '3',
            url: 'http://www.sovmusic.ru/m32/lamarse3.mp3', 
            title: 'a la Patri..',
            artist: 'Ф Шаляпин',
                
            });
    

   
    }
    render() {
      
        return ( null/*
            <View style={styles.fixToText} >
               <Button success onPress={() => TrackPlayer.skipToPrevious()}
                   title="<<" />
                   
              <Button info onPress={() => { TrackPlayer.play() }}
                   title="Play >" />
             
               <Button success onPress={() => TrackPlayer.skipToNext()}
                   title="  >>" />
   
               <Button warning onPress={() => TrackPlayer.pause()}
                           title=" pause ||" />
               
              <Button danger onPress={() => TrackPlayer.stop()}
                  title="stop" />
             
           </View>*/
         )
       }
   }

   
 