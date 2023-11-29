import { COLORS } from "../../assets";

const { StyleSheet } = require("react-native");

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
      },
      titleContainer: {
        alignItems: 'center',
        width: '85%',
      },
      heading: {
        fontSize: 27,
        color: 'white',
        fontWeight: '700',
      },
      mainList:{
        backgroundColor:COLORS.white,
        height:95,
        flexDirection:'row',
       alignItems:'center',
       marginVertical:12,
       borderRadius:12
      },
      shareContainer:{
        position: 'absolute',
        top: 645,
        right: 10,
        zIndex: 999,
      },
      listText:{
        padding:12,
        width:'87%'
      },
      title:{
        fontSize:25,
        fontWeight:'600',
        color:COLORS.navyBlue
      },
      text:{
        fontSize:17,
        fontWeight:'500',
        marginVertical:1
      }
})
export default styles