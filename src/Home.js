import {StyleSheet, Text, View, Pressable, SafeAreaView} from 'react-native';
import React from 'react';
import Mydropdwon from './Mydropdwon';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Pressable>
          <Text>Regular bet</Text>
        </Pressable>
        <Pressable>
          <Text>customized bet</Text>
        </Pressable>
      </View>
      <View>
        <Mydropdwon />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
