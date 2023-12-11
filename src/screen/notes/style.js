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
  mainList: {
    backgroundColor: COLORS.white,
    height: 95,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    borderRadius: 12
  },
  plusContainer: {
    position: 'absolute',
    top: "90%",
    right: "3%",
    zIndex: 999,
  },
  cancleContainer: {
    position: 'absolute',
    top: "90%",
    right: "3%",
    zIndex: 999,
  },
  listText: {
    padding: 12,
    width: '82%'
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: COLORS.navyBlue
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    marginVertical: 1
  },
  shareIcon: {

    width: '18%',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center'
  },
  iconContainer: {
    marginBottom: 22,
    // backgroundColor: 'coral',
    width: '100%',
    height: '7%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default styles