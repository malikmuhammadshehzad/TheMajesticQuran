import { COLORS, FONT } from '../../assets';

const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    padding: 17,
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arabicTitle: {
    fontSize: 65,
    color: COLORS.navyBlue,
    fontFamily:FONT.QuranFont,
    //  backgroundColor:'coral'
  },
  number: {
    fontSize: 27, 
    color: COLORS.navyBlue,
    fontWeight: '700',
  },
  surahTitle: {
    marginBottom: 15,
    fontSize: 19,
    color: COLORS.navyBlue,
    fontFamily: FONT.RobotoMedium,
  },
  bismila: {
    marginTop:11,
    marginBottom: 15,
    // backgroundColor:'coral',
    fontSize: 37,
    fontFamily:FONT.QuranFont,
    color: COLORS.black,
    fontFamily: FONT.RobotoMedium,
  },
  
  store: {
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 25,
    color: COLORS.black,
    fontFamily: FONT.MinionProRegular,

  },
  iconContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '95%',
  },
  ayat: {
    marginTop: 9,
    fontSize: 57,
    color: COLORS.black,
    fontFamily:FONT.QuranFont
  },
  heading: {
    marginVertical: 12,
    fontSize: 23,
    color: COLORS.red,
    fontWeight: '500',
  },
  paragraph: {
    marginVertical: 12,
    fontSize: 22,
    color: COLORS.black,
    fontWeight: '500',
  },
  audioContainer: {
    backgroundColor: 'yellow',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  surahName: {
    fontSize: 22,
    marginLeft: 9,
    fontWeight: '600',
    color: COLORS.black,
  },
  audioIconContainer: {
    flexDirection: 'row',
    marginTop: 3,
    justifyContent: 'space-between',
    width: '50%'
  },
});
export default styles;
