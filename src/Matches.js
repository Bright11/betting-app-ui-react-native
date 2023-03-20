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
          <View style={matchstyle.holderview}>
            <View style={matchstyle.dateview}>
              <View style={matchstyle.dateviewholder}>
                <Text>{item.time} | </Text>
                <Text>{item.date}</Text>
              </View>
              <Pressable style={matchstyle.morepress}>
                <Text style={matchstyle.moretext}>More</Text>
              </Pressable>
            </View>
            <View style={matchstyle.clubsview}>
              <Pressable style={matchstyle.clubpress}>
                <Text style={matchstyle.clubtextname}>{item.host}</Text>
              </Pressable>
              <Pressable style={matchstyle.clubpress}>
                <Text style={matchstyle.clubtextname}>
                  Draw {item.drawprice}
                </Text>
              </Pressable>
              <Pressable style={matchstyle.clubpress}>
                <Text style={matchstyle.clubtextname}>{item.visitor}</Text>
              </Pressable>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Matches;

const styles = StyleSheet.create({});
