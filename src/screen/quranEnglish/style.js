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
  maiEngQuranText:{
    padding:12
  },
  introContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom:12
  },
  
  introHeading: {
    color: COLORS.navyBlue,
    fontSize: 34,
    fontWeight: '600',
  },
  engQuranText:{
    color: COLORS.black,
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 37,
  }
});
export default styles;
