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
  //   top socer cat
  socertopview: {
    backgroundColor: '#333333',
  },
  socercatviewholder: {
    margin: 10,
  },
  socertopname: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontWeight: '700',
    fontSize: 18,
  },
  advertview: {
    marginTop: 10,
  },
  advertimg: {
    width: '100%',
  },
  socercatimgviewholder: {
    flexDirection: 'column',
    margin: 10,
    alignItems: 'center',
  },
  socercatimg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  socertopnameimage: {
    color: 'black',
    fontFamily: 'Montserrat-Medium',
    fontWeight: '700',
    fontSize: 20,
  },
  hightbetview: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    marginTop: 20,
    marginBottom: 20,
  },
  hightlightview: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#31AA54',
    paddingTop: 20,
    paddingBottom: 20,
    width: '80%',
  },
  hightlighttext: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontWeight: '700',
    letterSpacing: 1,
    fontSize: 20,
  },
  livenowview: {
    backgroundColor: '#F8FF13',
    width: '40%',
    paddingTop: 20,
    paddingBottom: 20,
    //alignItems: 'center',
  },
  livenowtext: {
    color: 'black',
    fontFamily: 'Montserrat-Medium',
    fontWeight: '700',
    letterSpacing: 1,
    fontSize: 16,
  },
  leagueview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leaguedropdown: {
    width: '50%',
  },
  betmatchvie:{
    marginLeft:10,
    marginRight:10
  }
});

export default betwaystyle;
