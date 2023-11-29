import { StyleSheet } from "react-native";
import { COLORS } from "../../assets";

const styles = StyleSheet.create({
    manContainer: {
      flex: 1,
    },
    textContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:COLORS.navyBlue,
      height: '15%',
    },
    heading: {
      fontSize: 35,
      fontWeight: 'bold',
      color: 'white',
    },
    text: {
      fontSize: 25,
      color: 'white',
    },
    colorText: {
      color: 'yellow',
    },
    scrollViewStyle: {
      backgroundColor:COLORS.white,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
  
    Category: {
      backgroundColor: 'white',
      borderColor: 'yellow',
      borderWidth: 5,
      borderRadius: 17,
      width: 160,
      height: 150,
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
      fontSize: 18,
      fontWeight: '700',
      color: '#000080',
     
    },
  });

  export default styles