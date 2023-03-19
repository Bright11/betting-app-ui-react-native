import {StyleSheet} from 'react-native';
const betwaystyle = StyleSheet.create({
  topbarview: {
    flexDirection: 'row',
    gap: 7,
  },
  topsingup: {
    backgroundColor: '#31AA54',
    padding: 13,
  },
  topsingupslip: {
    backgroundColor: '#31AA54',
    padding: 13,
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },
  topsinguptextslipnumber: {
    position: 'absolute',
    top: 18,
    color: 'black',
    backgroundColor: 'yellow',
    borderRadius: 100,
    padding: 5,
    width: 25,
    alignSelf: 'center',
    fontWeight: '700',
  },
  topsinguptext: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontWeight: '700',
    fontSize: 14,
  },
});

export default betwaystyle;
