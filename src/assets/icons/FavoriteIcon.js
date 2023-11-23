import * as React from "react"
import Svg, { Path } from "react-native-svg"
const  FavoriteIcon = ({ iconSize = 24, containerSize = 26, color, ...props}) => (
  <Svg
  // style={{backgroundColor:'yellow'}}
  width={containerSize} height={containerSize}
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <Path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={50}
      transform={`scale(${iconSize / 21})`}
      d="M352 48H160a48 48 0 0 0-48 48v368l144-128 144 128V96a48 48 0 0 0-48-48z"
    />
  </Svg>
)
export default FavoriteIcon
