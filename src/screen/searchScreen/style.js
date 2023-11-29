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
        width: '89%',
      },
      heading: {
        fontSize: 27,
        color: 'white',
         
        fontWeight: '700',
      },
})
export default styles