import {View, Text, TextInput} from 'react-native'
import React from 'react'
import { FontStyle, Font } from '../assets/fonts';
import { CancelIcon, QueeenIcon } from '../assets/icons';

export function SetTime(){
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          backgroundColor: '',
          paddingVertical: 16,
          position: 'relative',
        }}>
        <CancelIcon
          style={{position: 'absolute', right: 28, top: 28}}
          onPress={() => console.log('Hellow ')}
        />
        <View style={{marginTop: '60%'}}>
          <Text
            style={{
              fontSize: 30,
              ...FontStyle.regular,
              letterSpacing: 2,
              color: 'black',
            }}>
            NAME
          </Text>
          <TextInput
            style={{
              borderColor: '#CFCDCD',
              height: 62,
              borderRadius: 4,
              borderWidth: 1,
              marginTop: 10,
              paddingHorizontal: 12,
              fontSize: 22,
              ...FontStyle.regular,
            }}
          />
        </View>

        <View style={{marginTop: '15%'}}>
          <Text
            style={{
              fontSize: 30,
              ...FontStyle.regular,
              letterSpacing: 2,
              color: 'black',
            }}>
            TIME
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              //   paddingHorizontal: 5,
              marginTop: 12,
            }}>
            <Text style={{...Font.displayStyle, letterSpacing: 2}}>
              1ST PLAYER
            </Text>
            <Text style={{...Font.displayStyle, letterSpacing: 2}}>
              2ND PLAYER
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              position: 'relative',
              marginTop: 12,
            }}>
            <View
              style={{
                height: 80,
                width: '40%',
                backgroundColor: '#F5F5F5',
                justifyContent: 'center',
                borderRadius: 4,
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 28, ...FontStyle.regular, color: 'black'}}>
                10:00
              </Text>
            </View>
            <View
              style={{
                position: 'relative',
                height: 80,
                // backgroundColor: 'yellow',
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 24,
                  color: 'black',
                  bottom: 0,
                  position: 'absolute',
                }}>
                VS
              </Text>
            </View>
            <View
              style={{
                height: 80,
                width: '40%',
                borderRadius: 4,
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 28, color: '#FFFFFF', ...FontStyle.regular}}>
                10:00
              </Text>
            </View>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
            <Text
              style={{
                fontSize: 18,
                ...FontStyle.regular,
                letterSpacing: 4,
                color: 'black',
              }}>
              SAME TIME FOR PLAYER 2
            </Text>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 2,
                backgroundColor: 'black',
                marginLeft: '12%',
              }}></View>
          </View>
        </View>

        <View
          style={{
            height: 70,
            width: '100%',
            backgroundColor: 'black',
            marginTop: '20%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            flexDirection: 'row',
          }}>
          <QueeenIcon style={{marginRight: 12}} />
          <Text
            style={{
              fontSize: 24,
              color: 'white',
              ...FontStyle.regular,
              letterSpacing: 2,
            }}>
            SAVE
          </Text>
        </View>
      </View>
    );
}