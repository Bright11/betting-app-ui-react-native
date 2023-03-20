import {StyleSheet} from 'react-native';
const matchstyle = StyleSheet.create({
  holderview: {
    flexDirection: 'column',
  },
  dateview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  morepress: {
    backgroundColor: 'gray',
    marginBottom: 5,
    padding: 8,
  },
  moretext: {
    color: 'white',
  },
  dateviewholder: {
    flexDirection: 'row',
  },
  clubsview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  clubpress: {
    backgroundColor: '#7BB661',
    padding: 10,
  },
  clubtextname: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontWeight: '700',
  },
});

export default matchstyle;
