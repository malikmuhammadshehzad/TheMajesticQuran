import {COLORS} from '../../assets';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.navyBlue,
  },
  mainTitleContainer: {
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
  iconContainer: {
    height: 50,
    backgroundColor: 'yellow',
    // justifyContent: 'center',
    // alignItems: 'flex-end',
    // width: '95%',
  },
  ayat: {
    lineHeight:45,
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.white,
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
});
export default styles;
