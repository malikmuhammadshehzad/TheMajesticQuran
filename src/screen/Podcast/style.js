import {COLORS, FONT} from '../../assets';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  mainContainer: {
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
  userContainer: {
    backgroundColor: COLORS.grey,
    height: 50,
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row',
  },
  userName: {
    fontSize: 22,
    fontWeight: '600',
    width: '70%',
    paddingLeft: '4%',
    color:COLORS.navyBlue
  },
  scrollContainer:{
    flex:1, 
    padding:12,
  },
  videoContainer:{
 marginBottom:19,
  },
  title:{
    fontFamily:FONT.RobotoBold,
    fontSize:21,
    color:COLORS.black,
    marginVertical:7,
  },
  discription:{
    fontFamily:FONT.MinionProRegular,
    marginBottom:11,
    fontSize:20
  }
});
