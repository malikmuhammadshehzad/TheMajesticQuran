import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../assets";

const styles = StyleSheet.create({
  manContainer: {
    flex: 1,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.navyBlue,
    height: '14%',
  },
  heading: {
    fontSize: 40,
    fontFamily: FONT.MinionProRegular,
    color: COLORS.white,
    // backgroundColor:'red',

  },
  text: {
    fontSize: 21,
    fontWeight: '300',
    marginTop: -3,
    color: COLORS.white,
  },
        
  line:{
    color:COLORS.white,
    marginTop:-1
  } ,     
  
  colorText: {
    color: COLORS.yellow
  },
  scrollViewStyle: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  Category: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.yellow,
    borderWidth: 5,
    borderRadius: 17,
    width: "47%",
    height: 170,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    backgroundColor: 'coral',
  },
  image: {
    resizeMode: 'contain',
    height: '60%',
    width: '100%',
  },
  categoryText: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 19,
    fontFamily: FONT.impact,
    color: COLORS.navyBlue,

  },
});

export default styles