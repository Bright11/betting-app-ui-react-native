import {StyleSheet} from 'react-native';
const homestyle = StyleSheet.create({
  homesafeview: {
    flex: 1,
    backgroundColor: '#241D1D',
    height:"100%"
  },
  regularview: {
    backgroundColor: '#E3AC26',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 20,
    marginTop: 20,
  },
  regularpress: {
    backgroundColor: '#D8D0CC',
    borderRadius: 20,
    padding: 10,
  },
  regulartext: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default homestyle;
