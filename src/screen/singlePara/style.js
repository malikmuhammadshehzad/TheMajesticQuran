import { COLORS, FONT } from '../../assets';

const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

  },
  mainTitleContainer: {
    backgroundColor: COLORS.navyBlue,
    flexDirection: 'row',
    height: '10%',
    alignItems: 'center',
  },
  backIconContainer: {
    width: '15%',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    width: '70%',
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: COLORS.white,
  },
  iconContainer: {
    // backgroundColor:'coral',
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastseen: {
    backgroundColor: 'coral',
    marginTop: -9,
    color: COLORS.black
  },
  flatContainer: {
    paddingHorizontal: "5%",
    marginVertical: 11,
    // backgroundColor:'coral'
  },
  ayat: {
    fontSize: 40,
    fontFamily: FONT.QuranFont,
    color: COLORS.black,
    //  backgroundColor:'yellow',
  },

  romanName: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '500',
  },
});
export default styles;
