import * as React from "react"
import Svg, { Path } from "react-native-svg"
const  BackIcon = ({ size=25 , color='white' , ...props}) => (
  <Svg
    // style={{backgroundColor:'yellow'}}
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      transform={`scale(${size / 20})`}
      d="M19 12.56H5M12 19.56l-7-7 7-7"
    />
  </Svg>
)
export default BackIcon
