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
  },
  heading: {
    fontSize: 27,
    color: 'white',
    marginLeft: '14%',
    fontWeight: '700',
  },
  mainSurahContainer: {
    flex: 1,
    // backgroundColor: 'coral',
  },
  surahContainer: {
    backgroundColor: 'white',
    height:100,
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 12,
  },
  index: {
    width: '10%',
    // backgroundColor: 'coral',
    fontSize: 27,
    fontWeight: '700',
    paddingLeft: 7,
    color: COLORS.navyBlue,
  },
  nameContainer: {
    width: '64%',
    // backgroundColor:'blue',
    paddingLeft: 12,
  },
  engName: {
    fontSize: 29,
    fontWeight: '500',
    color: COLORS.black,
  },
  romanName: {
    fontSize: 19,
    color: COLORS.black,
  },
  arabicName: {
    width: '26%',
     paddingRight:7,
    fontSize: 27,
    color: COLORS.navyBlue,
    // backgroundColor:'yellow'
  },
});
export default styles;
