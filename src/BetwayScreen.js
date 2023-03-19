import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useLayoutEffect} from 'react';
import betwaystyle from './betwaystyle';

const BetwayScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'BetWay',
      headerStyle: {backgroundColor: '#0E0E0E'},
      headerTitleStyle: {color: 'white'},
      headerTintColor: 'white',
      headerRight: () => (
        <View style={betwaystyle.topbarview}>
          <Pressable style={betwaystyle.topsingup}>
            <Text style={betwaystyle.topsinguptext}>Login</Text>
          </Pressable>
          <Pressable style={betwaystyle.topsingup}>
            <Text style={betwaystyle.topsinguptext}>Singup</Text>
          </Pressable>
          <Pressable style={betwaystyle.topsingupslip}>
            <Text style={betwaystyle.topsinguptextslipnumber}>3</Text>
            <Text style={betwaystyle.topsinguptext}>BetSlip</Text>
          </Pressable>
        </View>
      ),
      //   headerLeft: () => (
      //     <View>
      //       <Pressable style={betwaystyle.topsingup}>
      //         <Text style={betwaystyle.topsinguptext}>Singup</Text>
      //       </Pressable>
      //     </View>
      //   ),
    });
  }, [navigation]);
  return (
    <View>
      <Text>BetwayScreen</Text>
    </View>
  );
};

export default BetwayScreen;

const styles = StyleSheet.create({});
