import {COLORS} from '../../assets';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainTitleContainer: {
    flexDirection: 'row',
    height: '12%',
    alignItems: 'center',
    backgroundColor: COLORS.navyBlue,
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
  romanName: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '500',
  },
  maiEngQuranText: {
    padding: 12,
  },
  scrollContainer:{
    padding:15
  },
  introContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },

  introHeading: {
    color: COLORS.navyBlue,
    fontSize: 34,
    fontWeight: '600',
  },
  engQuranText: {
    color: COLORS.black,
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 37,
  },
  FlatListContainer: {
    alignItems: 'center',
    padding:15
  },
  SurahTitleContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numAyatContainer: {
    alignItems: 'center',
    marginRight:-2
  },
  ayatNum: {
    fontSize: 20,
    color: COLORS.navyBlue,
    fontWeight: '700',
  },
  numAyats:{
    fontSize: 17,
    color: COLORS.navyBlue,
    fontWeight: '700',
  },
  number: {
    fontSize: 20,
    color: COLORS.navyBlue,
    fontWeight: '700',
  },
  arabicTitle: {
    fontSize: 35,
    color: COLORS.navyBlue,

    fontWeight: '700',
  },
  surahTitle: {
    marginTop: 3,
    fontSize: 19,
    color: COLORS.navyBlue,
    fontWeight: '600',
  },
  bismilaContainer:{
  alignItems:"center"
  },
  arabicBismillah:{
    marginTop: 12,
    fontSize: 27,
    marginBottom:7,
    color: COLORS.black,
    fontWeight: '600',
  },
  englishBismillah:{
    lineHeight: 37,
    marginTop: 12,
    fontSize: 20,
    marginBottom:7,
    color: COLORS.black,
    fontWeight: '500',
  },
  heading: {
    marginVertical: 12,
    fontSize: 27,
    color: COLORS.red,
    fontWeight: '700',
  },
  paragraph: {
    lineHeight: 37,
    marginVertical: 12,
    fontSize: 22,
    color: COLORS.black,
    fontWeight: '500',
  },
});
export default styles;
