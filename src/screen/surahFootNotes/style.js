import { COLORS } from "../../assets";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  mainContainer:{
    padding:12,
    marginBottom:12
  },
  title:{
    color:COLORS.navyBlue,
    fontSize:33,
    fontWeight:'700',
    marginBottom:12
  },
  text:{
    color:COLORS.black,
    fontSize:27,
    paddingLeft:7
  }
})

export default styles