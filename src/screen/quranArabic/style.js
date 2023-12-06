import { beginAsyncEvent } from 'react-native/Libraries/Performance/Systrace';
import { COLORS, FONT } from '../../assets';

const { StyleSheet } = require('react-native');

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
    justifyContent: 'space-between',

  },
  heading: {
    fontSize: 27,
    color: 'white',
    width: '75%',
    fontWeight: '700',
  },
  indicator: {
    marginTop: 230
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
  numContainer: {
    width: '13%',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  index: {
    fontSize: 22,
    fontWeight: '700',
    paddingLeft: 9,
    color: COLORS.navyBlue,
  },
  nameContainer: {
    width: '50%',
    paddingLeft: 9,
    // backgroundColor:'yellow'
  },
  engName: {
    fontSize: 23,
    fontFamily: FONT.RobotoMedium,

    color: COLORS.black,
  },
  romanName: {
    fontSize: 17,
    color: COLORS.black,
  },
  arabicContainer: {
   
  },
  arabicName: {
    fontFamily: FONT.QuranFont,
    width: '34%',
    fontSize: 50,
    color: COLORS.navyBlue,
  },
});
export default styles;
