import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTimer} from 'use-timer';
import {Context} from '../../App';

import {SettingsIcon, PlayIcon, ResetIcon} from '../assets/icons';

function TouchTile({
  id,
  styles,
  enable,
  setFlip,
}: {
  id: string;
  styles?: object;
  enable: boolean;
  setFlip: (v: boolean | ((b: boolean) => boolean)) => void;
}) {
  const {time, start, pause, reset} = useTimer({
    initialTime: 100,
    endTime: 0,
    timerType: 'DECREMENTAL',
  });

  var minutes = Math.floor(time / 60);
  var sec = time % 60;
  var seconds = sec >= 10 ? sec : '0' + sec;

  useEffect(() => {
    console.log(`${id} = ${enable}`);
    if (enable) {
      start();
    } else {
      pause();
    }
  }, [enable]);

  return (
    <TouchableOpacity
      style={{
        height: '45%',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles,
      }}
      onPress={() => {
        console.log(`Pressed ${id} (which is ${enable})`);
        if (enable) {
          setFlip(e => !e);
        }
      }}>
      <Text style={{color: '#000000', fontSize: 72}}>
        {minutes + ':' + seconds}
      </Text>
      <Text style={{color: '#000000'}}>0 MOVES</Text>
    </TouchableOpacity>
  );
}

export default function Home({navigation}: {navigation: any}) {
  const [flip, setState] = useState(false);
  const [gameReady, setGameReady] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000000',
        paddingVertical: '10%',
        paddingHorizontal: 10,
      }}>
      <TouchTile
        id="#1"
        styles={{transform: [{rotate: '180deg'}]}}
        enable={flip && gameReady}
        setFlip={setState}
      />

      <View
        style={{
          height: '10%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <SettingsIcon onPress={() => navigation.navigate('setting')} />
        <PlayIcon onPress={() => setGameReady(true)} />
        <ResetIcon />
      </View>

      <TouchTile id="#2" enable={!flip && gameReady} setFlip={setState} />
    </View>
  );
}
