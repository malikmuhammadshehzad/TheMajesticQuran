import {COLORS} from '../../assets';

const {StyleSheet} = require('react-native');

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
    fontSize: 37,
    color: COLORS.navyBlue,
    fontWeight: '700',
  },
  number: {
    fontSize: 27,
    color: COLORS.navyBlue,
    fontWeight: '700',
  },
  surahTitle: {
    marginTop: 9,
    fontSize: 19,
    color: COLORS.navyBlue,
    fontWeight: '600',
  },
  iconContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '95%',
  },
  ayat: {
    marginTop: 9,
    fontSize: 33,
    color: COLORS.black,
    fontWeight: '600',
  },
  heading: {
    marginVertical: 12,
    fontSize: 22,
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
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  surahName: {
    fontSize: 22,
    marginLeft:9,
    fontWeight: '600',
    color: COLORS.black,
  },
  audioIconContainer: {
    flexDirection: 'row',
     marginTop:3,
    justifyContent:'space-between',
    width:'50%'
  },
});
export default styles;
