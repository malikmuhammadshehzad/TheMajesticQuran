import { COLORS, FONT } from "../../assets";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    mainContainer:{
        padding:17
    },
    text:{
        fontSize:22,
        color:COLORS.black,
        fontFamily: FONT.Centaur,
        fontSize: 33,
        lineHeight:40
    }
})
export default styles