import {COLORS, FONT} from '../../assets';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  manContainer: {
    flex: 1,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.navyBlue,
    height: '15%',
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  colorText: {
    color: COLORS.yellow,
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
  loginMainContainer: {
    height:610,
     paddingHorizontal:22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
     marginVertical:19,
    alignItems: 'center',
  },
  title: {
    height:75,
    fontWeight: '700',
    color: COLORS.navyBlue,
    fontSize: 40,
  },
  forgetContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  forgetText: {
    marginVertical: 12,
    fontSize: 19,
    fontWeight: '700',
    color: COLORS.red,
  },
  inputContainer: {
    height: 120,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 7,
  },
  noAccountText: {
    fontSize: 22,
    fontWeight: '500',
  },
});
