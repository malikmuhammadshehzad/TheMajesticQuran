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
    width: '65%',
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
