import { COLORS } from "../../assets";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    mainContainer:{
     backgroundColor:'coral',
     alignItems:'center',
     padding:12
    },
    titleContainer:{
     flexDirection:'row',
    },
    arabicTitle:{
        fontSize:33,
        color:COLORS.navyBlue
    },
    iconContainer:{
        alignItems:'flex-end',
        width:'95%'
    },
    firstContainer:{
        
    },
    audioContainer:{
        backgroundColor:'yellow',
        height:50,
        padding:12,
        flexDirection:'row',   
        justifyContent:'space-between'
    },
    surahName:{
        fontSize:22,
        fontWeight:'600',
        color:COLORS.black
    },
    audioIconContainer:{
        flexDirection:'row',
        backgroundColor:'coral'
    }
})
export default styles