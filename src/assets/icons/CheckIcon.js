import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CheckIcon = ({ size = 30, color = 'white', ...props }) => (
    <Svg
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M4 12.611 8.923 17.5 20 6.5"
        />
    </Svg>
)
export default CheckIcon
