import {StyleSheet, Text, View, Pressable, SafeAreaView} from 'react-native';
import React from 'react';
import Mydropdwon from './Mydropdwon';
import homestyle from './homestyle';
import { ScrollView } from 'react-native-gesture-handler';
import Matches from './Matches';

const Home = () => {
  return (
    <SafeAreaView style={homestyle.homesafeview}>
    
     <View style={homestyle.regularview}>
        <View style={homestyle.regularpress}>
          <Pressable>
            <Text style={homestyle.regulartext}>Regular bet</Text>
          </Pressable>
        </View>
        <View>
          <Pressable>
            <Text>customized bet</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Mydropdwon />
      </View>
    
     {/* <Matches/> */}
    
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
