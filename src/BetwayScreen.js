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
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import socertype from './socertype';
import Mydropdwon from './Mydropdwon';
import BetType from './BetType';
import Matches from './Matches';

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
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
      <View style={betwaystyle.socertopview}>
        <FlatList
        //scrollEnabled={true}
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
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={socertype}
          renderItem={({item}) => (
            <View style={betwaystyle.socercatimgviewholder}>
              <Image style={betwaystyle.socercatimg} source={item.image} />
              <Text style={betwaystyle.socertopnameimage}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <View style={betwaystyle.hightbetview}>
        <View style={betwaystyle.hightlightview}>
          <Pressable>
            <Text style={betwaystyle.hightlighttext}>Highlight</Text>
          </Pressable>
          <Pressable>
            <Text style={betwaystyle.hightlighttext}>Upcoming games</Text>
          </Pressable>
        </View>
        <View style={betwaystyle.livenowview}>
          <Pressable>
            <Text style={betwaystyle.livenowtext}>Live Now</Text>
          </Pressable>
        </View>
      </View>
      <View style={betwaystyle.leagueview}>
        <View style={betwaystyle.leaguedropdown}>
          <Mydropdwon />
        </View>
        <View style={betwaystyle.leaguedropdown}>
          <BetType />
        </View>
      </View>
      <View style={betwaystyle.betmatchvie}>
        <Matches />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BetwayScreen;

const styles = StyleSheet.create({});
