import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import betwaystyle from './betwaystyle';
import {FlatList} from 'react-native-gesture-handler';
import socertype from './socertype';

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
    <SafeAreaView>
      <View style={betwaystyle.socertopview}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={socertype}
          renderItem={({item}) => (
            <View style={betwaystyle.socercatviewholder}>
              <Text style={betwaystyle.socertopname}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      {/* <ImageBackground
        source={require('./socerimg/background.jpg')}></ImageBackground> */}
      <View style={betwaystyle.advertview}>
        <Image
          style={betwaystyle.advertimg}
          source={require('./socerimg/background.jpg')}
        />
      </View>
    </SafeAreaView>
  );
};

export default BetwayScreen;

const styles = StyleSheet.create({});
