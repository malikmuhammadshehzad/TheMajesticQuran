import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = ({ size=25 , ...props}) => (
  <Svg
  width={size}
    height={size}
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <Path
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      transform={`scale(${size / 20})`}
      d="m268 112 144 144-144 144m124-144H100"
    />
  </Svg>
)
export default SvgComponent
