import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import fixgame from './fixgams';
import matchstyle from './matchstyle';

const Matches = () => {
  return (
    <View>
      <FlatList
        data={fixgame}
        renderItem={({item}) => (
          <View>
            <View style={matchstyle.dateview}>
              <View style={matchstyle.dateviewholder}>
                <Text>{item.time}</Text>
                <Text>{item.date}</Text>
              </View>
              <Pressable style={matchstyle.morepress}>
                <Text style={matchstyle.moretext}>More</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Matches;

const styles = StyleSheet.create({});
