import {beginAsyncEvent} from 'react-native/Libraries/Performance/Systrace';
import {COLORS} from '../../assets';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.navyBlue,
    padding: 12,
  },
  headingContainer: {
    height: '8%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent:'space-between'
  },
  heading: {
    fontSize: 27,
    color: 'white',
    fontWeight: '700',
  },
  indicator:{
 marginTop:230
  },
  mainSurahContainer: {
    flex: 1,
  },
  surahContainer: {
    backgroundColor: 'white',
    height: 85,
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 12,
  },
  numContainer:{
    width: '15%',
    alignItems:'center'
  },
  index: {
    fontSize: 22,
    fontWeight: '700',
    paddingLeft: 9,
    color: COLORS.navyBlue,
  },
  nameContainer: {
    width: '53%',
    paddingLeft: 9,
  },
  engName: {
    fontSize: 27,
    fontWeight: '500',
    color: COLORS.black,
  },
  romanName: {
    fontSize: 17,
    color: COLORS.black,
  },
  arabicName: {
    width: '30%',
    fontSize: 27,
    color: COLORS.navyBlue,
  },
});
export default styles;
